# FASE 1 DO CORPUS — Stephen Krashen
## Guia de Construção (Esqueleto do Clone Mental)

**Objetivo da fase:** o clone consegue raciocinar com profundidade
sobre as 5 hipóteses de Krashen e defender a Regra 1 da AIDA
(zero correção explícita) com argumentos distintos.

**Tempo estimado:** 1 semana, ritmo de 1 documento a cada 2 dias.

**Status dos links:** verificados em 17/06/2026. O site oficial
(sdkrashen.com) está com certificado SSL expirado desde out/2024 —
use os links de arquivo (ghostarchive) como backup se o link
direto falhar no navegador.

---

## 📚 Os 3 Documentos da Fase 1

### Documento 1 — "The Case for Comprehensible Input" (LER PRIMEIRO)

**Por que primeiro:** é o resumo mais maduro e compacto da teoria.
Krashen escreveu isso décadas depois das hipóteses originais,
já incorporando respostas a críticas e décadas de evidência.
É o "Krashen explicando Krashen" da forma mais clara possível.

**Link direto:**
`https://www.sdkrashen.com/content/articles/case_for_comprehensible_input.pdf`

**Link espelho (caso o site caia):**
`https://languagemagazine.com/2017/07/17/case-for-comprehension/`

**Tamanho:** ~10 páginas, leitura de 30-40 minutos

**O que extrair na leitura:**
- A formulação da **Comprehension Hypothesis** (versão madura do
  Input Hypothesis) — note que ele renomeia ao longo da carreira,
  mas o núcleo é o mesmo
- A comparação direta com a **Skill-Building Hypothesis** (a rival)
  — essa comparação é ouro para o clone defender o método contra
  objeções de "mas e a gramática?"
- Os "case histories" que ele cita (Lomb Kató, o poliglota; o
  caso do estudante de alemão que sabia toda a gramática e não
  falava) — são os exemplos que o clone deve usar para ilustrar
  a teoria sem jargão

---

### Documento 2 — "Principles and Practice in Second Language Acquisition" (1982)
**Capítulos 1-3 apenas nesta fase**

**Por que este:** é onde as 5 hipóteses são formalizadas pela
primeira vez de forma sistemática, com a estrutura lógica completa
que conecta uma à outra.

**Link direto:**
`http://www.sdkrashen.com/content/books/principles_and_practice.pdf`

**Link de arquivo (confirmado funcional):**
`https://ghostarchive.org/archive/20221009/http://www.sdkrashen.com/content/books/principles_and_practice.pdf`

**Tamanho:** o livro completo tem ~200 páginas; capítulos 1-3
são ~50 páginas, leitura de 2-3 horas

**O que extrair na leitura:**
- Capítulo 1: a distinção **Acquisition vs Learning** com a
  bateria de evidências que ele usa (estudos de erro, estudos
  de fala espontânea sob pressão)
- Capítulo 2: a **Natural Order Hypothesis** — a sequência
  empírica de aquisição de morfemas em inglês (isso vira a
  base lógica do roadmap de 12 semanas do MANA)
- Capítulo 3: o **Monitor Model** completo — as 3 condições
  necessárias para o Monitor funcionar (tempo, foco na forma,
  conhecimento da regra) e por que conversa real elimina
  as 3 simultaneamente

---

### Documento 3 — Lecture de Krashen (formato vídeo)

**Por que este:** os dois primeiros documentos dão a teoria.
Este dá a **voz** — como ele argumenta, quais analogias usa
repetidamente, como responde a perguntas hostis de plateia.
Sem isso, o clone conhece a teoria mas não "pensa como Krashen".

**Opções verificadas (use qualquer uma, são complementares):**

1. Talk gravado em 2015:
   `https://www.youtube.com/watch?v=a3pipsG_dQk`

2. Talk gravado em 2020 sobre SLA, leitura e pesquisa:
   `https://www.youtube.com/watch?v=S0WfMgH_qPs`

3. Entrevista na comunidade poliglota:
   `https://youtu.be/YnesW3kL5cY`

**Recomendação:** assista a opção 1 ou 2 primeiro (são lectures
estruturadas). A opção 3 é mais informal, boa para complementar.

**O que extrair ao assistir:**
- O **padrão de argumentação**: ele quase sempre parte de uma
  evidência observacional simples antes de nomear a teoria
- As **analogias recorrentes** que ele usa para leigos
- Como ele trata perguntas céticas da audiência — o tom é
  paciente, nunca dogmático, sempre volta para "o que os dados
  mostram"

---

## ✅ Protocolo de Leitura (como processar cada documento)

Para cada documento, ao terminar, responda por escrito
(isso é o que vira o "treino" do clone):

1. **Resumo em 3 frases** — sem jargão, como se explicasse
   para Gabriel
2. **A evidência mais forte** que Krashen usa neste documento
   para sustentar o argumento
3. **Uma objeção que um crítico faria** — e como Krashen
   responderia, baseado no texto
4. **Uma conexão direta com o MANA** — qual regra do AIDA,
   qual story do PRD, ou qual decisão de design este trecho
   justifica

Isso transforma leitura passiva em material de treino ativo
para o system prompt do clone.

---

## 🎯 Critério de Validação da Fase 1

Antes de avançar para a Fase 2 (Swain), teste se você
(ou o clone, se já estiver rodando os documentos via RAG)
consegue responder isto sem consultar o texto:

> "Por que a AIDA nunca corrige o aluno explicitamente —
> me dê 3 razões distintas, cada uma vinda de uma hipótese
> diferente de Krashen."

Resposta esperada (gabarito):
1. **Acquisition vs Learning (H1):** correção explícita
   ensina a regra consciente — vai para o sistema de
   aprendizado, que não produz fluência sob pressão
2. **Monitor Hypothesis (H4):** correção ativa o Monitor,
   que exige tempo + foco na forma + conhecimento da regra
   simultaneamente — impossível em conversa fluida, trava
   a produção
3. **Affective Filter (H5):** ser corrigido eleva ansiedade,
   o filtro afetivo sobe, e o input subsequente (mesmo que
   de qualidade) tem menos chance de ser processado

Se você consegue articular isso com confiança e em suas
próprias palavras, a Fase 1 está consolidada.

---

## 📥 Organização Sugerida dos Arquivos

```
/corpus-mana/
  /fase-1-krashen/
    01-case-for-comprehensible-input.pdf
    02-principles-and-practice-cap1-3.pdf
    03-lecture-notas.md  (suas anotações do vídeo)
    04-respostas-protocolo.md  (suas respostas às 4 perguntas,
                                  por documento)
```

Quando for alimentar o RAG do clone (LibreChat ou outro sistema),
esses 4 arquivos de notas por documento são tão importantes quanto
os PDFs originais — é onde a síntese já está mastigada.

---

## ⏭️ Próximo Passo

Ao validar o critério acima, avise que está pronto e eu monto
o guia equivalente da **Fase 2 — Merrill Swain**, com os links
de "Communicative Competence" (1985), "Three Functions of
Output" (1995) e "Speaking as Collaborative Achievement" (2000).
