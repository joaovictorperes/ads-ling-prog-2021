//******************************* Exercícios de vetor alterados para vetor Objeto *********************************************

function ex03vetorObj() {
  //Declaração de variáveis
  let produto = []
  let estoque = ""

  //Entrada de dados
  for (let i=0; i<=2; i++) {

    let cadastro = {
      codigo: prompt(`Insira o código do produto ${i+1}`),
      qtde: Number(prompt("Insira a quantidade do produto:"))
    }
    
    produto[i] = cadastro
    //Estoque dos produtos
    estoque += `Código: ${produto[i].codigo} / Quant.: ${produto[i].qtde}\n`
  }

  alert(`Estoque:\n${estoque}`)

  //Saída de dados
  let opcao 
  let cliente = 0

  do { 
    cliente++
    alert("NOVA COMPRA - VENDAS")
    opcao = Number(prompt(`Novo cliente ${cliente}(1-sim/0-sair)`))

    if (opcao === 1) {
      let codigoEntra 
      let qtdeEntra
      let pedido = ""
      
      let estoqueNew 

      do {
        let cont = 0
        codigoEntra = prompt("Insira o código para busca no estoque:\nPara finalizar => 0")
        
        //busca do código
        for (let i=0; i<=2; i++) {
          
          console.log(cont)
          if (codigoEntra === produto[i].codigo) {
            
            alert("Produto encontrado")
            qtdeEntra = Number(prompt("Solicite a quantidade:"))
            if (qtdeEntra <= produto[i].qtde) {
              alert("Pedido adicionado!")
              qtde[i]-= qtdeEntra
              //Montagem do pedido
              pedido += `Produto - código: ${produto[i].codigo} / Quant.: ${qtdeEntra}\n`
            } else {
              alert(`Não temos estoque suficiente dessa mercadoria. Produtos restantes: ${produto[i].qtde}`)
            }
          } else {
            cont++
            if ((cont === 3) && (codigoEntra !== "0")) {
              alert("Código inexistente.")
            }
          }
        }

        if (codigoEntra === "0") {
          alert(`FINALIZANDO COMPRA...`)
          alert(`PEDIDO:\n\n${pedido}`)
        }

      } while (codigoEntra !== "0")

      estoqueNew = `Código: ${vetor[0].codigo} / Quant.: ${produto[0].qtde}\nCódigo: ${produto[1].codigo} / Quant.: ${produto[1].qtde}\nCódigo: ${produto[2].codigo} / Quant.: ${produto[2].qtde}`
      
      //Atualizando o estoque
      alert(`ATUALIZAÇÃO DE ESTOQUE:\n\n${estoqueNew}`)
    } 

    if (opcao === 0) {
      alert("FINALIZANDO O PROGRAMA.")
    }
    } while(opcao !== 0)
}

function ex06vetorObj() {
  //Declaração de variáveis
  let vetor = new Array(10)

  for(let i=0;i<10;i++) {
    let vendas = {
      nome: prompt(`Informe o nome do vendedor ${i+1}`),
      vendas: Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)),
      comissao: Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
    }
    
    vetor[i] = vendas
  }
  
  let totalVendas = 0
  let maior = 0
  let nomeMaior = ""
  let menor = 100000
  let nomeMenor = ""

  for (let i = 0; i < 10; i++) {
    let receber = (vetor[i].vendas *vetor[i].comissao/100);
    if(receber > maior) {
      maior = receber
      nomeMaior = vetor[i].nome
    }

    if (receber < menor) {
      menor = receber
      nomeMenor = vetor[i].nome
    }

    alert(`O vendedor ${vetor[i].nome} vai receber ${receber}`)
    totalVendas = totalVendas + vetor[i].vendas
  }

  alert(`O total de vendas foi de ${totalVendas}`)
  alert(`O maior valor a receber é ${nomeMaior}`)
  alert(`O menor valor a receber é ${nomeMenor}`)
}

function ex08vetorObj() { 
  //Declaração de variáveis
  let alunos = new Array(7)
  let maiorMedia = 0
  let maiorMediaResultado = ""
  let mediaNota
  let relatorio = "RELATÓRIO DA SALA\n"

  //Entrada de dados
  for (let i = 0; i < alunos.length; i++) {

    let cadastro = {
      nome: prompt(`Insira o nome do aluno ${i+1}:`),
      media: Number(prompt("Insira a sua média:"))
    }
  
    alunos[i] = cadastro

    if (maiorMedia < alunos[i].media) { //Verificar maior média
      maiorMedia = alunos[i].media
      maiorMediaResultado = `aluno(a) ${alunos[i].nome} com média ${(maiorMedia).toFixed(2)}`
    }
    
    relatorio += `\n\nAluno(a) ${alunos[i].nome} tirou média ${alunos[i].media}. `
    
    if (alunos[i].media < 7) { //Verificar média insuficiente
     mediaNota = 10 - alunos[i].media
     relatorio += `\nSerá necessário fazer exame final e tirar no mínimo ${mediaNota}`
    }
  }

  //Saída de dados
  alert(relatorio)
  alert(`A maior média da sala foi do(a) ${maiorMediaResultado}`)

}
 
