import { Pergunta } from "./interfaces/Perguntas"

const perguntaUm: Pergunta = {
  pergunta: 'Qual bicho transmite Doença de Chagas?',
  alternativas: [
    'A - Abelha',
    'B - Barata',
    'C - Pulga',
    'D - Barbeiro'
  ],
  alternativaCorreta: 'D'

}

const perguntaDois: Pergunta = {
  pergunta: 'Seguindo a sequência do baralho, qual carta vem depois do dez?',
  alternativas: [
    'A - Rei',
    'B - Valete',
    'C - Nove',
    'D - Ás'
  ],
  alternativaCorreta: 'B'
}

const perguntaTres: Pergunta = {
  pergunta: 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
  alternativas: [
    'A - Caju',
    'B - abóbora',
    'C - Chuchu',
    'D - Côco'
  ],
  alternativaCorreta: 'B'
}

const perguntaQuatro: Pergunta = {
  pergunta: 'Qual é o coletivo de cães?',
  alternativas: [
    'A - Matilha',
    'B - Rebanho',
    'C - Alcateia',
    'D - Manada'
  ],
  alternativaCorreta: 'A'
}

const perguntaCinco: Pergunta = {
  pergunta: 'Qual é o triângulo que tem todos os lados diferentes?',
  alternativas: [
    'A - Equilátero',
    'B - Isóceles',
    'C - Escaleno',
    'D - Trapézio'
  ],
  alternativaCorreta: 'C'
}

const perguntaSeis: Pergunta = {
  pergunta: 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?',
  alternativas: [
    'A - Monte Everest',
    'B - Monte Carlo',
    'C - Monte Fuji',
    'D - Monte Branco'
  ],
  alternativaCorreta: 'A'
}

const perguntaSete: Pergunta = {
  pergunta: 'Quem compôs o Hino da Independência?',
  alternativas: [
    'A - Dom Pedro I',
    'B - Manuel Bandeira',
    'C - Castro Alvez',
    'D - Carlos Gomes'
  ],
  alternativaCorreta: 'A'
}

const perguntaOito: Pergunta = {
  pergunta: 'Qual é o antônimo de "malograr"?',
  alternativas: [
    'A - Perder',
    'B - Fracassar',
    'C - Conseguir',
    'D - Desprezar'
  ],
  alternativaCorreta: 'C'
}

const perguntaNove: Pergunta = {
  pergunta: 'Em que país nasceu Carmem Miranda?',
  alternativas: [
    'A - Brasil',
    'B - Espanha',
    'C - Portugal',
    'D - Argentnia'
  ],
  alternativaCorreta: 'C'
}

const perguntaDez: Pergunta = {
  pergunta: 'Qual foi o último Presidente do período da ditadura militar no Brasil?',
  alternativas: [
    'A - Costa e Silva',
    'B - João Figueiredo',
    'C - Ernesto Geisel',
    'D - Emílio Médici'
  ],
  alternativaCorreta: 'B'
}

export const listaPerguntas = {
  um: perguntaUm,
  dois: perguntaDois,
  tres: perguntaTres,
  quatro: perguntaQuatro,
  cinco: perguntaCinco,
  seis: perguntaSeis,
  sete: perguntaSete,
  oito: perguntaOito,
  nove: perguntaNove,
  dez: perguntaDez
}
