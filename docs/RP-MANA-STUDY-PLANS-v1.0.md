╔══════════════════════════════════════════════════════════════════╗
║                    REASONING PACKAGE                            ║
║  ID: RP-MANA-STUDY-PLANS-v1.0                                  ║
║  Mode: PM1 + PM2 (Estratégia + Execução)                       ║
║  Priority: HIGH — Core do produto MANA                         ║
║  Fonte: PRD-AIDA-v2.0 + Conversas de 05-06/06/2026            ║
║  Gerado por: Claude Sonnet 4.6                                  ║
╚══════════════════════════════════════════════════════════════════╝

---

# 🧠 ARCHITECTURE DECISION

## O que este RP entrega

O sistema completo de planos de estudo da AIDA —
da triagem diagnóstica até o adulto fluente —
para os 4 perfis identificados em sessão com Gabriel:

  PERFIL 1 — O Zero (nunca aprendeu, trauma de escola)
  PERFIL 2 — O Travado (estudou mas não fala)
  PERFIL 3 — O Especialista (fala mas precisa de nicho)
  PERFIL 4 — O Multilíngue (inglês fluente, quer 3ª língua)

Cada perfil tem:
- Jornada completa de 6-8 meses (do bebê ao adulto fluente)
- Roadmap mensal detalhado com missões e métricas
- Prompt de abertura da AIDA calibrado para o perfil
- Gatilhos de progressão de fase
- Indicadores de que a fluência foi atingida

## Premissas que governam todos os planos

NUNCA: tradução, gramática isolada, correção explícita
SEMPRE: imersão contextual, produção instintiva, refinamento orgânico
MÉTRICA REAL: estruturas ADQUIRIDAS (uso espontâneo), não acertos
RITMO: 5 minutos todo dia > 1 hora no domingo
PLATAFORMA: LibreChat com TTS nativo (vozes americanas)

---

# 🔍 SISTEMA DE TRIAGEM EXPANDIDO

## Por que a triagem é a peça mais crítica

A triagem não é formulário — é a primeira sessão de imersão.
O aluno não percebe que está sendo diagnosticado.
AIDA coleta tudo conversacionalmente em ~20 minutos.

Ao final, o sistema sabe:
  - Qual dos 4 perfis o aluno é
  - Qual das 5 personas ativar (Jordan/Alexandra/Miles/Zack/Hayes)
  - Qual plano de 6-8 meses aplicar
  - Qual é a velocidade de progressão esperada

## As 3 Fases da Triagem (do PRD v2.0, expandidas)

### FASE 1 — Quebra-Gelo Diagnóstico (5-10 min)
Detecta nível real de produção e identifica o perfil base.

AIDA abre sempre em inglês, mas com frases curtas e simples:

> "Hey! I'm AIDA. Before we dive in — tell me a bit about
> yourself. What do you do? Like, day-to-day stuff."

O que observar:

| Resposta | Nível | Perfil provável |
|---|---|---|
| "I... work. Yes. Good." | Iniciante | PERFIL 1 |
| "I work. English... difficult for me." | Básico travado | PERFIL 2 |
| "I work as a developer. I build mobile apps." | Intermediário | PERFIL 3 |
| "I'm a senior dev — been at it for 5 years now, mostly..." | Avançado | PERFIL 4 |

GATILHO DE PERFIL 2 (o travado):
  Aluno entende as perguntas, responde em português misturado,
  usa muito "sorry" e "how do I say", para no meio da frase.
  → Ele SABE, ele não consegue PRODUZIR.

GATILHO DE PERFIL 4 (multilíngue):
  Aluno responde com naturalidade em inglês.
  → Triagem muda para detectar qual 3ª língua e por quê.

### FASE 2 — Coleta de Perfil (5-7 min)
Identifica objetivo, interesses e disponibilidade.

> "Nice! And what got you into learning English today?
> Like, is there a specific thing you want to do with it?"

Mapeamento de objetivo → persona:

| Objetivo | Persona | Perfil mais comum |
|---|---|---|
| Viagem / morar fora | MILES | P1, P2, P4 |
| Carreira / trabalho | ALEXANDRA | P2, P3 |
| Conversação / social | JORDAN | P1, P2 |
| Games / tech / internet | ZACK | P1, P2 |
| Acadêmico / certificação | PROF. HAYES | P3, P4 |

> "And outside of that — what's your world?
> Netflix, games, gym, music... what do you actually like?"

→ Coleta 3 interesses para personalização de conteúdo.

> "Last thing — and be real with me —
> how much time can you actually give this per day?"

| Disponibilidade | Formato |
|---|---|
| 5 minutos | Micro-imersão ultra-focada |
| 15 minutos | Sessão padrão com cena completa |
| 30+ minutos | Sessão expandida com challenge |

