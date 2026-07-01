/**
 * Demo Session Manager - Manages anonymous demo sessions
 */

import { randomUUID } from 'crypto';
import jwt from 'jsonwebtoken';
import { logger } from '@librechat/data-schemas';
import { Time } from 'librechat-data-provider';
import { standardCache } from '../cache/cacheFactory';
import type { Keyv } from 'keyv';
import type { DemoSession, DemoConfig } from './types';

export class DemoSessionManager {
  private cache: Keyv;
  private config: DemoConfig;

  constructor() {
    this.config = this.loadConfig();
    this.cache = standardCache('demo-sessions', this.config.expiryHours * Time.ONE_HOUR);
  }

  private loadConfig(): DemoConfig {
    const defaultExpiryHours = 4;
    const defaultMaxMessages = 15;
    const defaultMaxSessionsPerIp = 3;

    return {
      enabled: process.env.DEMO_MODE === 'true',
      jwtSecret: process.env.DEMO_JWT_SECRET || process.env.JWT_SECRET || 'demo-secret-change-me',
      expiryHours: process.env.DEMO_EXPIRY_HOURS 
        ? parseInt(process.env.DEMO_EXPIRY_HOURS, 10) 
        : defaultExpiryHours,
      maxMessages: process.env.DEMO_MAX_MESSAGES 
        ? parseInt(process.env.DEMO_MAX_MESSAGES, 10) 
        : defaultMaxMessages,
      maxSessionsPerIp: process.env.DEMO_MAX_SESSIONS_PER_IP 
        ? parseInt(process.env.DEMO_MAX_SESSIONS_PER_IP, 10) 
        : defaultMaxSessionsPerIp,
    };
  }

  getConfig(): DemoConfig {
    return this.config;
  }

  isEnabled(): boolean {
    return this.config.enabled;
  }

  private async getIpSessionCount(ipAddress: string): Promise<number> {
    const ipKey = `ip:${ipAddress}`;
    const sessions = await this.cache.get<string[]>(ipKey);
    return sessions?.length || 0;
  }

  private async addSessionToIp(ipAddress: string, sessionId: string): Promise<void> {
    const ipKey = `ip:${ipAddress}`;
    let sessions = await this.cache.get<string[]>(ipKey) || [];
    sessions.push(sessionId);
    await this.cache.set(ipKey, sessions, this.config.expiryHours * Time.ONE_HOUR);
  }

  async createSession(ipAddress: string): Promise<DemoSession> {
    if (!this.config.enabled) {
      throw new Error('Demo mode is not enabled');
    }

    const currentCount = await this.getIpSessionCount(ipAddress);
    if (currentCount >= this.config.maxSessionsPerIp) {
      throw new Error('Too many demo sessions from this IP address');
    }

    const sessionId = randomUUID();
    const expiresAt = new Date(Date.now() + (this.config.expiryHours * Time.ONE_HOUR));

    const token = jwt.sign(
      { sessionId, ipAddress, type: 'demo' },
      this.config.jwtSecret,
      { expiresIn: `${this.config.expiryHours}h` }
    );

    const session: DemoSession = {
      id: sessionId,
      token,
      ipAddress,
      expiresAt,
      messageCount: 0,
      createdAt: new Date(),
    };

    await this.cache.set(`session:${sessionId}`, session);
    await this.addSessionToIp(ipAddress, sessionId);

    logger.info(`Created demo session ${sessionId} for IP ${ipAddress}`);
    return session;
  }

  async getSession(sessionId: string): Promise<DemoSession | null> {
    return await this.cache.get<DemoSession>(`session:${sessionId}`);
  }

  async validateToken(token: string): Promise<DemoSession | null> {
    try {
      const decoded = jwt.verify(token, this.config.jwtSecret) as { sessionId: string; ipAddress: string; type: string };
      
      if (decoded.type !== 'demo') {
        return null;
      }

      const session = await this.getSession(decoded.sessionId);
      if (!session || session.token !== token) {
        return null;
      }

      if (new Date() > session.expiresAt) {
        await this.invalidateSession(session.id);
        return null;
      }

      return session;
    } catch (error) {
      logger.error('Invalid demo token', error);
      return null;
    }
  }

  async incrementMessageCount(sessionId: string): Promise<{ success: boolean; remaining: number }> {
    const session = await this.getSession(sessionId);
    if (!session) {
      return { success: false, remaining: 0 };
    }

    if (session.messageCount >= this.config.maxMessages) {
      return { success: false, remaining: 0 };
    }

    session.messageCount += 1;
    await this.cache.set(`session:${sessionId}`, session);

    return { 
      success: true, 
      remaining: this.config.maxMessages - session.messageCount 
    };
  }

  async getRemainingMessages(sessionId: string): Promise<number> {
    const session = await this.getSession(sessionId);
    if (!session) return 0;
    return Math.max(0, this.config.maxMessages - session.messageCount);
  }

  async invalidateSession(sessionId: string): Promise<void> {
    const session = await this.getSession(sessionId);
    if (session) {
      await this.cache.delete(`session:${sessionId}`);
      
      const ipKey = `ip:${session.ipAddress}`;
      let sessions = await this.cache.get<string[]>(ipKey) || [];
      sessions = sessions.filter(id => id !== sessionId);
      
      if (sessions.length > 0) {
        await this.cache.set(ipKey, sessions, this.config.expiryHours * Time.ONE_HOUR);
      } else {
        await this.cache.delete(ipKey);
      }
      
      logger.info(`Invalidated demo session ${sessionId}`);
    }
  }
}

export const demoSessionManager = new DemoSessionManager();
