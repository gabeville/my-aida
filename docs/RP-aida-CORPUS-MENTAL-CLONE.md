╔══════════════════════════════════════════════════════════════════╗
║                    REASONING PACKAGE                            ║
║  ID: RP-MANA-CORPUS-MENTAL-CLONE                               ║
║  Depende de: RP-20260605-LINGUA-AI · RP-AIDA-BOT-LINGUA        ║
║              PRD-MANA-v2.0                                      ║
║  Modo: PM1-REASONING — Arquitetura de conhecimento             ║
║  Escopo: Corpus de 6 mentes + system prompt do clone           ║
║  Gerado por: Claude Sonnet 4.6                                 ║
╚══════════════════════════════════════════════════════════════════╝

---

# 🎯 CONTEXT BLOCK

## Objetivo deste RP

Definir a arquitetura completa do **Clone Mental de Aquisição de
Linguagem** — um agente que raciocina sobre aquisição de idiomas
com a profundidade de 6 teóricos combinados, não apenas os cita.

O clone não é uma enciclopédia de teorias. É um **motor de
raciocínio** que usa o consenso e as tensões entre esses teóricos
para tomar decisões de design de produto, responder objeções,
e calibrar o agente AIDA em tempo real.

## Por que 6 mentes, não apenas Krashen

Krashen é o coração. Mas o campo de SLA (Second Language
Acquisition) não convergiu para uma teoria única — e isso é
uma vantagem, não um problema. As tensões entre as teorias
descrevem casos reais que o produto precisa resolver:

- Krashen vs Swain: input é suficiente? Ou output é necessário?
- Vygotsky vs Chomsky: aprendizado é social ou inato?
- Schmidt vs Krashen: noticing consciente importa ou não?
- Nick Ellis vs todos: frequência e padrão explicam tudo?

O clone que conhece as tensões resolve casos que o clone
que conhece apenas Krashen não consegue.

---

# 🧠 AS 6 MENTES — MAPEAMENTO COMPLETO

---

## MENTE 1 — Stephen Krashen
**Contribuição central:** Input Hypothesis + Monitor Model
**Relação com MANA:** Fundação teórica do método inteiro

### As 5 Hipóteses (o que o clone precisa dominar)

**H1 — Acquisition vs Learning**
Aquisição: processo inconsciente, idêntico ao da L1.
Resultado: fluência disponível sob pressão.
Aprendizado: processo consciente, regras explícitas.
Resultado: conhecimento disponível apenas quando há tempo
para monitorar. Os dois sistemas NÃO se comunicam.
Implicação para MANA: todo exercício de gramática explícita
vai para o sistema de aprendizado — inútil para fluência.

**H2 — Natural Order**
Estruturas gramaticais são adquiridas em ordem previsível,
independente de instrução. Ensinar "fora de ordem" não acelera
— o cérebro processa na sequência que processa.
Implicação para MANA: roadmap de 12 semanas respeita a
ordem natural, não a ordem do livro didático.

**H3 — Input Hypothesis (i+1)**
Adquirimos quando recebemos input compreensível levemente
acima do nível atual. i = nível atual. +1 = próximo estágio.
Muito abaixo: tédio. Muito acima: ruído.
Implicação para MANA: calibração automática de nível pela
AIDA é implementação direta desta hipótese.

**H4 — Monitor Hypothesis**
O sistema adquirido inicia a fala. O sistema aprendido
age apenas como editor — e só quando há tempo, foco
na forma, e conhecimento da regra. O Monitor é
o inimigo da fluência conversacional porque exige os
3 ao mesmo tempo, o que é impossível em conversa real.
Implicação para MANA: jamais ativar o Monitor durante
sessões de imersão. Correção explícita = ativar Monitor = travar.

**H5 — Affective Filter Hypothesis**
Ansiedade, baixa autoestima e falta de motivação criam
um "filtro" que bloqueia o input de chegar ao Language
Acquisition Device, mesmo que o input seja compreensível.
Estado emocional baixo = input desperdiçado.
Implicação para MANA: ambiente de baixa ansiedade não é
conforto — é prerequisito técnico de aquisição. Erro
normalizado = filtro baixo = aquisição acontece.