### FASE 3 — Mini-Imersão Diagnóstica (5-8 min)
Confirma nível e detecta bloqueios específicos.

Para PERFIL 1 e 2 (foco viagem):
> "Quick scene — you're at JFK airport, just landed.
> You need to find your hotel shuttle.
> A stranger walks by. What do you say?"

Para PERFIL 2 (foco carreira):
> "Monday morning. You jump on a call with your team.
> The manager asks: 'Quick update — where do things stand?'
> What do you say?"

Para PERFIL 3 (especialista):
> "You're presenting to a client in English.
> They ask: 'Can you walk us through your main concern
> with this approach?' — how do you open?"

Para PERFIL 4 (multilíngue — 3ª língua):
> AIDA muda para o idioma-alvo com frases básicas:
> (Espanhol) "¿Puedes presentarte en español?
> Solo lo básico está bien."

### OUTPUT DA TRIAGEM — Perfil JSON

```json
{
  "aluno": "[Nome]",
  "perfil_mana": "zero | travado | especialista | multilingue",
  "nivel_diagnosticado": "iniciante | basico | intermediario | avancado",
  "foco_principal": "viagens | carreira | conversacao | games | academico",
  "persona_ideal": "Jordan | Alexandra | Miles | Zack | Prof. Hayes",
  "idioma_alvo": "inglês | espanhol | mandarim | francês | [outro]",
  "interesses": ["tema1", "tema2", "tema3"],
  "disponibilidade_diaria": "5min | 15min | 30min",
  "bloqueios_identificados": [
    "ansiedade de producao",
    "vocabulario do nicho",
    "tempo verbal",
    "pronuncia",
    "producao sob pressao"
  ],
  "objetivo_declarado": "[Em suas próprias palavras]",
  "objetivo_mana_3m": "[Meta mensurável de 3 meses]",
  "objetivo_mana_6m": "[Meta mensurável de 6 meses]",
  "velocidade_progressao_esperada": "lenta | normal | acelerada",
  "plano_atribuido": "PLANO-P1 | PLANO-P2 | PLANO-P3 | PLANO-P4"
}
```

AIDA encerra a triagem com:

> "I love it. I have everything I need to build your plan.
> Give me a moment — I'll put something together that
> actually fits your life. Not some generic course."

---

# 📚 OS QUATRO PLANOS DE ESTUDO COMPLETOS

---

## ═══════════════════════════════════════════════
## PLANO P1 — O ZERO
## "Do silêncio ao primeiro inglês real"
## Duração: 8 meses | Persona: varia por objetivo
## ═══════════════════════════════════════════════

### Quem é este aluno

Nunca aprendeu ou só teve inglês de escola pública.
Vocabulário: 50-100 palavras soltas.
Produção: não consegue formar uma frase.
Bloqueio principal: vergonha + crença de que
"não tem jeito para idiomas".
Referência do método: o bebê que produz "pepeta"
antes de "chupeta" — produção imperfeita é o início,
não o fracasso.

### Abertura da AIDA para P1

> "Hey! I'm AIDA — think of me as your English buddy,
> not your teacher. We're just gonna talk.
> No tests, no grades, no 'you got it wrong'.
> Just... conversation. Ready? Tell me your name
> and one thing you did today. Anything."

[Se o aluno responder em português:]
> "That works too! Now try saying just that first part
> in English. Any words you know — throw them at me."

### FASE 1: O BEBÊ NO IDIOMA (Meses 1-2)

Objetivo desta fase:
Criar as primeiras associações diretas conceito→inglês.
O aluno ainda não "fala" — ele "tenta".
Isso é exatamente o que deve acontecer.

MESES 1-2 — MISSÃO POR SEMANA:

Semana 1 — Primeiros Sons e Nomes
  Missão: Dizer seu nome, de onde é, o que faz.
  AIDA usa: frases ultra-curtas, vocabulário de 4-6 palavras
  Material: livro infantil digital nível 1 (ex: "Brown Bear")
           + imagens geradas pela AIDA ilustrando cada cena
  Métrica: 5 turnos de conversa sem abandonar
  Gatilho de progressão: aluno usa 3 palavras em inglês
                         de forma espontânea

Semana 2 — Rotina e Objetos do Dia a Dia
  Missão: Descrever a manhã em inglês com o que sabe.
  Material: imagens de cenas cotidianas + nomes em inglês
           (AIDA gera imagem da cena, aluno descreve)
  Cena de imersão: "You wake up. What's the first thing
                    you see? Point at it and tell me."
  Métrica: 8 turnos sem travar

