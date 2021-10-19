//Exercícios de vetor alterados para vetor Objeto

function ex01vetor() {
  //declarar os valores
  let numeros = []
  let numImpar = []
  let numPar = []

  let par = 0
  let impar = 0
  
  //entrada de dados e processamento
  for (let i=1; i<=6; i++) {
    numeros[i] = Number(prompt(`Insira o numero ${i}:`));

    if (numeros[i] % 2 === 0) {
      numPar.push(numeros[i])
      par++
    } else {
      numImpar.push(numeros[i])
      impar++
    }
  }

  alert(`Números pares: ${numPar}\nQuantidade de pares: ${par}\n\nNúmeros Ímpares: ${numImpar}\nQuantidade de ímpares: ${impar}`)
}

function ex02vetor() {
  //declarar os valores
  let numeros = []
  let multDois = []
  let multTres = []
  let doisTres = []
  
  //entrada de dados e processamento
  for (let i=1; i<=7; i++) {
    numeros[i] = Number(prompt(`Insira o numero ${i}:`));

    if (numeros[i] % 2 === 0) {
      multDois.push(numeros[i])
    } 
    
    if(numeros[i] % 3 === 0) {
      multTres.push(numeros[i])
    }

    if ((numeros[i] % 2 === 0) && (numeros[i] % 3 === 0)) {
      doisTres.push(numeros[i])
    }
  }

  alert(`Números multiplos de 2: ${multDois}\nQuantidade: ${multDois.length}\n\nNúmeros multiplos de 3: ${multTres}\nQuantidade de ímpares: ${multTres.length}\n\nMultiplos de 2 e 3: ${doisTres}\nQuantidade: ${doisTres.length}`)
}