### Posição polêmica de Krashen (o clone precisa saber defender)

"Output não causa aquisição — apenas demonstra o que já
foi adquirido via input."
Esta é a posição que Swain refuta. O clone precisa conhecer
ambos os lados com igual profundidade.

### Corpus prioritário de Krashen

| Documento | Tipo | Onde | Por que prioritário |
|---|---|---|---|
| Principles and Practice in SLA (1982) | Livro | sdkrashen.com (grátis) | As 5 hipóteses formalizadas |
| The Input Hypothesis (1985) | Livro | Archive.org | Aprofundamento do i+1 |
| The Case for Comprehensible Input | Artigo PDF | sdkrashen.com | Resumo maduro — ler primeiro |
| Lecture dos anos 80 | Vídeo | YouTube (fnUc_W3xE1w) | Ver o raciocínio ao vivo |
| Second Language Acquisition and SL Learning | Livro | Archive.org | Acquisition vs Learning detalhado |

---

## MENTE 2 — Merrill Swain
**Contribuição central:** Output Hypothesis
**Relação com MANA:** Justifica por que a AIDA força produção,
não apenas entrega input

### A Output Hypothesis — 3 Funções do Output

**Função 1 — Noticing the Gap**
Quando o aluno tenta produzir e não consegue expressar
algo, ele percebe o gap entre o que quer dizer e o que
sabe dizer. Esse noticing é um gatilho de aquisição que
input passivo não dispara.
Implicação para MANA: cenas com pressão comunicativa
real (o aluno precisa resolver algo) geram mais aquisição
do que consumo passivo de input. Missões das semanas 4,
8, 10, 12 existem por causa desta função.

**Função 2 — Hypothesis Testing**
Output é o laboratório onde o aluno testa hipóteses sobre
a língua. "Será que funciona assim?" → tenta → recebe
feedback implícito via reação do interlocutor.
Implicação para MANA: quando o aluno erra e a AIDA
continua usando a forma correta, isso é feedback implícito
que confirma ou refuta a hipótese do aluno. Krashen diria
que é apenas input. Swain diria que a tentativa do aluno
criou a condição para o feedback importar.

**Função 3 — Metalinguistic Awareness**
Produzir output força o aluno a prestar atenção na forma,
não apenas no significado. É o único momento em que o
sistema de aprendizado e o sistema de aquisição podem
colaborar sem que o Monitor bloqueie a fluência.
Implicação para MANA: o diário em inglês e os role-plays
complexos das semanas 9-12 ativam esta função.

### A Revisão de Swain (importante para o clone)

Swain eventualmente revisou a Output Hypothesis em direção
a Vygotsky — renomeando output para "collaborative dialogue".
O aluno não produz no vácuo — produz em interação social
que é mediada por um parceiro mais competente.
AIDA é exatamente esse parceiro. O clone precisa articular
isso: AIDA não é um gerador de input (Krashen puro).
É um interlocutor que provoca e recebe output significativo
(Swain + Vygotsky integrados).

### Corpus prioritário de Swain

| Documento | Tipo | Onde | Por que prioritário |
|---|---|---|---|
| Communicative Competence (1985) | Artigo | JSTOR/ResearchGate | Formulação original da Output Hypothesis |
| Three Functions of Output (1995) | Artigo | ResearchGate | As 3 funções detalhadas |
| Speaking as Collaborative Achievement (2000) | Artigo | ResearchGate | A revisão para Collaborative Dialogue |

---

## MENTE 3 — Lev Vygotsky
**Contribuição central:** Zone of Proximal Development + Mediação Social
**Relação com MANA:** Explica por que AIDA como parceiro funciona
melhor do que qualquer app de input passivo

### Conceitos-chave que o clone precisa dominar

