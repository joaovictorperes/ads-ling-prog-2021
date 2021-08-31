function exe000() {
  let produtos = 0
  let cont = 1

  while (cont <= 10) {
    produtos += Number(prompt(`'Insira o valor do ${cont}° produto'`))
    cont++
  }

  alert(`A média do valor dos 10 produtos é de: ${produtos / 10}`)
}

function exe001() {
  let grupo = []
  let cont2 = 1
  alert('Para sair digite: s')
  //Entrada e processamento de dados
  while (cont2 <= 5) {
    let cont1 = 1
    while (cont1 <= 4) {
      grupo.push(Number(prompt(`Grupo ${cont2} - Digite um número:`)))
      cont1++
    }
    cont2++
  }

  //Saída de dados
  alert(`Grupo 1: ${grupo.slice(0, 4)}`)
  alert(`Grupo 2: ${grupo.slice(4, 8)}`)
  alert(`Grupo 3: ${grupo.slice(8, 12)}`)
  alert(`Grupo 4: ${grupo.slice(12, 16)}`)
  alert(`Grupo 5: ${grupo.slice(16, 20)}`)

  //Ordem crescente dos números
  grupo.sort(function (a, b) {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })

  alert(`Ordem crescente: ${grupo}`)

  //Ordem decrescente dos números
  grupo.sort(function (a, b) {
    if (a > b) return -1
    if (a < b) return 1
    return 0
  })

  alert(`Ordem decrescente: ${grupo}`)
}

function exe003() {
  let cont = 1
  let idade = 0
  let clas1 = 0
  let clas2 = 0
  let clas3 = 0
  let clas4 = 0
  let clas5 = 0

  while (cont <= 8) {
    idade = Number(prompt(`${cont}° entrevistado, informe sua idade:`))

    if (idade <= 15) {
      clas1++
    } else if (idade > 15 && idade <= 30) {
      clas2++
    } else if (idade > 30 && idade <= 45) {
      clas3++
    } else if (idade > 45 && idade <= 60) {
      clas4++
    } else if (idade > 60) {
      clas5++
    }

    cont++
  }

  let porcen1 = (clas1 / 8) * 100
  let porcen5 = (clas5 / 8) * 100

  alert(`
   Número de pessoas na primeira faixa etária: ${clas1}
   Número de pessoas na segunda faixa etária: ${clas2} 
   Número de pessoas na terceira faixa etária: ${clas3} 
   Número de pessoas na quarta faixa etária: ${clas4} 
   Número de pessoas na quinta faixa etária: ${clas5}`)

  alert(
    `A porcentagem de pessoas da 1° faixa etária em relação ao total: ${porcen1}%`
  )

  alert(
    `A porcentagem de pessoas da 5° faixa etária em relação ao total: ${porcen5}%`
  )
}

function exe006() {
  let cont = 1
  let valorVista = 0
  let valorPrazo = 0
  let codigo = ''

  //Entrada de dados e processamento
  alert(`
   Digite V: para transação à vista
   Digite P: para transação à prazo.
   `)

  while (cont <= 15) {
    codigo = prompt(`Forma de pagamento do produto ${cont} == (V/P):`)
    if (codigo == 'p' || codigo == 'P') {
      valorVista += Number(prompt(`Insira o valor da ${cont}° compra:`))
    } else if (codigo == 'v' || codigo == 'V') {
      valorPrazo += Number(prompt(`Insira o valor da ${cont}° compra:`))
    } else {
      alert('Opção de pagamento inválida. Insira novamente.')
      --cont
    }

    cont++
  }

  //Saída de dados
  alert(`
  O valor total das compras à vista: R$${valorVista.toFixed(2)}
  O valor total das compras à prazo: R$${valorPrazo.toFixed(2)}
  O valor total das compras: R$${valorPrazo + valorVista.toFixed(2)}
  O valor da primeira parcela das compras a prazo: R$${(valorPrazo / 3).toFixed(
    2
  )}`)
}

function exe023() {
  let opcao

  do {
    opcao = Number(
      prompt(
        `Digite \n1. Novo Salário \n2. Férias \n3. Décimo terceiro \n4. Sair`
      )
    )
    switch (opcao) {
      case 1:
        let salario = Number(prompt(`Informe o salário`))
        let novoSalario

        if (salario < 210) {
          novoSalario = salario + (15 * salario) / 100
        } else if (salario <= 600) {
          novoSalario = salario + (10 * salario) / 100
        } else {
          novoSalario = salario + (5 * salario) / 100
        }
        alert(`O novo salário é de: ${novoSalario}`)
        break
      case 2:
        salario = Number(prompt(`Informe o salário`))
        alert(`As férias serão: R$${salario + salario / 3}`)
        break
      case 3:
        salario = Number(prompt(`Informe o salário`))
        let meses = Number(prompt('Informe quantos meses forma trabalhados:'))
        alert(`Décimo terceiro: R$${(salario * meses) / 12}`)
        break
      case 4:
        alert('O programa será encerrado')
        break
      default:
        alert('Opção inválida.')
    }
  } while (opcao != 4)
}