Semana 3 — Família e Pessoas
  Missão: Apresentar uma pessoa real da sua vida.
  Cena: "Tell me about one person in your life.
         Someone important. Who are they?"
  Vocabulário contextual: she, he, my, friend, family
  Métrica: consegue identificar 3 relações em inglês

Semana 4 — Micro-Desafio 🔴
  Missão: Pedir algo simples em inglês (comida, direção).
  Cena: "You walk into a café. The barista looks at you.
         What do you say?"
  AIDA observa: o aluno consegue completar uma transação
                mínima mesmo com erros graves?
  Métrica: completar a cena em 3 turnos

Semana 5 — Sons do Idioma (Fonética por Contexto)
  Missão: Usar TTS da AIDA para ouvir e imitar blocos sonoros.
  Foco: "howyadoin", "whatsupp", "lemme know", "kinda"
  Não explicar o que significa — contextualizar sempre.
  AIDA usa na frase, aluno absorve o som antes da forma escrita.
  Métrica: aluno tenta reproduzir 2 blocos sonoros

Semana 6 — Números, Tempo, Lugar
  Missão: Dizer onde está, que horas são, qual data.
  Cena: "Where are you right now? What time is it there?
         What's outside your window?"
  Métrica: 3 informações de contexto expressas em inglês

Semana 7 — Comida e Preferências
  Missão: Falar sobre o que gosta e não gosta.
  Cena: "We're having dinner together. What do you order?"
  Material: imagens de pratos + vocabulário contextual
  Métrica: 5 expressões de preferência usadas

Semana 8 — Avaliação de Fase 🏆
  Missão: Conversa de 10 minutos sobre rotina.
  AIDA observa: vocabulário ampliou?
                produção ficou mais rápida?
                aluno para menos para pensar?
  Relatório para Gabriel: perfil atualizado + gaps
  Gatilho de progressão para Fase 2:
    ✅ 10+ turnos sem abandonar
    ✅ 20+ palavras usadas de forma espontânea
    ✅ Pelo menos 1 estrutura de frase completa

### FASE 2: A CRIANÇA CURIOSA (Meses 3-4)

Objetivo: O aluno começa a CONSTRUIR frases,
não apenas usar palavras soltas.
Começa a perguntar — sinal de que quer interagir.

Semana 9 — Perguntas Básicas
  Missão: Fazer 5 perguntas para a AIDA em uma sessão.
  Cena: "Now it's your turn. Ask me anything.
         About where I'm from, what I like — go."
  Foco: "What is...?", "Where is...?", "How do you...?"
  Métrica: 5 perguntas formadas

Semana 10 — Passado Simples
  Missão: Contar o que fez ontem ou semana passada.
  Cena: "Tell me about your weekend.
         What happened? Start from Saturday morning."
  AIDA usa "walked", "ate", "watched" naturalmente
  nas respostas, sem explicar o padrão.
  Métrica: 3 ações passadas expressas

Semana 11 — Gostos e Opinião
  Missão: Defender uma preferência com pelo menos 2 argumentos.
  Cena: "Pizza or sushi? Convince me."
  Foco: "I think...", "Because...", "For me..."
  Métrica: argumento sustentado por 3+ turnos

Semana 12 — Micro-Desafio 2 🔴
  Cena: Conversa com estranho em viagem.
  "You're on a plane. The person next to you says:
   'Long flight, huh? Where are you headed?'"
  Métrica: 5 turnos de conversa com estranho

Semanas 13-16 — Expansão Temática (por interesses)
  AIDA usa os 3 interesses coletados na triagem.
  Cada sessão tem cena dentro do universo do aluno.
  Fã de futebol → cena no estádio / discussão de jogo
  Fã de série → discussão sobre episódio / recomendar
  Gamer → Discord, partida, vocabulário de jogo
  Métricas progressivas: turnos por sessão aumentam
                         de 10 para 20 ao longo das semanas

### FASE 3: O ADOLESCENTE (Meses 5-6)

Objetivo: O aluno pensa em inglês sem perceber.
Começa a sonhar palavras em inglês.
Começa a corrigir os próprios erros sem que ninguém peça.

Semana 17 — Expressões Idiomáticas Naturais
  Não "today's idiom" — AIDA usa na conversa:
  "That's a long shot, don't you think?"
  "Let's cut to the chase."
  "I'm on the fence about that."
  Aluno absorve pelo contexto. Repete nas semanas seguintes.

Semana 18 — Narrar com Detalhes
  Missão: Contar uma história com começo, meio e fim.
  Cena: "Tell me about a time something went wrong.
         Could be anything. Take your time."
  Métrica: narrativa de 5+ turnos com sequência temporal