**Zone of Proximal Development (ZPD)**
A distância entre o que o aluno consegue fazer sozinho
e o que consegue fazer com ajuda de alguém mais competente.
Aprendizado acontece DENTRO da ZPD — nem abaixo (já sabe),
nem acima (não consegue nem com ajuda).
Relação com Krashen: ZPD e i+1 descrevem o mesmo fenômeno.
ZPD enfatiza o papel do parceiro. i+1 enfatiza o input.
Implicação para MANA: AIDA opera no ZPD de cada aluno.
A calibração de nível não é sobre dificuldade do conteúdo —
é sobre posicionar AIDA como o "mais competente" que puxa
o aluno para além do que ele faria sozinho.

**Mediação**
Aprendizado não acontece diretamente — é sempre mediado
por ferramentas (linguagem, símbolos) ou por pessoas.
O parceiro mais competente não transfere conhecimento —
media a construção de conhecimento pelo aprendiz.
Implicação para MANA: AIDA não é um professor que
transmite — é um mediador que cria condições para
o aluno construir a aquisição. Diferença sutil, mas
crítica para o design do sistema prompt.

**Scaffolding (Bruner, a partir de Vygotsky)**
Suporte temporário e calibrado que permite ao aprendiz
operar além do seu nível atual. É retirado progressivamente
conforme a capacidade aumenta.
Implicação para MANA: AIDA usa scaffolding implícito —
parafraseando, simplificando, continuando a cena quando
o aluno trava — sem nunca tornar o suporte explícito
(o que ativaria o Monitor de Krashen).

### O que Vygotsky acrescenta que Krashen não tem

Krashen trata o aprendiz como receptor de input.
Vygotsky trata o aprendiz como agente em contexto social.
Para o clone: o ambiente emocional e relacional da sessão
IMPORTA para a qualidade da aquisição — não é detalhe
de UX, é variável central do mecanismo de aprendizado.
Isso fundamenta as personas da AIDA: Jordan, Alexandra,
Miles, Zack, Prof. Hayes não são personalidades — são
mediadores calibrados para o contexto social específico
do aluno.

### Corpus prioritário de Vygotsky

| Documento | Tipo | Onde | Por que prioritário |
|---|---|---|---|
| Mind in Society (1978) | Livro | Archive.org (grátis) | ZPD e mediação — os conceitos centrais |
| Thought and Language (1934/1986) | Livro | Archive.org | Relação entre linguagem e pensamento |
| Lantolf & Thorne: SLA Theory (2006) | Livro | Springer | Aplicação de Vygotsky para SLA |

---

## MENTE 4 — Michael Long
**Contribuição central:** Interaction Hypothesis
**Relação com MANA:** Explica por que a estrutura de cena
conversacional é superior a qualquer outra forma de input

### A Interaction Hypothesis em detalhe

Input modificado + Interação modificada > Input modificado sozinho.

O que isso significa:
Quando comunicação quebra (o aluno não entende, ou o
interlocutor não entende o aluno), os dois trabalham
para reparar o significado. Esse processo de
"negotiation of meaning" é um mecanismo de aquisição
mais eficiente do que receber input compreensível passivamente.

Exemplo clássico:
Aluno: "I want the... the thing for the hair."
Nativo: "The shampoo?"
Aluno: "Yes! Shampoo. Where is the shampoo?"

O nativo não corrigiu. Completou o sentido. O aluno
recebeu a palavra no momento exato em que precisava
dela — e com motivação comunicativa real.
Implicação para MANA: AIDA foi projetada para fazer
exatamente isso. Quando o aluno não sabe a palavra,
AIDA a oferece dentro da cena, no momento de necessidade.
Long diria que esse é o input mais eficiente possível.

### Negative Evidence Implícita

Long distingue dois tipos de feedback:
- Positive evidence: input que mostra o que é possível
- Negative evidence: informação sobre o que não é possível

Negative evidence implícita é quando o interlocutor
reformula a fala do aluno corretamente sem marcar o erro.
"I goed to the store." → "Oh, you went to the store!
What did you buy?"

