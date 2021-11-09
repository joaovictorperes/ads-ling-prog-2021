// Função que não retorna nada
function potencia(x, y) {
    console.log(Math.pow(x,y))
}

//função que retorna um valor
function potencia2(x, y) {
    return Math.pow(x, y)
}

potencia(2,3)

console.log(potencia2(2, 3))

//Passagem de parâmetro por valor
function soma(a) {
    a = a + 10
}

let x = 50
soma(x)
console.log(x) // qual é o valor?

let a = 50
soma(a)
console.log(a)

// passagem de parâmetro por referência
function soma10Vetores(a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i] + 10
    }
}

let vetor = [1,2,3,4,5]
soma10Vetores(vetor)
//O que for alterado em a será alterado no vetor
console.log(vetor) // 11, 12, 13, 14, 15

///////////////////////////////////////////////////
//Exercício 1 - transforme o case em uma função

//Funções do switch/case
function case1(vetVendedores) {
    let objeto = {
        codigo: prompt(`Informe o código do vendedor`),
        nome: prompt(`Informe o nome do vendedor`)
    }
    //vamos percorrer o vetor para encontrar código já existente
    let achou = false // se não encontrar, recebe false, caso encontre, recebe true
    for (let i = 0; i < vetVendedores.length; i++) {
        if (vetVendedores[i].codigo == objeto.codigo) {
            achou = true // encontramos um vendedor com este código
        }
    }

    if (achou) {
        alert("Já existe um vendedor com este código")
    } else {
        vetVendedores.push(objeto) //adiciona o vendedor no vetor
        alert("Vendedor cadastrado com sucesso.")
    }
}

function case2(vetVendedores, vetVendas) {
    let objeto = {
        vendedor: prompt("Informe o código do vendedor"),
        mes: Number(prompt("Informe o mês da venda")),
        valor: Number(prompt("informe o valor da venda"))
    }

    let achou = false
    for (let i=0;i<vetVendedores.length; i++) {
        if (vetVendedores[i].codigo == objeto.vendedor) {
            achou = true
        }
    }
    if (!achou) {
        alert("Vendedor não existe.")
    } else {
        let achou2 = false
        for (let i=0; i<vetVendas.length; i++) {
            if ((vetVendas[i].vendedor == objeto.vendedor) && (vetVendas[i].mes == objeto.mes)) {
                achou2 = true
            }
        }
        if (achou2) {
            alert("Já existe uma venda deste vendedor neste mês.")
        } else {
            vetVendas.push(objeto)
            alert("Venda cadastrada com sucesso.")
        }
    }
}

function case3(vetVendas, codigoInteresse, mesInteresse) {
    let achou = false
    for (let i=0; i<vetVendas.length; i++) {
        if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)) {
        alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de ${vetVendas[i].valor}`)
        achou = true
        }
    }
    if (!achou) {
        alert(`Não foi encontrada venda para este vendedor ${codigoInteresse} neste mês ${mesInteresse}`)
    }
}

function case4(vetVendas, codigoInteresse2) {
    let achou = false
    let soma = 0
    for (let i=0; i<vetVendas.length; i++) {
        if (vetVendas[i].vendedor == codigoInteresse2) {
        soma = soma + vetVendas[i].valor
        achou = true
        }
    }
    if (!achou) {
        alert(`Não foi encontrada venda para este vendedor ${codigoInteresse2}.`)
    } else {
        alert(`O total de vendas do vendedor ${codigoInteresse2} é ${soma}.`)
    }
}

function case5(vetVendas, mesInteresse2) {
    
    let maiorVenda = 0
    let quemVendeu = ""
    let achou = false

    for (let i=0; i<vetVendas.length;i++) {
        if (vetVendas[i].mes == mesInteresse2) {
            achou = true
            if (vetVendas[i].valor > maiorVenda) {
                maiorVenda = vetVendas[i].valor
                quemVendeu = vetVendas[i].vendedor
            }
        }
    }
    if (achou) {
        alert(`A maior venda no mês ${mesInteresse2} foi de ${quemVendeu} no valor de ${maiorVenda}`)
    } else {
        alert("Não existe venda no mês informado.")
    }
}

function case6(vetVendas) {
    let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0] // zero neutraliza a soma
    for (let i=0; i<vetVendas.length; i++) {
        let posicao = vetVendas[i].mes - 1
        vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
    }
    // procurar o mês com maior venda
    let maiorVenda = 0
    let maiorMes = 0
    for (let i=0; i<vendasMes.length; i++) {
        if (vendasMes[i] > maiorVenda) {
            maiorVenda = vendasMes[i]
            maiorMes = i + 1
        }
    }
    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVenda}.`)
}
/// Fim das funções de switch/case

function exe01vetObjPar() {
    let opcao
    let vetVendedores = []
    let vetVendas = []

    //Entrada de dados
    do {
      opcao = Number(prompt("Digite a opção desejada:\n\n1. Cadastrar vendedor.\n2. Cadastrar venda.\n3. Consultar as vendas de um funcionário em determindo mês.\n4. Consultar o total das vendas de determinado mês.\n5. Mostrar o número do vendedor que mais vendeu em determinado mês.\n6. Monstrar o número do mês com mais vendas.\n7. Finalizar o programa."))
      switch (opcao) {
        case 1: 
            case1(vetVendedores)
            break
        case 2:
            case2(vetVendedores, vetVendas)
            break
        case 3: 
            let codigoInteresse = prompt("infome o código do vendedor.")
            let mesInteresse = Number(prompt("Informe mês de interesse"))
            case3(vetVendas, codigoInteresse, mesInteresse)
            break
        case 4: 
            let codigoInteresse2 = prompt("Infome o código do vendedor.")
            case4(vetVendas, codigoInteresse2)
            break
        case 5: 
            let mesInteresse2 = Number(prompt("Informe o mês de interesse:"))
            case5(vetVendas, mesInteresse2)
            break
        case 6:
            case6(vetVendas)
            break
        case 7: alert("Finalizando o programa...")
            break
        default: alert("Opção inválida")
      }
    } while (opcao !== 7)
}
