export interface Pergunta {
  pergunta: string
  alternativas: {
    letra: string,
    resposta: string
  }[]
  alternativaCorreta: string
}