Isso é exatamente o que a AIDA faz. Krashen diria que
é apenas mais input. Long diria que é feedback
estruturalmente diferente — e mais eficiente — porque
vem no contexto de uma falha comunicativa real.
Implicação para MANA: o clone pode defender a mecânica
de "continuar a cena com a forma correta" com o argumento
de Long (negative evidence implícita), não apenas com
o argumento de Krashen (modelagem de input).

### Corpus prioritário de Long

| Documento | Tipo | Onde | Por que prioritário |
|---|---|---|---|
| Input, Interaction and SLA (1981) | Artigo | ResearchGate | Formulação original da Interaction Hypothesis |
| The Role of the Linguistic Environment (1996) | Artigo | ResearchGate | Refinamento com negative evidence |
| Second Language Acquisition (2007) | Livro | Wiley-Blackwell | Visão madura e abrangente |

---

## MENTE 5 — Richard Schmidt
**Contribuição central:** Noticing Hypothesis
**Relação com MANA:** Fundamenta por que a correção implícita
da AIDA funciona — e por que a explícita não funcionaria

### A Noticing Hypothesis

"Noticing is the necessary and sufficient condition for
converting input into intake."

Input: o que o aluno é exposto.
Intake: o que o cérebro realmente processa para aquisição.

A diferença entre os dois é o noticing — atenção consciente
a uma forma linguística no input. Sem noticing, input
não vira intake. Vira ruído de fundo.

Implicação central para MANA: quando AIDA usa "went"
depois que o aluno usou "goed", o aluno nota "went"
porque está em posição saliente (imediatamente após
o erro, no mesmo contexto semântico). Isso dispara
noticing → intake → processamento para aquisição.

Se AIDA dissesse "you should say 'went', not 'goed'",
o aluno ouviria a regra — sistema de aprendizado,
não de aquisição. E criaria ansiedade — filtro afetivo
elevado, menos aquisição.

### A tensão Schmidt vs Krashen

Krashen: aquisição é puramente inconsciente.
Atenção consciente (noticing) não é necessária.

Schmidt: algum grau de noticing é necessário para
intake. Não precisa ser metalinguístico (saber a regra),
mas precisa ser atencional (notar a forma).

Para o clone: esta tensão tem implicação prática.
Schmidt justifica o design das cenas com pressão
comunicativa — quando o aluno está motivado a resolver
algo, a atenção aumenta, o noticing aumenta, o intake
aumenta. Krashen diria que o input compreensível é
suficiente. Schmidt diria que input compreensível em
contexto de alta atenção é mais eficiente.
O MANA usa os dois: input de qualidade (Krashen)
em contexto de envolvimento comunicativo real (Schmidt).

### Corpus prioritário de Schmidt

| Documento | Tipo | Onde | Por que prioritário |
|---|---|---|---|
| The Role of Consciousness in SLA (1990) | Artigo | ResearchGate | Formulação original da Noticing Hypothesis |
| Attention (2001) | Capítulo | ResearchGate | Refinamento — distingue tipos de atenção |
| Consciousness and Foreign Language Learning (1995) | Artigo | ResearchGate | Aplicação prática |

---

## MENTE 6 — Nick Ellis
**Contribuição central:** Usage-Based Learning + Chunking
**Relação com MANA:** Fundamenta a mecânica de chunks como
unidade de aprendizado e a base científica da Memória de Aquisição

### Usage-Based Language Learning

A linguagem não é um conjunto de regras abstratas
armazenadas no cérebro (Chomsky). É um conjunto de
padrões emergentes do uso — construídos pela exposição
repetida a instâncias reais de linguagem.

O cérebro é uma máquina de detecção de frequência e padrão.
Estruturas que aparecem frequentemente em contextos similares
ficam mais acessíveis. Estruturas raras ficam menos acessíveis.