Semana 19 — Opiniões sobre Temas do Mundo
  Missão: Dar opinião sobre algo da atualidade.
  Cena dentro do nicho do aluno.
  Ex (fã de tech): "Do you think AI will take your job?"
  Métrica: sustentar posição por 6+ turnos

Semana 20 — Challenge de Alta Pressão 🔴
  Cena com problema real a resolver:
  "You ordered something online and it never arrived.
   You need to call customer service. I'm the agent.
   What do you say?"
  Métrica: resolver a situação sem sair do inglês

Semana 21-22 — Refinamento de Pronúncia por Contexto
  AIDA usa TTS com ênfase em padrões rítmicos do inglês.
  Aluno ouve e tenta imitar o ritmo, não a palavra isolada.
  Foco: ligação entre palavras, redução de vogais, stress.

Semana 23 — Revisão de Gaps da Memória de Aquisição
  AIDA foca nas estruturas que ainda estão EM PROCESSO.
  Cenas que forçam o uso espontâneo dessas estruturas.
  Sem mencionar para o aluno o que está sendo trabalhado.

Semana 24 — O Grande Desafio P1 🏆
  Missão: Conversa de 20 minutos sobre o objetivo declarado.
  Exemplo: "You just landed in your destination country.
            You need to check in at the hotel, ask about
            the area, and make dinner reservations.
            Go."
  Feedback formal ao final — primeiro feedback explícito
  que o aluno recebe em 6 meses.
  Critério de fluência P1:
    ✅ 20 minutos sem travar por mais de 10 segundos
    ✅ 30+ estruturas marcadas como ADQUIRIDAS
    ✅ Aluno resolve situação nova sem pedir ajuda

### PLANO P1 — REGRAS DE IMERSÃO ESPECÍFICAS

1. Celular em inglês desde a semana 1.
   Resistência é normal — faz parte do método.
2. Toda nova palavra: não buscar tradução.
   Buscar imagem ou vídeo em inglês sobre ela.
3. 5 minutos de TTS diário: ouvir AIDA falar e repetir
   em voz alta, mesmo sem entender tudo.
4. Diário semanal: 3 frases em inglês sobre a semana.
   Pode ser horrível. Deve ser tentado.

---

## ═══════════════════════════════════════════════
## PLANO P2 — O TRAVADO
## "Desbloquear o que já existe"
## Duração: 6 meses | Alta intensidade inicial
## ═══════════════════════════════════════════════

### Quem é este aluno

Estudou inglês por anos — escola, curso, app.
Entende filmes sem legenda, lê artigos em inglês.
Na hora de falar: congela. Trava. Pede desculpa.
Bloqueio principal: ansiedade de performance.
Crença limitante: "meu inglês é feio / errado".
Referência do método: o instrumento está afinado.
Só precisa de alguém que diga "pode tocar".

### Abertura da AIDA para P2

AIDA vai direto, sem cerimônia:

> "Okay, I need you to do something for me right now.
> Don't think. Just respond. Ready?
> What did you have for breakfast today?"

[Sem importar o que o aluno responder — certo ou errado:]
> "See? That worked. You just spoke English.
> That's literally all this is. Let's keep going."

O choque de normalidade é proposital.
P2 precisa do primeiro sucesso nos primeiros 60 segundos.

### FASE 1: DESBLOQUEIO RÁPIDO (Meses 1-2)

Semana 1 — O Primeiro Minuto que Muda Tudo
  AIDA não dá tempo para o aluno pensar.
  Perguntas rápidas, respostas rápidas.
  "Where are you? What time is it? What's near you?"
  Não importa o erro. Importa a resposta imediata.
  Métrica: 15 turnos em 20 minutos (ritmo acelerado)

Semana 2 — Produção Sem Filtro
  Missão: Falar sem revisar mentalmente antes.
  Cena: role-play de situação casual.
  "You run into an old friend on the street. Go."
  Se o aluno parar para pensar: AIDA pressiona gentilmente.
  "Don't translate — just say whatever comes."
  Métrica: menos de 5 pausas longas na sessão

Semana 3 — O Vocabulário Que Já Existe
  P2 tem vocabulário passivo enorme — reconhece tudo.
  Missão: ativar esse vocabulário para produção ativa.
  Cena: AIDA usa palavras complexas. Aluno deve responder
        usando palavras similares, não básicas.
  Métrica: 10 palavras "avançadas" usadas de forma ativa

Semana 4 — Challenge de Desbloqueio 🔴
  Missão: 10 minutos ininterruptos de conversa.
  Tema: qualquer área de interesse do aluno.
  Regra: AIDA para se o aluno ficar 15 segundos em silêncio.
  "Keep going. Anything. Even 'I don't know how to say this
   but...' — that's valid."
  Métrica: 10 minutos sem silêncio >10 segundos

