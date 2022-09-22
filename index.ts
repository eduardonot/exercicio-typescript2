import { Jogo } from "./Classes/Jogo"
import { listaPerguntas } from "./bancoPerguntas"
const jogo = new Jogo('Eduardo', [], 0)

jogo.cadastrarPergunta(listaPerguntas.um)
jogo.cadastrarPergunta(listaPerguntas.dois)
jogo.cadastrarPergunta(listaPerguntas.tres)
jogo.cadastrarPergunta(listaPerguntas.quatro)
jogo.cadastrarPergunta(listaPerguntas.cinco)
jogo.cadastrarPergunta(listaPerguntas.seis)
jogo.cadastrarPergunta(listaPerguntas.sete)
jogo.cadastrarPergunta(listaPerguntas.oito)
jogo.cadastrarPergunta(listaPerguntas.nove)
jogo.cadastrarPergunta(listaPerguntas.dez)

jogo.iniciarJogo()
