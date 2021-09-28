function exe01() {
  //Entrada de dados
  let notaUm = Number(document.getElementById('nota-1').value);
  let notaDois = Number(document.getElementById('nota-2').value);
  let notaTres = Number(document.getElementById('nota-3').value);
  let notaQuatro = Number(document.getElementById('nota-4').value);

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
  let numeroTres = Number(document.getElementById('numero-3').value)

  //Processamento de dados
  if (numeroUm === numeroDois && numeroDois === numeroTres) {
    document.getElementById(
      'resultado'
    ).innerHTML = `Todos os números são iguais. Insira novamente.`
  } else if (numeroUm > numeroDois && numeroUm > numeroTres) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O maior número é o: ${numeroUm}`
  } else if (numeroDois > numeroTres) {
    document.getElementById(
      'resultado'
    ).innerHTML = `O maior número é o: ${numeroDois}`
  } else {
    document.getElementById(
      'resultado'
    ).innerHTML = `O maior número é o: ${numeroTres}`
  }
}

function exe05() {
  //Entrada de dados
  let operacao = Number(document.getElementById('option').value)
  let numeroUm = Number(document.getElementById('numero-1').value)
  let numeroDois = Number(document.getElementById('numero-2').value)

  //Operações
  let resultado

  switch (operacao) {
    case 1:
      resultado = (numeroUm + numeroDois) / 2
      break
    case 2:
      if (numeroUm > numeroDois) {
        resultado = numeroUm - numeroDois
      } else if (numeroDois > numeroUm) {
        resultado = numeroDois - numeroUm
      } else {
        resultado = 'Valores inválidos'
      }
      break
    case 3:
      resultado = numeroUm * numeroDois
      break
    case 4:
      if (numeroDois != 0) {
        resultado = numeroUm / numeroDois
      } else {
        resultado = 'Divisão por zero'
      }

      break
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
  let resultado // Ela serve daqui para baixo

  //Math.sqrt() = RAIZ QUADRADA
  //Math.cbrt() = RAIZ CÚBICA

  switch (operacao) {
    case 1:
      resultado = `O resultado da operação: ${Math.pow(numeroUm, numeroDois)}`
      break
    case 2:
      resultado = `O resultado da operação: ${Math.sqrt(numeroUm).toFixed(
        2
      )} e ${Math.sqrt(numeroDois).toFixed(2)}`
      break
    case 3:
      resultado = `O resultado da operação: ${Math.cbrt(numeroUm).toFixed(
        2
      )} e ${Math.cbrt(numeroDois).toFixed(2)}`
      break
    default:
      resultado = 'Valor Inválido'
  }

  //Saída de dados
  document.getElementById('resultado').innerHTML = resultado
}

function exe07() {
  let sal = Number(document.getElementById('salario').value)

  //Processamento de dados
  let msg
  let reajuste
  if (sal >= 500) {
    msg = 'O salário não tem direito a reajuste'
  } else if (sal < 500) {
    let valorSal = sal * 1.3
    reajuste = sal * 0.3
    msg =
      'O salario tem direito a reajuste de: R$' +
      valorSal +
      ', aumento de R$' +
      reajuste
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

function exe09() {
  //Entrada de dados
  let saldoMedio = Number(document.getElementById('saldo-medio').value)

  //Processamento de dados
  let credito

  if (saldoMedio > 400) {
    credito =
      'Crédito com percentual de 30%: R$' + (saldoMedio * 0.3).toFixed(2)
  } else if (saldoMedio > 300 && saldoMedio <= 400) {
    credito =
      'Crédito com percentual de 25%: R$' + (saldoMedio * 0.25).toFixed(2)
  } else if (saldoMedio > 200 && saldoMedio <= 300) {
    credito =
      'Crédito com percentual de 20%: R$' + (saldoMedio * 0.2).toFixed(2)
  } else if (saldoMedio <= 200) {
    credito =
      'Crédito com percentual de 10%: R$' + (saldoMedio * 0.1).toFixed(2)
  }
  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O saldo médio é de: R$${saldoMedio.toFixed(
    2
  )} </br> ${credito}`
}

function exe10() {
  //Entrada de dados
  let precoFabrica = Number(document.getElementById('preco-fabrica').value)

  //Processamento de dados
  let porcDistribuidor
  let porcImpostos
  let valorFinal

  if (precoFabrica <= 12000) {
    porcDistribuidor = precoFabrica * 0.05
    porcImpostos = 0
  } else if (precoFabrica > 12000 && precoFabrica <= 25000) {
    porcDistribuidor = precoFabrica * 0.1
    porcImpostos = precoFabrica * 0.15
  } else if (precoFabrica > 25000) {
    porcDistribuidor = precoFabrica * 0.15
    porcImpostos = precoFabrica * 0.2
  }

  valorFinal = precoFabrica + porcDistribuidor + porcImpostos

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O valor final do automóvel é de: R$${valorFinal.toFixed(
    2
  )} </br> Valor do Distribuidor: R$${porcDistribuidor.toFixed(
    2
  )} </br> Impostos: R$${porcImpostos.toFixed(2)}`
}

function exe11() {
  //Entradas de dados
  let sal = Number(document.getElementById('salario').value)

  //Processamento de dados
  let reajusteSal
  let aumento

  if (sal <= 300) {
    aumento = (sal * 0.15).toFixed(2)
    reajusteSal = sal * 1.15
  } else if (sal > 300 && sal < 600) {
    aumento = (sal * 0.1).toFixed(2)
    reajusteSal = sal * 1.1
  } else if (sal >= 600 && sal <= 900) {
    aumento = (sal * 0.05).toFixed(2)
    reajusteSal = sal * 1.05
  } else if (sal > 900) {
    aumento = 0 + ' | Não haverá aumento salarial.'
    reajusteSal = sal
  }

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O aumento salarial será de: R$${aumento} </br> Salário Final: R$${reajusteSal.toFixed(
    2
  )}`
}

function exe12() {
  //Entradas de dados
  let sal = Number(document.getElementById('salario').value)

  //Processamento de dados
  let reajusteSal
  let aumento

  if (sal <= 350) {
    imposto = (sal + 100) * 0.07
    reajusteSal = sal - imposto + 100
  } else if (sal > 350 && sal < 600) {
    imposto = (sal + 75) * 0.07
    reajusteSal = sal + 75 - imposto
  } else if (sal >= 600 && sal <= 900) {
    imposto = (sal + 50) * 0.07
    reajusteSal = sal + 50 - imposto
  } else if (sal > 900) {
    imposto = (sal + 35) * 0.07
    reajusteSal = sal + 35 - imposto
  }

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O imposto sobre o salário será de: R$${imposto.toFixed(
    2
  )} </br> Salário Final: R$${reajusteSal.toFixed(2)}`
}

let a 

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}
