import { Pergunta } from "../interfaces/Perguntas"
import * as readline from 'readline'
import * as process from 'process'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export class Jogo {
  constructor (private participante: string, private perguntas: Pergunta[], private dinheiroInicial: number = 0) {}

  iniciarJogo () {
    if (typeof this.participante !== 'string') {
      throw new Error('É preciso ter o nome do participante')
    }
    if (this.perguntas.length < 1) {
      throw new Error('Jogo só pode ser iniciado com perguntas cadastradas')
    }
    rl.question('Digite Teste: ', function(value: any) {
      rl.question('Opa: ', () => {
        console.log('Teste é:', value)
        rl.close()
      })
    })

    rl.on('close', () => {
      console.log('Bye')
      process.exit(0)
    })
  }

  encerrarJogo () {}

  cadastrarPergunta (pergunta: Pergunta): void {
    if (typeof pergunta.alternativaCorreta !== 'string' || typeof pergunta.alternativas !== 'object' || typeof pergunta.pergunta !== 'string') {
      throw new Error('Pergunta inválida')
    }
    this.perguntas.push(pergunta)
  }
}