Implicação para MANA:
A Memória de Aquisição não é apenas uma métrica — é uma
janela para o estado real da rede neural de padrões do aluno.
Quando uma estrutura é classificada como ADQUIRIDA, significa
que ela está consolidada o suficiente na rede para emergir
espontaneamente. EM PROCESSO significa que a frequência
de exposição ainda não consolidou o padrão.

### O Modelo CREED de Nick Ellis

Language learning is:
- **C**onstruction-based: unidade é a construção (chunk),
  não a palavra isolada ou a regra gramatical
- **R**ational: o cérebro usa estratégias de aprendizado
  racionais — frequência, recência, saliência
- **E**xemplar-based: armazenamos instâncias reais,
  não abstrações. "I was wondering if you could..."
  é armazenado como unidade, não como
  [I] + [was] + [wondering] + [if] + ...
- **E**mergent: gramática emerge do uso, não preexiste
- **D**ialectic: o aprendizado individual e o contexto
  social se constroem mutuamente

Implicação para MANA: as "peças" do jogo RPG não são
palavras — são construções (chunks). O mapa de habilidades
do aluno é um grafo de construções consolidadas.

### Chunking — a ponte para o design do produto

O que é um chunk:
Sequência de palavras armazenada e recuperada como
uma unidade cognitiva única. O nativo não monta
"I'd like to make a reservation" em tempo real —
recupera o bloco inteiro.

Tipos de chunks relevantes para MANA:

| Tipo | Exemplo | Situação |
|---|---|---|
| Fórmulas sociais | "How's it going?" / "Not bad, you?" | Conversação casual |
| Frases de colocação | "make a decision" / "take a risk" | Vocabulário natural |
| Padrões construcionais | "Would you mind if I...?" | Polidez |
| Expressões idiomáticas | "hit the nail on the head" | Fluência avançada |
| Chunks situacionais | "I'll have the..." / "Can I get the check?" | Restaurante |
| Chunks de nicho | "stand up / stand-up meeting" / "sync call" | Trabalho remoto |

Implicação para MANA RPG: o "tech tree" de habilidades
do jogador é organizado por clusters de chunks situacionais,
não por categorias gramaticais. "Aeroporto" não é um
tópico de vocabulário — é um cluster de 15-20 chunks
que, juntos, permitem navegar qualquer situação aeroportuária.

### Corpus prioritário de Nick Ellis

| Documento | Tipo | Onde | Por que prioritário |
|---|---|---|---|
| Cognitive Approaches to SLA (1994) | Capítulo | deepblue.lib.umich.edu (grátis) | Fundação do usage-based |
| Language as a Complex Adaptive System (2010) | Livro | Wiley-Blackwell | Síntese do CREED |
| Constructions and SLA (2013) | Artigo | ResearchGate | Chunks como unidade de aquisição |
| Frequency Effects in Language Processing (2002) | Artigo | ResearchGate | A matemática do padrão |

---

# 🗺️ MAPA DE TENSÕES E SÍNTESES

As tensões entre as 6 mentes não são problemas —
são o manual de decisão de produto.

## Tensão 1 — Input vs Output (Krashen vs Swain)

| Krashen diz | Swain diz | MANA resolve assim |
|---|---|---|
| Input compreensível é suficiente | Output é necessário para notar gaps | Cenas forçam output dentro de input rico |
| Output apenas demonstra aquisição | Output causa aquisição | AIDA provoca produção, não apenas fornece input |
| Correção inibe aquisição | Feedback no output é necessário | Feedback implícito via continuação de cena |

**Síntese MANA:** O aluno recebe input de qualidade (Krashen)
E é obrigado a produzir para resolver a cena (Swain).
O feedback vem implícito, sem ativar o Monitor (Krashen)
e sem eliminar o sinal de feedback (Swain).

## Tensão 2 — Inconsciente vs Noticing (Krashen vs Schmidt)

| Krashen diz | Schmidt diz | MANA resolve assim |
|---|---|---|
| Aquisição é puramente inconsciente | Noticing é necessário para intake | Cenas de alta pressão aumentam atenção naturalmente |
| Foco na forma inibe comunicação | Algum foco na forma é necessário | Salience natural via posição na cena |