function ex09vetorObj() {
  //Declaração de variáveis
  let vetor = new Array(10)
  let tabela = ""

  //Entrada de dados
  for (let i = 0; i < 10; i++) {
    let objeto = {
      nome: prompt(`Informe o nome do produto ${i+1}`),
      codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
      preco: Number(prompt(`Informe o preço do produto ${i+1}`))
    }

    vetor[i] = objeto //Adiciona o objeto no array

    tabela += `Nome: ${vetor[i].nome} / Código: ${vetor[i].codigo} / Preço: ${vetor[i].preco}`

    if (vetor[i].preco > 1000 && vetor[i].codigo % 2 === 0) {
      vetor[i].precoNovo = vetor[i].preco * 1.20
      tabela += ` / Preço com aumento: ${(vetor[i].precoNovo).toFixed(2)}`
    } else if (vetor[i].codigo % 2 === 0) {
      vetor[i].precoNovo = vetor[i].preco * 1.15 
      tabela += ` / Preço com aumento: ${(vetor[i].precoNovo).toFixed(2)}`
    } else if (vetor[i].preco > 1000) {
      vetor[i].precoNovo = vetor[i].preco * 1.10
      tabela += ` / Preço com aumento: ${(vetor[i].precoNovo).toFixed(2)}`
    } 
    
    tabela += "\n\n"
  }
  
  alert(tabela)
}

//FIM DOS EXERCÍCIOS ALTERADOS PARA VETOR OBJETO

//EXERCÍCIOS VETOR OBJETO:

function exe01vetObj() {
  let opcao
  let vetVendedores = []
  let vetVendas = []

  //Entrada de dados
  do {
    opcao = Number(prompt("Digite a opção desejada:\n\n1. Cadastrar vendedor.\n2. Cadastrar venda.\n3. Consultar as vendas de um funcionário em determindo mês.\n4. Consultar o total das vendas de determinado mês.\n5. Mostrar o número do vendedor que mais vendeu em determinado mês.\n6. Monstrar o número do mês com mais vendas.\n7. Finalizar o programa."))
    switch (opcao) {
      case 1: 
              let objeto1 = {
                codigo: prompt(`Informe o código do vendedor`),
                nome: prompt(`Informe o nome do vendedor`)
              }
              //vamos percorrer o vetor para encontrar código já existente
              let achou1 = false // se não encontrar, recebe false, caso encontre, recebe true
              for (let i = 0; i < vetVendedores.length; i++) {
                if (vetVendedores[i].codigo == objeto1.codigo) {
                  achou1 = true // encontramos um vendedor com este código
                }
              }

              if (achou1) {
                alert("Já existe um vendedor com este código")
              } else {
                vetVendedores.push(objeto1) //adiciona o vendedor no vetor
                alert("Vendedor cadastrado com sucesso.")
              }

            break
      case 2:
              let objeto2 = {
                vendedor: prompt("Informe o código do vendedor"),
                mes: Number(prompt("Informe o mês da venda")),
                valor: Number(prompt("informe o valor da venda"))
              }

              let achou22 = false
              for (let i=0;i<vetVendedores.length; i++) {
                if (vetVendedores[i].codigo == objeto2.vendedor) {
                  achou22 = true
                }
              }
              if (!achou22) {
                alert("Vendedor não existe.")
              } else {
                let achou2 = false
                for (let i=0; i<vetVendas.length; i++) {
                  if ((vetVendas[i].vendedor == objeto2.vendedor) && (vetVendas[i].mes == objeto2.mes)) {
                    achou2 = true
                  }
                }
                if (achou2) {
                  alert("Já existe uma venda deste vendedor neste mês.")
                } else {
                  vetVendas.push(objeto2)
                  alert("Venda cadastrada com sucesso.")
                }
              }
            break
      case 3: 
              let codigoInteressse = prompt("infome o código do vendedor.")
              let mesInteresse = Number(prompt("Informe mês de interesse"))
              let achou3 = false
              for (let i=0; i<vetVendas.length; i++) {
                if ((vetVendas[i].vendedor == codigoInteressse) && (vetVendas[i].mes == mesInteresse)) {
                  alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteressse} é de ${vetVendas[i].valor}`)
                  achou3 = true
                }
              }
              if (!achou3) {
                alert(`Não foi encontrada venda para este vendedor ${codigoInteressse} neste mês ${mesInteresse}`)
              }
            break
      case 4: 
              let codigoInteressse2 = prompt("Infome o código do vendedor.")
              let achou4 = false
              let soma = 0
              for (let i=0; i<vetVendas.length; i++) {
                if (vetVendas[i].vendedor == codigoInteressse2) {
                  soma = soma + vetVendas[i].valor
                  achou4 = true
                }
              }
              if (!achou4) {
                alert(`Não foi encontrada venda para este vendedor ${codigoInteressse2}.`)
              } else {
                alert(`O total de vendas do vendedor ${codigoInteressse2} é ${soma}.`)
              }
            break
      case 5: 
              let mesInteresse2 = Number(prompt("Informe o mês de interesse:"))
              let maiorVenda1 = 0
              let quemVendeu = ""
              let achou5

              for (let i=0; i<vetVendas.length;i++) {
                if (vetVendas[i].mes == mesInteresse2) {
                  if (vetVendas[i].valor > maiorVenda1) {
                    maiorVenda1 = vetVendas[i].valor
                    quemVendeu = vetVendas[i].vendedor
                  }
                }
              }
              if (achou5) {
                alert(`A maior venda no mês ${mesInteresse2} foi de ${quemVendeu} no valor de ${maiorVenda1}`)
              } else {
                alert("Não existe venda no mês informado.")
              }
            break
      case 6:
              let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0] // zero neutraliza a soma
              for (let i=0; i<vetVendas.length; i++) {
                let posicao = vetVendas[i].mes - 1
                vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
              }
              // procurar o mês com maior venda
              let maiorVenda2 = 0
              let maiorMes = 0
              for (let i=0; i<vendasMes.length; i++) {
                if (vendasMes[i] > maiorVenda2) {
                  maiorVenda2 = vendasMes
                  maiorMes = i + 1
                }
              }
              alert(`O mês ${maiorMes} teve a maior venda de ${maiorVenda2}.`)
        break
      case 7: alert("Finalizando o programa...")
        break
      default: alert("Opção inválida")
    }
  } while (opcao !== 7)
}