Semana 5-8 — Expansão de Nicho
  P2 geralmente tem vocabulário geral mas não de nicho.
  Quatro semanas de imersão dentro do objetivo declarado.
  Cada sessão é uma cena nova dentro desse universo.

  [Carreira — ALEXANDRA]
  S5: "Walk me through a project you're proud of."
  S6: "Your manager just asked for your honest feedback
       on the team's performance. What do you say?"
  S7: "You need to negotiate a deadline. It's tomorrow."
  S8: Simulação completa de reunião 20 min 🔴

  [Viagem — MILES]
  S5: "Tell me about a trip you want to take.
       Every detail you can."
  S6: "You're at customs. The officer is asking questions."
  S7: "Your hotel lost your reservation. Handle it."
  S8: Imersão completa de viagem 20 min 🔴

### FASE 2: NATURALIZAÇÃO (Meses 3-4)

Objetivo: O aluno para de notar que está "falando inglês".
A língua some como objeto de atenção.
O conteúdo da conversa vira o foco.
Esse é o sinal de que a aquisição está acontecendo.

Semana 9 — Expressões do Dia a Dia Nativo
  AIDA para de usar inglês "limpo" e começa com
  contrações, reduções, gírias do nicho.
  "Gonna", "wanna", "kinda", "lemme", "y'know"
  Aluno ouve pelo TTS e imita sem saber que está imitando.

Semana 10 — Argumentação Sofisticada
  Missão: Defender posição por 8+ turnos.
  Cena em área de interesse do aluno.
  AIDA discorda suavemente para forçar argumentação.

Semana 11 — Humor e Informalidade
  Inglês informal e humor são os últimos a serem adquiridos.
  Cena: conversa casual entre amigos.
  "You're hanging out with American coworkers after work.
   It's Friday. What do you talk about?"
  Métrica: aluno consegue ser levemente engraçado em inglês

Semana 12 — Challenge Complexo 🔴
  Simulação de situação de alta pressão no nicho do aluno.
  Cena: problema real com consequência emocional.
  Ex (carreira): "Your project just failed publicly.
                  Your CEO is asking what happened. Go."
  Métrica: aluno mantém compostura e articula claramente

Semanas 13-16 — Conectores, Fluidez, Ritmo
  Foco em como o inglês SOA, não no que significa.
  AIDA usa TTS extensivo.
  Aluno grava voz e AIDA responde como se fosse conversa normal.
  Métricas: redução de pausas, aumento de conectores naturais

### FASE 3: FLUÊNCIA FUNCIONAL (Meses 5-6)

Objetivo P2: o aluno que travava agora fala mais
rápido em inglês do que quando escolhe cada palavra.

Semana 17-20 — Situações Complexas do Nicho
  Quatro semanas de simulações avançadas.
  Cada semana uma situação mais desafiadora que a anterior.
  O aluno não pode "preparar" mentalmente — cenas surpresa.

Semana 21 — Avaliação de Memória de Aquisição
  AIDA revisita estruturas da semana 1.
  Compara produção: início vs mês 5.
  Dashboard para o aluno: estruturas ADQUIRIDAS vs início.
  Motivação: ele vê concretamente o quanto mudou.

Semana 22 — Refinamento de Voz
  TTS + gravação do aluno.
  Foco em ritmo, não em fonema isolado.
  Inglês tem stress pattern diferente do português.
  AIDA modela. Aluno absorve pelo ouvido.

Semana 23 — Free Session
  Sem missão definida. Aluno escolhe o tema.
  AIDA segue o lead do aluno.
  Objetivo: verificar se o aluno já tem autonomia
            para conduzir uma conversa.

Semana 24 — O Grande Desafio P2 🏆
  Missão: 20 minutos ininterruptos.
  Tema: o objetivo declarado na triagem.
  Critério de fluência P2:
    ✅ Conduz a conversa (não só responde)
    ✅ Faz perguntas espontâneas
    ✅ Usa humor ou ironia ao menos uma vez
    ✅ Zero momentos de "sorry, how do I say..."

---

## ═══════════════════════════════════════════════
## PLANO P3 — O ESPECIALISTA
## "Do inglês geral ao domínio do nicho"
## Duração: 4-6 meses | Foco cirúrgico
## ═══════════════════════════════════════════════

### Quem é este aluno

Fala inglês. Viaja, assiste série, entende tudo.
Mas trava em contexto específico e urgente:
  - Entrevista de emprego em inglês
  - Apresentação para cliente americano
  - Reunião técnica com time global
  - Negociação de contrato
  - Preparação para IELTS/TOEFL
  - Sotaque que atrapalha a comunicação profissional
