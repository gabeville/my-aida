/**
 * Types for Demo Session Management
 */

export interface DemoSession {
  id: string;
  token: string;
  ipAddress: string;
  expiresAt: Date;
  messageCount: number;
  createdAt: Date;
}

export interface DemoConfig {
  enabled: boolean;
  jwtSecret: string;
  expiryHours: number;
  maxMessages: number;
  maxSessionsPerIp: number;
}
