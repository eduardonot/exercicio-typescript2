import { Jogo } from "./Classes/Jogo"
import { Pergunta } from "./interfaces/Perguntas"

const perguntaUm: Pergunta = {
  pergunta: 'Essa é a pergunta teste',
  alternativas: [
    {resposta: 'Resposta Um', letra: 'A'},
    {resposta: 'Resposta B', letra: 'B'},
    {resposta: 'Resposta C', letra: 'C'},
    {resposta: 'Resposta D', letra: 'D'}
  ],
  alternativaCorreta: 'A'
}
const jogo = new Jogo('Eduardo', [], 0)

jogo.cadastrarPergunta(perguntaUm)

jogo.iniciarJogo()