Bloqueio principal: o nicho tem vocabulário,
tom, e dinâmica que o inglês geral não cobre.

### Abertura da AIDA para P3

AIDA vai direto para o nicho:

> "Alright. You already speak English — that's done.
> What I want to do is make sure you OWN it
> in the specific situations that matter to you.
> So tell me: what's the scenario you want to nail?"

Triagem para P3 é mais curta (2 fases).
A fase diagnóstica é direto no nicho:
  "Walk me through [situação do nicho] as you would
   do it right now. Don't prepare — just go."
AIDA avalia os gaps específicos em 5 minutos.

### PLANO P3 — CARREIRA (ALEXANDRA)

Duração: 4 meses (já tem base sólida)

Mês 1 — Vocabulário e Tom do Nicho
  S1: Apresentação profissional polida (1 min pitch)
  S2: Status update de projeto em reunião
  S3: Dar e receber feedback em inglês corporativo
  S4: Challenge 🔴 — reunião completa de 15 min

Mês 2 — Situações de Pressão
  S5: Negociação de prazo ou recurso
  S6: Apresentação para executivo que não conhece sua área
  S7: Lidar com colega difícil em inglês
  S8: Challenge 🔴 — simulação de entrevista completa

Mês 3 — Sofisticação Linguística
  S9: Conectores e transições de discurso profissional
  S10: Hedging (linguagem de incerteza elegante):
       "It seems to me that...", "I might be wrong but..."
  S11: Liderança de discussão: como interromper com elegância,
       como retomar o floor, como resumir posições
  S12: Challenge 🔴 — liderança de reunião completa

Mês 4 — Polimento e Avaliação Final
  S13-15: Simulações surpresa. Cenas que o aluno
           não sabe que vão acontecer.
  S16 🏆: O Grande Desafio — objetivo declarado completo.

### PLANO P3 — ACADÊMICO (PROF. HAYES)

Duração: 5 meses

Mês 1 — Registro Acadêmico
  S1: Diferença entre inglês coloquial e acadêmico
      (sem explicar — mostrando em contexto)
  S2: Discussão em seminário — como participar
  S3: Apresentação de argumento acadêmico
  S4: Challenge 🔴 — defesa de posição em debate

Mês 2 — Escrita e Leitura Ativa
  S5: Discussão de texto acadêmico (AIDA lê junto)
  S6: Como resumir e referenciar em inglês
  S7: Vocabulary de área específica do aluno
  S8: Challenge 🔴 — explicar sua pesquisa para leigo

Mês 3-4 — Simulações de Certificação
  Foco IELTS: speaking sections (parts 1, 2, 3)
  Foco TOEFL: integrated e independent speaking tasks
  Prática intensiva de timing e estrutura de resposta.

Mês 5 — Mock Exam completo + Revisão 🏆

### PLANO P3 — PRONÚNCIA/SOTAQUE

Duração: 3-4 meses
Persona: MILES ou JORDAN (dependendo do contexto)

Mês 1 — Diagnóstico Fonético via Contexto
  AIDA identifica os padrões problemáticos específicos
  SEM mencionar ao aluno o que está fazendo.
  Os padrões mais comuns para brasileiros:
  - TH (this, that, the) → D/Z
  - Final consonants (street, test) → vogal extra
  - Stress pattern (fotografia → photoGRaphy)
  - Ritmo: português é mais regular, inglês é stress-timed

Mês 2 — Imersão de Ritmo (não de fonema)
  AIDA usa TTS extensivo com o padrão correto.
  Aluno ouve em contexto, não em fonema isolado.
  Cenas onde o ritmo importa: pitch de vendas,
  apresentação pública, ligação telefônica.

Mês 3-4 — Naturalização
  Simulações em situações reais do nicho do aluno.
  AIDA modela. Aluno absorve. Ritmo melhora
  sem que o aluno esteja "praticando pronúncia".

---

## ═══════════════════════════════════════════════
## PLANO P4 — O MULTILÍNGUE
## "A segunda quebra de barreira é sempre mais fácil"
## Duração: 6-8 meses (novo idioma do zero)
## Idiomas: Espanhol | Mandarim | Francês | [Outros]
## ═══════════════════════════════════════════════

### Quem é este aluno

Fala português e inglês. Quer terceira língua.
Vantagem decisiva: já quebrou o bloqueio psicológico
de aprender idioma fora da escola uma vez.
Sabe que consegue. Sabe como funciona.
Velocidade de progressão: 30-40% mais rápida que P1.

### Abertura da AIDA para P4

AIDA começa no idioma-alvo desde o primeiro segundo.
Para espanhol:

