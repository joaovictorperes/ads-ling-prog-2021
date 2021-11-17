function principal(){
    let vetor = [] // declaração do vetor
    let matriz = [] //declaração da matriz
    entradaDados(vetor, matriz)
    calculaMediaAlunos(vetor, matriz) // calcula e mostra média de cada aluno
    calculaMediaBimestre(matriz)
}

function entradaDados(vetor, matriz) { 
    for (let i = 0; i < 4; i++) {
        let objeto = {
            ra: Number(prompt(`Informe o RA do ${i+1}º aluno: `)),
            nome: prompt(`informe o nome do ${i+1}º aluno: `),
            media: 0
        }
        vetor[i] = objeto //insere o objeto no vetor
        matriz[i] = [] // declara vetor dentro da matriz
        
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = Number(prompt(`Digite a nota do ${j+1}º Bimestre:`))
        }
    }
}

function calculaMediaAlunos(vetor, matriz) {
    for (let i = 0; i < 4; i++) {
        let soma = 0
        for (let j = 0; j < 4; j++) {
            soma += matriz[i][j] 
        }
        alert(`A média do(a) aluno(a) ${vetor[i].nome} é de ${soma/4}`)
        // alterar o aluno colocando sua média
        vetor[i].media = soma / 4
    }  
}

function calculaMediaBimestre(matriz) {
    for (let i = 0; i < 4; i++) { //para cada bimestre
        let somaBimestre = 0 // cria a soma das notas por bimestre
        for (let j = 0; j < 4; j++) { // para cada aluno
            somaBimestre += matriz[j][i]
        }
        alert(`A média do Bimestre ${i+1} é de ${somaBimestre/4}`) // 4 alunos
    }
}