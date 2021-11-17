function carros() {
    let vetor = []
    let matriz = []
    entradaDados(vetor, matriz)
    calculaTotalVendas(vetor, matriz)
}

function entradaDados(vetor, matriz) {
    for(let i = 0; i < 4; i++) {
        let objeto = {
            codigo: prompt(`Informe o código do carro: `),
            marca: prompt(`Informe o modelo do carro: `),
            modelo: prompt(`Informe o modelo do carro: `),
            totVendas: 0
        }
        vetor[i] = objeto
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt(`Informe a quantidade de vendas do trimestre ${j+1}:`))  
        }
        
    }
}

function calculaTotalVendas(vetor, matriz) {
    for(let i = 0; i < 4; i++) { // para cada carro
        let soma = 0
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j] 
        }
        vetor[i].totVendas = soma
        alert(`O total de vendas do carro ${vetor[i].codigo} é de: ${soma}`)
    }
}