**Síntese MANA:** Cenas de missão (semanas 4, 8, 10, 12)
criam pressão comunicativa que eleva atenção (Schmidt)
sem forçar foco consciente na forma (Krashen).
O aluno presta atenção porque precisa resolver algo real
— não porque foi instruído a prestar atenção em gramática.

## Tensão 3 — Individual vs Social (Krashen vs Vygotsky)

| Krashen diz | Vygotsky diz | MANA resolve assim |
|---|---|---|
| Aquisição acontece internamente via input | Aquisição é construída em interação social | AIDA como parceiro social no ZPD do aluno |
| O ambiente importa via Affective Filter | O parceiro social media o desenvolvimento | Personas calibradas para o contexto relacional do aluno |

**Síntese MANA:** AIDA não é um gerador de input (Krashen puro).
É um mediador social posicionado no ZPD do aluno (Vygotsky),
que fornece input de qualidade (Krashen) em contexto de
interação real (Long + Swain), com atenção naturalmente
elevada pela relevância (Schmidt + Krashen/Affective Filter)
e feedback implícito que dispara noticing sem ativar o
Monitor (Schmidt + Krashen reconciliados).

## Tensão 4 — Inato vs Emergente (Chomsky vs Nick Ellis)

| Chomsky diz | Ellis diz | Relevância para MANA |
|---|---|---|
| Gramática é inata (Universal Grammar) | Gramática emerge do uso | Explica por que chunks funcionam melhor que regras |
| LAD é ativado por input | Padrões emergem de exposição frequente | Memória de Aquisição mede emergência real de padrões |

**Síntese MANA:** Não precisa resolver esta tensão filosófica.
Chomsky e Ellis concordam em um ponto prático: o aluno
precisa de input real para ativar a aquisição.
A diferença (inato vs emergente) não muda o design.
O que muda é a metáfora: Chomsky sugere "ativar o LAD",
Ellis sugere "consolidar padrões". A Memória de Aquisição
usa a metáfora de Ellis — mais acionável para produto.

---

# 🤖 ARQUITETURA DO CLONE MENTAL

## O que o clone É

Um agente de raciocínio que, diante de qualquer questão
sobre aquisição de linguagem ou design do MANA, acessa
o mapa de tensões acima e produz uma resposta que:

1. Identifica qual(is) teorias são relevantes para a questão
2. Articula a tensão entre elas se houver
3. Aplica a síntese MANA ao caso específico
4. Defende a decisão de produto com fundamentação precisa

## O que o clone NÃO É

- Uma enciclopédia que lista teorias
- Um chatbot que cita Krashen para qualquer pergunta
- Um árbitro que decide qual teoria está "certa"

## System Prompt Base do Clone

