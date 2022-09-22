import { Pergunta } from '../interfaces/Perguntas'
import { TiposEncerramento } from './../enums/TiposEncerramento'
import * as readline from 'readline'
import * as process from 'process'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export class Jogo {
  constructor (private participante: string, private perguntas: Pergunta[], private dinheiroInicial: number = 0) {}

  iniciarJogo (): void {
    if (this.perguntas.length !== 10) {
      throw new Error('O jogo só funciona com 10 perguntas cadastradas')
    }
    if (typeof this.participante !== 'string') {
      throw new Error('É preciso ter o nome do participante')
    }
    if (this.perguntas.length < 1) {
      throw new Error('Jogo só pode ser iniciado com perguntas cadastradas')
    }
    console.log(`Seja bem vindo, ${this.participante}.`)
    this.enviarPergunta()
  }

  encerrarJogo (motivo: TiposEncerramento, dinheiroAcumulado: number): void {
    if (motivo === 0) {
      this.dinheiroInicial = dinheiroAcumulado/2
    }
    if (motivo === 1) {
      this.dinheiroInicial = dinheiroAcumulado/5
    }
    console.log('Você encerrou o jogo com R$' + this.dinheiroInicial)
    rl.close()
    process.exit(0)
  }

  enviarPergunta (indicePergunta: number = 0): void {
    console.clear()
    const self = this
    const perguntas = this.perguntas
    if (indicePergunta === perguntas.length) {
      console.log('Parabéns, você venceu!')
      self.encerrarJogo(TiposEncerramento.vitoria, self.dinheiroInicial)
      return
    }
    console.log(`Pergunta valendo ${self.dinheiroInicial + 100000}\n${perguntas[indicePergunta].pergunta}`)
    perguntas[indicePergunta].alternativas.forEach(alternativa => {
      console.log(alternativa)
    })
    rl.question('Digite R para Responder - D para Desistir: ', function(value: string) {
      switch (value.toLowerCase()) {
        case 'd':
          console.log('Desistiu')
          self.encerrarJogo(TiposEncerramento.desistencia, self.dinheiroInicial)
          return
        case 'r':
          rl.question('Digite a Letra desejada: ', function (resposta: string) {
            if (resposta.toLowerCase() === perguntas[indicePergunta].alternativaCorreta.toLowerCase()) {
              indicePergunta++
              self.dinheiroInicial += 100000
              self.enviarPergunta(indicePergunta)
              return
            }
            self.encerrarJogo(TiposEncerramento.derrota, self.dinheiroInicial)
            return
          })
          return
        default:
          console.log('Valor incorreto')
          throw new Error('Deve optar entre R para Responder ou D para Desistir')
      }
    })
  }

  cadastrarPergunta (pergunta: Pergunta): Pergunta {
    if (typeof pergunta.alternativaCorreta !== 'string' || typeof pergunta.alternativas !== 'object' || typeof pergunta.pergunta !== 'string') {
      throw new Error('Pergunta inválida')
    }
    this.perguntas.push(pergunta)
    return pergunta
  }
}