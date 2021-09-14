function exerc01() {
  let a, b, c, d, aux

  for (let cont = 0; cont < 5; cont++) {
    a = Number(prompt('Informe o valor de A'))
    b = Number(prompt('Informe o valor de B'))
    c = Number(prompt('Informe o valor de C'))
    d = Number(prompt('Informe o valor de D'))

    for (let cont = 1; cont < 4; cont++) {
      if (a > b) {
        aux = a
        a = b
        b = aux
      }

      if (b > c) {
        aux = b
        b = c
        c = aux
      }

      if (c > d) {
        aux = c
        c = d
        d = aux
      }
    }
    alert(`Ordem crescente: ${a}, ${b}. ${c}, ${d}`)
    alert(`Ordem decrescente: ${d}, ${c}, ${b},${a}`)
  }
}

function exerc02() {
  let qtde = 120
  let resultado = ''
  let maiorLucro = 0
  let maiorPreco = 0
  let maiorQtde = 0

  for (let preco = 5.0; preco >= 1.0; preco = preco - 0.5) {
    lucro = preco * qtde - 200

    if (lucro > maiorLucro) {
      maiorLucro = lucro
      maiorPreco = preco
      maiorQtde = qtde
    }

    resultado += `PREÇO INGREÇO: R$ ${preco} / QTDE: ${qtde} / DESPESA: R$ 200,00 / LUCRO: R$ ${lucro},00 \n\n`
    qtde += 26
  }
  alert(resultado)
  alert(
    `MAIOR PREÇO : R$ ${maiorPreco} /MAIOR QTDE: ${maiorQtde} /MAIOR LUCRO: R$ ${maiorLucro},00`
  )
}

function exerc21() {
  let cand1 = 0
  let cand2 = 0
  let cand3 = 0
  let cand4 = 0
  let nulo = 0
  let branco = 0
  let voto

  do {
    voto = Number(
      prompt(
        'Vote para os respectivos candidatos: 1,2,3,4\nVote nulo: 5\nVote branco: 6\nSair: 0'
      )
    )
    switch (voto) {
      case 1:
        cand1 += 1 // ou utilizar ++
        break
      case 2:
        cand2 += 1
        break
      case 3:
        cand3 += 1
        break
      case 4:
        cand4 += 1
        break
      case 5:
        nulo += 1
        break
      case 6:
        branco += 1
        break
      case 0:
        alert('Encerrando votações')
        break
      default:
        alert('Opção inválida. Tente novamente')
    }
  } while (voto !== 0)

  let totalVotos = cand1 + cand2 + cand3 + cand4 + branco + nulo
  let brancoPor = (branco / totalVotos) * 100
  let nuloPor = (nulo / totalVotos) * 100

  if (
    cand1 > cand2 &&
    cand1 > cand3 &&
    cand1 > cand4 &&
    cand1 > nulo &&
    cand1 > branco
  ) {
    alert('O candidato vencedor: candidato 1.')
  } else if (cand2 > cand3 && cand2 > cand4 && cand2 > nulo && cand2 > branco) {
    alert('O candidato vencedor: candidato 2.')
  } else if (cand3 > cand4 && cand3 > nulo && cand3 > branco) {
    alert('O candidato vencedor: candidato 3.')
  } else if (cand4 > nulo && cand4 > branco) {
    alert('O candidato vencedor: candidato 4.')
  } else if (nulo > branco) {
    alert(
      'Serão realizadas novas eleições, pois o número de votos nulos foi maior que o dos candidatos.'
    )
  } else {
    alert(
      'Serão realizadas novas eleições, pois o número de votos brancos foi maior que o dos candidatos.'
    )
  }

  alert(
    `TOTAL DE VOTOS: ${totalVotos}\n\n Votos cand. 1: ${cand1} \n Votos cand. 2: ${cand2} \n Votos cand. 3: ${cand3} \n Votos cand. 4: ${cand4} \n Votos nulos: ${nulo} \n Votos brancos: ${branco} \n\n Quantidade de votos nulos em relação ao total de votos: ${nuloPor.toFixed(
      1
    )}% \n Quantidade de votos brancos em relação ao total de votos: ${brancoPor.toFixed(
      1
    )}%`
  )
}