> "Hola! Soy AIDA. Antes de empezar —
> dime tu nombre y de dónde eres.
> No te preocupes si no sabes todo. Solo intenta."

[Se o aluno pedir para falar em português:]
> "Lo entiendo — pero eso es exactamente lo que
> NO vamos a hacer. Igual que hiciste con el inglés.
> Confía en el proceso."

### A diferença do método para P4

P4 não precisa quebrar o bloqueio psicológico.
Já foi feito. O método pode ir mais rápido nas
primeiras 4 semanas — queimam o "bebê" e vão
direto para produção de frases em 3 semanas.

### PLANO P4 — ESPANHOL

Advantage para brasileiro:
70% do vocabulário é cognato ou quasi-cognato.
A diferença está na fonética, nos falsos cognatos,
e nas nuances regionais.

Mês 1 — Ativação Rápida
  S1: Apresentação + rotina (vocabulário óbvio)
  S2: Falsos cognatos e armadilhas (embarazada ≠ embaraçada)
  S3: Gírias e registro informal do país-alvo
  S4: Challenge 🔴 — conversa de 15 min totalmente em espanhol

Meses 2-4 — Expansão por Nicho
  P4 geralmente tem objetivo específico:
  negócios com América Latina, viagem pela Espanha,
  cultura, parceiro/a de idioma nativo.
  Conteúdo 100% pelo universo do aluno.

Meses 5-6 — Fluência Situacional
  Simulações de situações reais do destino.
  TTS com sotaque do país-alvo.
  Aluno ouve diferenças regionais em contexto.

### PLANO P4 — MANDARIM

O caso mais desafiador. Sistema de escrita,
tons, e estrutura gramatical completamente diferente.
Duração: 8 meses para funcional.

Mês 1-2 — Sons e Tons (sem escrita)
  AIDA trabalha APENAS com áudio via TTS.
  Pinyin para referência, mas foco em OUVIR.
  Os 4 tons em contexto, não em diagrama.
  Vocabulário inicial: 100 palavras de alta frequência.

Mês 3-4 — Produção Oral
  Aluno começa a falar. Ainda sem escrita.
  Cenas de contexto de alta frequência:
  restaurante, direção, compras, apresentação.

Mês 5-6 — Escrita Simplificada (Opcional)
  Apenas se o aluno precisar para o objetivo.
  50 caracteres de maior frequência em contexto.
  Não como exercício — como legenda das cenas.

Mês 7-8 — Fluência Situacional
  Simulações completas no universo do aluno.
  Critério de fluência P4-Mandarim:
  ✅ Pedido de comida em restaurante
  ✅ Direção em cidade
  ✅ Reunião básica de negócios
  ✅ Conversa casual com nativo

### PLANO P4 — FRANCÊS

Advantage para quem já tem inglês:
40% de vocabulário compartilhado com francês.
Desafio: pronúncia completamente diferente.

Mês 1-2 — Sons e Ritmo
  Francês tem ritmo próprio, letras mudas,
  liaison e enchaînement.
  AIDA usa TTS extensivo — o aluno deve ouvir
  300+ horas de francês para calibrar o ouvido.
  Produção: começa pela fonética, não pelo vocabulário.

Meses 3-6 — Progressão similar ao P1
  Com aceleração de 30% por já ter o mecanismo ativo.

---

# 🔑 SISTEMA DE PROGRESSÃO UNIVERSAL

## Como a AIDA decide quando avançar de fase

Nunca por calendário. Sempre por evidência de aquisição.

GATILHOS DE PROGRESSÃO:
  ✅ Aluno usa estrutura nova em contexto NÃO praticado
  ✅ Aluno faz pergunta espontânea em inglês
  ✅ Aluno ri de algo em inglês sem precisar traduzir
  ✅ Aluno corrige o próprio erro sem que ninguém peça
  ✅ Sessão de 20 min sem pausa maior que 5 segundos

GATILHOS DE REGRESSÃO (voltar ao nível anterior):
  ❌ 2 sessões seguidas com menos de 50% de produção
  ❌ Aluno começa a pedir tradução com frequência crescente
  ❌ Aluno pede explicitamente para ir mais devagar

## O Calendário Flexível

Plano de 6 meses é estimativa. Pode levar 4 ou 8.
AIDA não avança por semana — avança por aquisição.
Gabriel calibra o ritmo na revisão semanal de 15 min.

---

# 🎓 TEMPLATE DO STUDY PLAN (output após triagem)

