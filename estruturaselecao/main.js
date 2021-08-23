function exe01() {
  //Entrada de dados
  let notaUm = Number(document.getElementById('nota-1').value)
  let notaDois = Number(document.getElementById('nota-2').value)
  let notaTres = Number(document.getElementById('nota-3').value)
  let notaQuatro = Number(document.getElementById('nota-4').value)

  //Processamento de dados
  let mediaAritmetica = (notaUm + notaDois + notaTres + notaQuatro) / 4

  if (mediaAritmetica >= 7) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O aluno foi aprovado com média igual a: ${mediaAritmetica}`
  } else {
    document.getElementById(
      'resultado'
    ).innerHTML = `O aluno foi reprovado com média igual a: ${mediaAritmetica}`
  }
}

function exe02() {
  //Entrada de dados
  let notaUm = Number(document.getElementById('nota-1').value)
  let notaDois = Number(document.getElementById('nota-2').value)

  //Processamento de dados
  let mediaAritmetica = (notaUm + notaDois) / 2

  if (mediaAritmetica <= 3) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O aluno foi reprovado com média: ${mediaAritmetica}`
  } else if (mediaAritmetica > 3 && mediaAritmetica <= 7) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O aluno deve realizar exame.Média: ${mediaAritmetica}`
  } else if (mediaAritmetica > 7 && mediaAritmetica <= 10) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O aluno foi aprovado com média: ${mediaAritmetica}`
  } else {
    document.getElementById('resultado').innerHTML = `As notas são inválidas`
  }
}

function exe03() {
  //Entrada de dados
  let numeroUm = Number(document.getElementById('numero-1').value)
  let numeroDois = Number(document.getElementById('numero-2').value)

  //Processamento de dados
  if (numeroUm < numeroDois) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O menor número é o primeiro: ${numeroUm}`
  } else if (numeroUm > numeroDois) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O menor número é o segundo: ${numeroDois}`
  } else if (numeroDois === numeroDois) {
    document.getElementById('resultado').innerHTML = `Os números são iguais`
  }
}

function exe04() {
  //Entrada de dados
  let numeroUm = Number(document.getElementById('numero-1').value)
  let numeroDois = Number(document.getElementById('numero-2').value)

  //Processamento de dados
  if (numeroUm > numeroDois) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O maior número é o primeiro: ${numeroUm}`
  } else if (numeroUm < numeroDois) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O maior número é o segundo: ${numeroDois}`
  } else if (numeroDois === numeroDois) {
    document.getElementById('resultado').innerHTML = `Os números são iguais`
  }
}

function exe05() {
  //Entrada de dados
  let operacao = Number(document.getElementById('option').value)
  let numeroUm = Number(document.getElementById('numero-1').value)
  let numeroDois = Number(document.getElementById('numero-2').value)

  //Operações
  let resultado

  if (operacao === 1) {
    resultado = (numeroUm + numeroDois) / 2
  } else if (operacao === 2) {
    if (numeroUm > numeroDois) {
      resultado = numeroUm - numeroDois
    } else if (numeroDois > numeroUm) {
      resultado = numeroDois - numeroUm
    } else {
      resultado = 'Valores inválidos'
    }
  } else if (operacao === 3) {
    resultado = numeroUm * numeroDois
  } else if (operacao === 4) {
    resultado = numeroUm / numeroDois
  }

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O resultado da operação: ${resultado}`
}

function exe06() {
  //Entrada de dados
  let operacao = Number(document.getElementById('option').value)
  let numeroUm = Number(document.getElementById('numero-1').value)
  let numeroDois = Number(document.getElementById('numero-2').value)

  //Processamento de dados
  let resultado0
  let resultado1
  let resultado2

  if (operacao === 1) {
    resultado0 = numeroUm ** numeroDois
    document.getElementById(
      'resultado'
    ).innerHTML = `O resultado da operação: ${resultado0}`
  } else if (operacao === 2) {
    resultado1 = numeroUm ** (1 / 2)
    resultado2 = numeroDois ** (1 / 2)
  } else if (operacao === 3) {
    resultado1 = numeroUm ** (1 / 3)
    resultado2 = numeroDois ** (1 / 3)
  }

  //Saída de dados
  if (operacao === 2 || operacao === 3) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O resultado da operação: ${resultado1.toFixed(
      2
    )} e ${resultado2.toFixed(2)}`
  }
}

function exe07() {
  let sal = Number(document.getElementById('salario').value)

  //Processamento de dados
  let msg
  if (sal >= 500) {
    msg = 'O salário não tem direito a reajuste'
  } else if (sal < 500) {
    let valorSal = sal * 1.3
    msg = 'O salario tem direito a reajuste de: R$' + valorSal
  }

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `Resultado da análise: ${msg}.`
}

function exe08() {
  //Entrada de dados
  let sal = Number(document.getElementById('salario').value)

  //Processamento de dados
  let reajuste

  if (sal <= 300) {
    reajuste = sal * 1.35
  } else if (sal > 300) {
    reajuste = sal * 1.15
  }

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O reajuste salarial é de: ${reajuste}`
}
