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