```
═══════════════════════════════════════════════════
🎓 AIDA STUDY PLAN — [NOME DO ALUNO]
═══════════════════════════════════════════════════

Perfil MANA:     [O Zero / O Travado / O Especialista / O Multilíngue]
Nível Atual:     [Iniciante / Básico / Intermediário / Avançado]
Idioma-Alvo:     [Inglês / Espanhol / Mandarim / Francês / Outro]
Foco Principal:  [Viagens / Carreira / Conversação / Games / Acadêmico]
Persona Guia:    [Jordan / Alexandra / Miles / Zack / Prof. Hayes]
Sessão Padrão:   [5 / 15 / 30 minutos]
Duração Estimada: [4 / 6 / 8 meses]

───────────────────────────────────────────────────
🎯 SEU OBJETIVO EM 3 MESES
───────────────────────────────────────────────────
[Meta específica e observável, nas palavras do aluno
traduzida para comportamento mensurável]

Exemplo: "Conduzir um check-in de hotel e pedir
direções em inglês sem travar ou pedir desculpa."

───────────────────────────────────────────────────
🎯 SEU OBJETIVO EM 6 MESES
───────────────────────────────────────────────────
[Meta de fluência funcional completa no contexto do aluno]

───────────────────────────────────────────────────
🗺️ ROADMAP — [PLANO ESPECÍFICO DO PERFIL]
───────────────────────────────────────────────────

FASE 1: [Nome da fase] — Meses 1-2
[Resumo do foco + 2-3 missões principais]

FASE 2: [Nome da fase] — Meses 3-4
[Resumo do foco + 2-3 missões principais]

FASE 3: [Nome da fase] — Meses 5-6
[Resumo do foco + objetivo final]

───────────────────────────────────────────────────
⚙️ SUAS 4 REGRAS DE IMERSÃO
───────────────────────────────────────────────────
1. REGRA DOS 5 MINUTOS: Todos os dias > 1 hora no domingo.
2. PROIBIDO TRADUTOR: Explique em inglês o que não sabe.
   "It's a thing you use to open doors..."
3. ÁUDIO SEMPRE: TTS da AIDA usa voz nativa. Ouça e imite.
4. ERRE RÁPIDO: AIDA não julga. Cada erro é aprendizado.

───────────────────────────────────────────────────
📊 COMO VOCÊ VAI MEDIR SEU PROGRESSO
───────────────────────────────────────────────────
Não em acertos. Em aquisição real:

✅ JÁ ADQUIRIDO — você usa sem pensar
⏳ EM PROCESSO — você usa quando está focado
🔜 PRÓXIMA AQUISIÇÃO — AIDA está introduzindo agora

O dashboard é atualizado toda semana.
Quando você ver mais ✅ do que ⏳, você está fluente.

───────────────────────────────────────────────────
🚀 COMEÇANDO AGORA
───────────────────────────────────────────────────
Sua primeira sessão com AIDA começa hoje.
Sem preparação. Sem estudar antes.
AIDA sabe onde você está.
Ela vai te encontrar lá.

═══════════════════════════════════════════════════
```

---

# 📦 INSTRUÇÃO PARA OS AGENTES DO AIOS

## O que este RP entrega

Planos de estudo completos para os 4 perfis do método MANA,
integrados com o PRD-AIDA-v2.0 e com a triagem diagnóstica
de 3 fases já documentada.

## O que o squad deve fazer com isso

**Dev:**
Implementar a lógica de seleção de plano no LibreChat:
após triagem gerar o JSON de perfil → selecionar o plano
correspondente → gerar e apresentar o Study Plan ao aluno.

**PM (Morgan):**
Atualizar o PRD v2.0 seção 8 com o conteúdo expandido deste RP.
Adicionar os 4 perfis como entidade central do sistema.

**AIDA (agente):**
Usar os prompts de abertura específicos por perfil.
Respeitar os gatilhos de progressão de fase.
NUNCA avançar por calendário — apenas por evidência.

## Restrições que NUNCA mudam

❌ Correção explícita — em nenhum perfil, em nenhuma fase
❌ Tradução — nem para P1 que não sabe nada
❌ Gramática isolada — nem para P3 acadêmico
✅ Continuar a cena sempre
✅ Personalização pelo universo do aluno sempre
✅ TTS como ferramenta de fonética contextual

## Próximos RPs sugeridos

→ RP-MANA-ARCHITECT — Stack LibreChat + Groq + Supabase
→ RP-AIDA-SYSTEM-PROMPT — System prompt completo por persona
→ RP-MANA-CONTENT-ENGINE — Pipeline de geração de conteúdo
→ RP-MANA-DASHBOARD — Dashboard de aquisição do aluno

---

**RP-MANA-STUDY-PLANS-v1.0**
*Gerado por: Claude Sonnet 4.6*
*Baseado em: PRD-AIDA-v2.0 + Conversas 05-06/06/2026*
*Para: Squad de Agentes AIOS Core — Projeto MANA*
