function questao01() {
  //Entrada de dados
  let metragem = Number(document.getElementById('metragem').value)
  let garagem = Number(document.getElementById('garagem').value)
  let andar = Number(document.getElementById('andar').value)
  let posicao = document.getElementById('posicao').value

  let valorBase
  let valorAcrescido
  let acrescidoSol
  let total

  //Processamento de dados

  //Valor Base
  if (metragem < 80) {
    switch (garagem) {
      case 1:
        valorBase = 300000
        break
      case 2:
        valorBase = 320000
        break
      case 3:
        valorBase = 340000
        break
      default:
        alert("Valor de garagem inválida.")
    }
  } else if (metragem >= 80 && metragem <= 120) {
    switch (garagem) {
      case 1:
        valorBase = 400000
        break
      case 2:
        valorBase = 420000
        break
      case 3:
        valorBase = 440000
        break
      default:
        alert("Valor de garagem inválida.")
    }
  } else if (metragem > 120) {
    switch (garagem) {
      case 1:
        valorBase = 500000
        break
      case 2:
        valorBase = 520000
        break
      case 3:
        valorBase = 540000
        break
      default:
        alert("Valor de garagem inválida.")
    }
  } 
  //Acréscimo em função do andar
  if (andar == 1) {
    valorAcrescido = 10000
  } else if (andar == 2) {
    valorAcrescido = 20000
  } else if (andar == 3) {
    valorAcrescido = 30000
  } else {
    alert("Andar inválido")
  }

  //Acréscimo em função da posição do sol(sobre o valor base)
  if (posicao == 'M' || posicao == 'm') {
    acrescidoSol = 0.05
  } else if (posicao == 'T' || posicao == 't') {
    acrescidoSol = 0.08
  } else {
    alert("Posição inválida.")
  }

  //valor total
  total = valorBase + valorAcrescido + valorBase * acrescidoSol
  
  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O valor total do apartamento é de: R$ ${total},00`
}

function questao02() {
  let opcao = 1

  let entregaTeams = 0
  let entregaPapel = 0
  let entregaWhats = 0
  let entregaEmail = 0
  let tantoFaz = 0

  let totalVotos
  let tantoFazPorc

  let grupo = []

  do {
    //Entrada de dados
    opcao = Number(
      prompt(
        'Insira o número da opção desejada.\n1. Entrega pelo Teams\n2. Entrega em papel\n3. Entrega pelo WhatsApp\n4. Entrega por email\n5. Tanto faz\n0. Encerrar'
      )
    )

    switch (opcao) {
      case 1: entregaTeams++; break;
      case 2: entregaPapel++; break;
      case 3: entregaWhats++; break;
      case 4: entregaEmail++; break;
      case 5: tantoFaz++; break;
      case 0: alert('Encerrando votações.'); break;
      default: alert('Valor inválido. Tente novamente.')
    }
  } while (opcao != 0)

  //Ordendando de forma decrescente - inserindo os valores
  grupo.push(entregaTeams + ' voto(s) -- Opção um (Teams)\n')
  grupo.push(entregaPapel + ' voto(s) -- Opção dois (Papel)\n')
  grupo.push(entregaWhats + ' voto(s) -- Opção três (WhatsApp)\n')
  grupo.push(entregaEmail + ' voto(s) -- Opção quatro (Email)\n')
  grupo.push(tantoFaz + ' voto(s) -- Opção cinco (Tanto Faz)\n')

  grupo.sort(function (a, b) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
  })

  //Calculos
  totalVotos =
    entregaTeams + entregaPapel + entregaWhats + entregaEmail + tantoFaz

  tantoFazPorc = (tantoFaz / totalVotos) * 100

  //saída de dados
  alert(
    `O total de votos: ${totalVotos}\n\nVotos de cada opção:\n1. Entrega pelo Teams: ${entregaTeams}\n2. Entrega em papel: ${entregaPapel}\n3. Entrega pelo WhatsApp: ${entregaWhats}\n4. Entrega por email: ${entregaEmail}\n5. Tanto faz: ${tantoFaz}\n\nPorcentagem de votos que Tanto Faz teve sobre o total: ${tantoFazPorc.toFixed(
      2
    )}%\n\nOrdem decrescente da quantidade de votos:\n ${grupo}`
  )
}

// Ou podemos utilizar para ordenar:
//  let prim = ; let seg; let terc; let quar; let quin
//  let troca

// 5 elementos - 4 vezes
//  for (let i=0; i<4 ; i++) {
//    if (entregaTeams > entregaPapel) {
//      aux = entregaTeams
//      entregaTeams = entregaPapel
//      entregaPapel = aux

//      aux = prim
//      prim = seg
//      seg = aux
//    }

//    if (entregaPapel < entregaWhats) {
//      aux = entregaPapel
//      entregaPapel = entregaWhats
//      entregaWhats = aux

//      aux = seg
//      seg = terc
//      terc = aux
//    }

//    if (entregaWhats < entregaEmail) {
//      aux = entregaWhats
//      entregaWhats = entregaEmail
//      entregaEmail = aux

//      aux = terc
//      terc = quar
//      quar = aux
//    }

//    if (entregaEmail < tantoFaz) {
//      aux = entregaEmail
//      entregaEmail = tantoFaz
//      tantoFaz = aux

//      aux = quar
//      quar = quin
//      quin = aux
//    }
//  }