function ex03vetor() {
  //Declaração de variáveis
  let codigo = []
  let qtde = []
  let estoque = ""

  //Entrada de dados
  for (let i=0; i<=2; i++) {
    codigo[i] = prompt(`Insira o código do produto ${i+1}`)
    qtde[i] = Number(prompt("Insira a quantidade do produto:"))

    //Estoque dos produtos
    estoque += `Código: ${codigo[i]} / Quant.: ${qtde[i]}\n`
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
          if (codigoEntra === codigo[i]) {
            
            alert("Produto encontrado")
            qtdeEntra = Number(prompt("Solicite a quantidade:"))
            if (qtdeEntra <= qtde[i]) {
              alert("Pedido adicionado!")
              qtde[i]-= qtdeEntra
              //Montagem do pedido
              pedido += `Produto - código: ${codigo[i]} / Quant.: ${qtdeEntra}\n`
            } else {
              alert(`Não temos estoque suficiente dessa mercadoria. Produtos restantes: ${qtde[i]}`)
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

      estoqueNew = `Código: ${codigo[0]} / Quant.: ${qtde[0]}\nCódigo: ${codigo[1]} / Quant.: ${qtde[1]}\nCódigo: ${codigo[2]} / Quant.: ${qtde[2]}`
      
      //Atualizando o estoque
      alert(`ATUALIZAÇÃO DE ESTOQUE:\n\n${estoqueNew}`)
    } 

    if (opcao === 0) {
      alert("FINALIZANDO O PROGRAMA.")
    }
    } while(opcao !== 0)
}

function ex04vetor() {
  //Declaração de variáveis
  let numeros = []
  let trinta = 0
  let posicao = ""

  for (let i=0; i<15; i++) {
    numeros[i] = Number(prompt(`Insira o número ${i+1}`))
    if (numeros[i] === 30) {
      trinta++
      posicao += `Posição no array: ${i}\n`
    }
  }

  alert(`Existem ${trinta} elementos 30.\n\nSuas posições: \n${posicao}`)
}

function ex05vetor() {
  //Declaração de variáveis
  let logica = []
  let ling = []

  let cursaAmbos = 0
  let logiMatri  = ""
  let lingMatri  = ""
  let cont = 0

  //Entrada de dados
  for (let i=0; i<15; i++) {
    logica[i] = Number(prompt(`Digite o número da matrícula de Lógica - Aluno: ${i+1}`))
    logiMatri += `Número matrícula: ${logica[i]}\n`
  }
  
  for (let i=0; i<10; i++) {
    ling[i] = Number(prompt(`Digite o número da matrícula de Linguagem de Programação: ${i+1}`))
    lingMatri += `Número matrícula: ${ling[i]}\n`
  }

  //Verificar disciplinas cursadas:
  for (let i=0; i<15; i++) {
    for (let j=0; j<10; j++) {
      if (ling[i] === logica[j]) {
        cursaAmbos++
      }
    }
  }
  
  //Saída de dados
  alert(`Matrículas Lógica:\n${logiMatri}\n\nMatrículas Linguagem de Programação:\n${lingMatri}`)
  alert(`Quantidade de alunos que cursam as duas disciplinas: ${cursaAmbos}`)
}

// //Outra forma de resolução
// function exe05teste() {
//   let vetLogica = new Array(15)
//   let vetLp = new Array(10)
//   let interseccao = []

//   //Entrada de dados
//   for (let i = 0; i < 15; i++) {
//     vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica.`));
    
//   }
//   for (let i = 0; i < 10; i++) {
//     vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação.`));
    
//   }

//   for (let i=0; i<15; i++) {
//     for (let j=0; j<10; j++) {
//       if (ling[i] === logica[j]) {
//         interseccao.push(j)
//       }
//     }
//   }
// }

function ex06vetor() {
  //Declaração de variáveis
  let vetNomes = new Array(10)
  let vetVendas = new Array(10)
  let vetComissao = new Array(10)

  for(let i=0;i<10;i++) {
    vetNomes[i] = prompt(`Informe o nome do vendedor ${i+1}`)
    vetVendas[i] = Number(prompt(`Informe o total de vendas do vendedor ${i+1}`))
    vetComissao[i] = Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
  }
  
  let totalVendas = 0
  let maior = 0
  let nomeMaior = ""
  let menor = 100000
  let nomeMenor = ""

  for (let i = 0; i < 10; i++) {
    let receber = (vetVendas[i] *vetComissao[i]/100);
    if(receber > maior) {
      maior = receber
      nomeMaior = vetNomes[i]
    }

    if (receber < menor) {
      menor = receber
      nomeMenor = vetNomes[i]
    }

    alert(`O vendedor ${vetNomes[i]} vair receber ${receber}`)
    totalVendas = totalVendas + vetVendas[i]
  }

  alert(`O total de vendas foi de ${totalVendas}`)
  alert(`O maior valor a receber é ${nomeMaior}`)
  alert(`O menor valor a receber é ${nomeMenor}`)
}

function ex07vetor() {
  //Declaração de variáveis
  let numeros = new Array(10)
  let positivos = []
  let somaPositivo = 0
  let negativos = 0
  
  //Entrada de dados
  for (let i=0; i < 10; i++) {
    numeros[i] = Number(prompt(`Insira um número positivo ou negativo. NÚMERO ${i+1}:`))

    if (numeros[i] >= 0) {
      positivos.push(numeros[i])
    } else {
      negativos++
    }
  }

  for (let i = 0; i < positivos.length; i++) { //Soma dos valores positivos
    somaPositivo += positivos[i]
  }

  //Saída de dados
  alert(`A soma total dos números positivos é de: ${somaPositivo}\n\nA quantidade de números negativos: ${negativos}`)  
}

function ex08vetor() { 
  //Declaração de variáveis
  let alunos = new Array(7)
  let medias = new Array(7)
  let maiorMedia = 0
  let maiorMediaResultado = ""
  let mediaNota
  let relatorio = "RELATÓRIO DA SALA\n"

  //Entrada de dados
  for (let i = 0; i < alunos.length; i++) {
    alunos[i] = prompt(`Insira o nome do aluno ${i+1}:`)
    medias[i] = Number(prompt("Insira a sua média:"))

    if (maiorMedia < medias[i]) { //Verificar maior média
      maiorMedia = medias[i]
      maiorMediaResultado = `aluno ${alunos[i]} com média ${(maiorMedia).toFixed(2)}`
    }
    
    relatorio += `\n\nAluno(a) ${alunos[i]} tirou média ${medias[i]}. `
    
    if (medias[i] < 7) { //Verificar média insuficiente
     mediaNota = 10 - medias[i]
     relatorio += `\nSerá necessário fazer exame final e tirar no mínimo ${mediaNota}`
    }
  }

  //Saída de dados
  alert(relatorio)
  alert(`A maior média foi do ${maiorMediaResultado}`)

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

function ex10vetor() {
  //Declaração de variáveis
  let vetor1 = new Array(10);
  let vetor2 = new Array(5);
  let vetorResultante1 = [];
  let vetorResultante2 = [];
  let somaVetor2 = 0

  let textoPar = ""
  let textoImpar = ""

  //Saída de dados
  for (let i = 0; i < 10; i++) {
    vetor1[i] = Number(prompt(`Insira o ${i+1}ª número do vetor 1.`))
  }

  for (let i = 0; i < 5; i++) {
    vetor2[i] = Number(prompt(`Insira o ${i+1}ª número do vetor 2.`))
    somaVetor2 += vetor2[i]
  }

  //Processamento de dados
  for (let i = 0; i < vetor1.length; i++) {
    if(vetor1[i] % 2 === 0) {
      vetorResultante1.push(vetor1[i] + somaVetor2)
      textoPar += `Numero ${vetor1[i]}: ${vetor1[i] + somaVetor2}\n`
    } else {
      let divisorCont =  0
      for (let j = 0; j < vetor2.length; j++) {
        if ( vetor1[i] % vetor2[j] === 0) {
          divisorCont++
        }    
      }

      vetorResultante2.push(divisorCont)
      textoImpar += `Numero ${vetor1[i]}: ${divisorCont}\n`

    }
  }

  //Saída de dados
  alert(`Cada número do vetor 1 somado com todos do vetor 2:\n${textoPar}\nQuantidade de divisores do número ímpar do vetor 1 pelo vetor 2:\n${textoImpar}`)
}

function ex11vetor() {
  //Declaração de variáveis
  let numeros = new Array(10)
  let pares = []
  let impares = []

  //Entrada de dados
  for (let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt(`Digito o ${i+1}ª número:`))

    if(numeros[i] % 2 === 0) {
      pares.push(numeros[i])
    } else {
      impares.push(numeros[i])
    }
  }

  //Saída de dados
  alert(`Números pares: ${pares}\n\nNúmeros ímpares: ${impares}`)
}

function ex12vetor() {
  //Declaração de variáveis
  let num = new Array(5)
  let soma = 0

  //Entrada de dados
  for (let i = 0; i < 5; i++) {
    num[i] = Number(prompt(`Digite o ${i+1} número:`))
    soma += num[i]
  }

  //Saída de dados
  alert(`Os números digitados foram: ${num[0]} + ${num[1]} + ${num[2]} + ${num[3]} + ${num[4]} = ${soma}`)
}

function ex13vetor() {
  //Declaração de variáveis
  let nomes = new Array(8)
  let notas = new Array(8)
  let relatorio = "RELATÓRIO\n\n"
  let somaNotas = 0
  let mediaNotas

  //Entrada de dados
  for (let i = 0; i < 8; i++) {
    nomes[i] = prompt(`Digite o nome do ${i+1}ª aluno:`)
    notas[i] = Number(prompt(`Digite a nota do aluno(a) ${nomes[i]}:`))
    somaNotas += notas[i]
    relatorio += `${nomes[i]} : ${notas[i]}\n`
  }

  //Processamento de dados
  mediaNotas = somaNotas / 8

  //Saída de dados
  alert(`${relatorio}\nMédia da Classe: ${mediaNotas.toFixed(2)}`)
}

function ex14vetor() {
  //Como não foi informada a média mínima para aprovação, será considerada como 5.
  //Declaração de variáveis
  let alunos = new Array(6)
  let nota1 = new Array(6)
  let nota2 = new Array(6)

  let relatorio = "RELATÓRIO\nALUNO / 1ªPROVA / 2ªPROVA / MÉDIA / SITUAÇÂO\n"
  let somaNotas = 0
  let mediaTotal
  let mediaAluno
  let situacao

  let aprovado = 0
  let reprovado = 0
  let aprovPorc
  let reprovPorc

  //Entrada de dados
  for (let i = 0; i < 6; i++) {
    alunos[i] = prompt(`Digite o nome do ${i+1}ª aluno:`)
    nota1[i] = Number(prompt(`Digite a primeira nota do aluno(a) ${alunos[i]}`))
    nota2[i] = Number(prompt(`Digite a segunda nota do aluno(a) ${alunos[i]}`))  
    
    //Processamento de dados
    mediaAluno = (nota1[i] + nota2[i]) / 2
    somaNotas += mediaAluno
    if (mediaAluno >= 5) {
      situacao = "APROVADO"
      aprovado++
    } else {
      situacao = "REPROVADO"
      reprovado++
    }

    relatorio += `${alunos[i]} -- ${nota1[i]} --  ${nota2[i]} -- ${mediaAluno} -- ${situacao}\n`  
  }

  mediaTotal = somaNotas / 6
  aprovPorc = (aprovado / 6) * 100
  reprovPorc = (reprovado / 6) * 100

  //Saída de dados
  alert(`${relatorio}\nMédia total da classe: ${mediaTotal.toFixed(2)}\nPorcentagam de alunos aprovados: ${aprovPorc.toFixed(2)}%\nPorcentagem de alunos reprovados: ${reprovPorc.toFixed(2)}%`)
}