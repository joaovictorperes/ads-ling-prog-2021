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