```
IDENTIDADE
Você é o Clone Mental de Aquisição de Linguagem do Método MANA.
Você raciocina com a profundidade combinada de 6 teóricos:
Krashen, Swain, Vygotsky, Long, Schmidt e Nick Ellis.

Você não os cita como referências. Você pensa como eles pensariam
— e sabe onde eles concordariam, onde discordariam, e como o
Método MANA resolve as tensões entre eles na prática.

MODO DE RACIOCÍNIO

Para qualquer questão sobre design do produto, comportamento
do agente AIDA, ou mecanismo de aquisição do aluno:

1. IDENTIFIQUE qual hipótese ou tensão é ativada pela questão
2. ARTICULE o que cada mente relevante diria
3. APLIQUE a síntese MANA — como o produto resolve a tensão
4. DERIVE a implicação prática: o que isso significa para
   o design, o prompt, ou a resposta ao aluno

POSIÇÕES FIXAS (NUNCA NEGOCIÁVEIS)

- Aquisição é diferente de aprendizado. Apenas aquisição
  produz fluência real. (Krashen — H1)

- Correção explícita ativa o Monitor e inibe a fluência.
  Correção implícita via input de qualidade é superior.
  (Krashen H4 + Long negative evidence implícita)

- O Affective Filter é uma variável técnica, não conforto.
  Ansiedade = aquisição bloqueada. (Krashen H5)

- Output produzido em contexto comunicativo real é mais
  eficiente para aquisição do que input passivo.
  (Swain + Long reconciliados com Krashen)

- ZPD e i+1 descrevem o mesmo mecanismo. AIDA opera
  como o parceiro mais competente no ZPD do aluno.
  (Vygotsky + Krashen integrados)

- A unidade de aquisição é o chunk, não a palavra isolada.
  A Memória de Aquisição mede consolidação de padrões,
  não memorização de itens. (Nick Ellis)

- Noticing em contexto de alta motivação comunicativa
  é o mecanismo que converte input em intake.
  (Schmidt + Long reconciliados com Krashen)

POSIÇÕES DE TENSÃO (RACIOCINAR, NÃO TOMAR PARTIDO)

- Output é necessário (Swain) ou apenas demonstra aquisição
  (Krashen)? → Resposta MANA: output em contexto comunicativo
  real serve as 3 funções de Swain E opera como input de
  qualidade via feedback implícito. Não é necessário escolher.

- Noticing é necessário (Schmidt) ou aquisição é inconsciente
  (Krashen)? → Resposta MANA: pressão comunicativa eleva
  atenção de forma natural sem foco metalinguístico explícito.
  Os dois são satisfeitos simultaneamente.

FORMATO DE RESPOSTA

Para questões técnicas de design: raciocínio estruturado
com identificação de tensão e síntese.

Para questões de produto: implicação prática direta,
sem jargão acadêmico desnecessário.

Para questões do aluno (operando dentro de sessão AIDA):
nunca sair do personagem para citar teoria. Aplicar
os princípios sem nomeá-los.
```

---

# 📋 PLANO DE INGESTÃO DO CORPUS

## Sequência de Construção (ordem importa)

### Fase 1 — Esqueleto (semana 1)
Objetivo: o clone raciocina com Krashen de forma profunda

Documentos a ingerir:
1. The Case for Comprehensible Input (PDF — sdkrashen.com)
   → É o resumo mais denso e maduro. Ler primeiro.
2. Principles and Practice in SLA — capítulos 1-3
   → As 5 hipóteses formalizadas com exemplos
3. Lecture dos anos 80 (transcrição ou vídeo)
   → O padrão de argumentação e os exemplos que ele repete

Validação da Fase 1:
O clone consegue defender a Regra 1 do AIDA (zero correção
explícita) com 3 argumentos distintos, cada um de uma
hipótese diferente de Krashen.

### Fase 2 — A Crítica Mais Importante (semana 2)
Objetivo: o clone conhece Swain tão bem quanto Krashen

Documentos a ingerir:
4. Communicative Competence (1985) — Swain
5. Three Functions of Output (1995) — Swain
6. Speaking as Collaborative Achievement (2000) — Swain

Validação da Fase 2:
O clone consegue argumentar CONTRA Krashen usando Swain,
e depois reconciliar os dois com a síntese MANA.

### Fase 3 — O Contexto Social (semana 3)
Objetivo: o clone entende por que AIDA como parceiro
é superior a qualquer app de input passivo

Documentos a ingerir:
7. Mind in Society — Vygotsky (capítulos ZPD e mediação)
8. Input, Interaction and SLA (1981) — Long
9. The Role of the Linguistic Environment (1996) — Long

Validação da Fase 3:
O clone consegue explicar por que uma cena conversacional
com AIDA produz mais aquisição do que ouvir 30 minutos
de podcast em inglês.

### Fase 4 — A Mecânica Fina (semana 4)
Objetivo: o clone entende noticing e chunking —
os mecanismos mais próximos do design de produto

Documentos a ingerir:
10. The Role of Consciousness in SLA (1990) — Schmidt
11. Attention (2001) — Schmidt
12. Cognitive Approaches to SLA (1994) — Nick Ellis
13. Constructions and SLA (2013) — Nick Ellis

Validação da Fase 4:
O clone consegue definir o que uma estrutura linguística
precisa para ser classificada como ADQUIRIDA (vs EM PROCESSO),
com base em Schmidt (noticing consolidado) e Ellis (padrão
emergente via frequência).

### Fase 5 — Calibração de Borda (semana 5)
Objetivo: o clone sabe onde as teorias falham e onde
o produto cobre os gaps

Documentos a ingerir:
14. Krashen: artigos de resposta a críticos (sdkrashen.com)
15. A Critique of Swain's Output Hypothesis (ResearchGate)
16. Is everyone WRONG about Krashen? (YouTube — KHubnrYCNas)
17. Cummins: BICS/CALP — artigos originais

Validação da Fase 5:
O clone consegue responder às 5 críticas mais comuns
ao método de aquisição natural — sem citar teoria,
usando exemplos práticos que o aluno consegue entender.

---

# 🔗 CONEXÕES COM O AIOS

```
RP-MANA-CORPUS-MENTAL-CLONE
    │
    ├── ALIMENTA → Sistema Prompt da AIDA
    │   └── Regras absolutas do agente têm base teórica
    │       documentada aqui
    │
    ├── ALIMENTA → Engine de Calibração de Nível (Epic 1, Story 1.5)
    │   └── i+1 (Krashen) + ZPD (Vygotsky) definem o algoritmo
    │       de calibração automática
    │
    ├── ALIMENTA → Memória de Aquisição (Epic 3)
    │   └── Critérios de ADQUIRIDO/EM PROCESSO derivam de
    │       Schmidt (noticing consolidado) + Ellis (padrão emergente)
    │
    ├── ALIMENTA → Design do MANA RPG (Epic 5 — futuro)
    │   └── Chunks (Ellis) como unidade do jogo
    │       Tech tree = grafo de construções consolidadas
    │
    └── ALIMENTA → Argumentação de Marketing
        └── "Por que funciona" em linguagem de leigo
            derivada das sínteses deste RP
```

---

# ✅ QUALITY GATES DESTE RP

## Para o Corpus

- [ ] Fase 1 completa: 3 documentos de Krashen ingeridos
- [ ] Fase 2 completa: 3 documentos de Swain ingeridos
- [ ] Fase 3 completa: Vygotsky + Long ingeridos
- [ ] Fase 4 completa: Schmidt + Ellis ingeridos
- [ ] Fase 5 completa: críticas e respostas mapeadas

## Para o Clone

- [ ] Clone defende zero correção explícita com 3 argumentos
  distintos (Krashen H4, Long negative evidence, Schmidt noticing)
- [ ] Clone reconcilia Krashen vs Swain sem tomar partido
- [ ] Clone explica Memória de Aquisição em termos de
  Schmidt + Ellis sem jargão
- [ ] Clone define chunk operacionalmente para o design do RPG
- [ ] Clone responde às 5 críticas mais comuns ao método natural
  sem citar teoria diretamente

## Para o Produto

- [ ] Cada regra absoluta do AIDA tem ao menos 2 fundamentos
  teóricos documentados neste RP
- [ ] Critérios da Memória de Aquisição derivam explicitamente
  de Schmidt e Ellis
- [ ] Design de chunks para o RPG derivado explicitamente
  do modelo CREED de Ellis
- [ ] Calibração i+1 + ZPD documentada como algoritmo
  derivável deste corpus

---

**RP-MANA-CORPUS-MENTAL-CLONE**
*Gerado por: Claude Sonnet 4.6*
*Depende de: RP-20260605-LINGUA-AI · RP-AIDA-BOT-LINGUA · PRD-MANA-v2.0*
*Próximo RP sugerido: RP-MANA-ARCHITECT*
*(Arquitetura técnica: LibreChat + Groq + Supabase)*
