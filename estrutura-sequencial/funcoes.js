function exe1() {
  let first = document.getElementById('first-number').value
  let second = document.getElementById('second-number').value

  //Processamento de dados
  let subtracao = first - second

  //saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O resultado da subtração: ${subtracao}`
}

function exe2() {
  let first = document.getElementById('first-number').value
  let second = document.getElementById('second-number').value
  let third = document.getElementById('third-number').value

  //Processamento de dados
  let multiplicacao = first * second * third

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O resultado é: ${multiplicacao}`
}

function exe3() {
  //Entrada de dados
  let first = Number(document.getElementById('first-number').value)
  let second = Number(document.getElementById('second-number').value)

  //Estrutura de seleção
  if (second == 0) {
    // compara com 0
    document.getElementById('resultado').innerHTML =
      'Impossível dividir por zero'
  } else {
    let divisao = first / second
    document.getElementById('resultado').innerHTML = `O resultado é: ${divisao}`
  }
}

function exe4() {
  let first = Number(document.getElementById('first-number').value)
  let second = Number(document.getElementById('second-number').value)

  //Processamento de dados
  let mediaPonderada = (first * 2 + second * 3) / 5

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O resultado é: ${mediaPonderada}`
}

function exe5() {
  let first = Number(document.getElementById('first-number').value)

  //Processamento de dados
  let precoDesconto = first * 0.9

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O resultado é: ${precoDesconto.toFixed(2)}`
}

function exe6() {
  let first = Number(document.getElementById('first-number').value)
  let second = Number(document.getElementById('second-number').value)

  //Processamento de dados
  let comissao = second * 0.04
  let total = first + comissao

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O salário fixo é: ${first} / A comissão é de: ${comissao}/ O salário total: ${total}`
}

function exe7() {
  let first = Number(document.getElementById('first-number').value)

  //Processamento de dados
  let engordar = first * 1.15
  let emagrecer = first * 0.8

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `Peso se engordar 15% de sua massa: ${engordar.toFixed(
    2
  )}Kg / Peso se emegrecer 20% de sua massa: ${emagrecer.toFixed(2)}Kg`
}

function exe8() {
  let pesoKg = Number(document.getElementById('weight').value)

  //Processamento de dados
  let pesoGrama = pesoKg * 100

  //Saída de dados
  document.getElementById(
    'result'
  ).innerHTML = `O peso em grama é de: ${pesoGrama}g`
}

function exe9() {
  let firstBase = Number(document.getElementById('small-Base').value)
  let secondBase = Number(document.getElementById('big-Base').value)
  let numHeight = Number(document.getElementById('height-Base').value)

  //Processamento de dados
  let areaTrapezio = ((firstBase + secondBase) * numHeight) / 2

  //Saída de dados
  document.getElementById(
    'result'
  ).innerHTML = `A área do trapézio é de: ${areaTrapezio}m²`
}

function exe10() {
  let sideOne = Number(document.getElementById('first-side').value)
  let sideTwo = Number(document.getElementById('second-side').value)

  //Processamento de dados
  let areaSquare = sideOne * sideTwo

  //Saída de dados
  document.getElementById(
    'result'
  ).innerHTML = `A área do quadrado é de: ${areaSquare}m²`
}

function exe11() {
  let sideOne = Number(document.getElementById('first-side').value)
  let sideTwo = Number(document.getElementById('second-side').value)

  //Processamento de dados
  let areaLosango = (sideOne * sideTwo) / 2

  //Saída de dados
  document.getElementById(
    'result'
  ).innerHTML = `A área do losango é de: ${areaLosango}m²`
}

function exe12() {
  let salMin = Number(document.getElementById('salMinimo').value)
  let salColaborador = Number(document.getElementById('salFuncionario').value)

  let salTotal = Math.floor(salColaborador / salMin)

  document.getElementById(
    'result'
  ).innerHTML = `O funcionário recebe ${salTotal} salário(s) mínimo(s).`
}

function exe13() {
  //Entrada de dados
  let numTabuada = Number(document.getElementById('tabuada').value)

  //Processamento de dados e saída
  for (passo = 0; passo <= 10; passo++) {
    let multiplicacao = numTabuada * passo
    if (passo == 0) {
      document.getElementById(
        'resultado'
      ).innerHTML = `${numTabuada} X ${passo} = ${multiplicacao} <br/>`
    } else {
      document.getElementById(
        'resultado'
      ).innerHTML += `${numTabuada} X ${passo} = ${multiplicacao} <br/>`
    }
  }
}

function exe14() {
  //Entrada de dados
  let num = Number(document.getElementById('idade').value)

  //Processamento de dados
  let idadeAnos = 2021 - num
  let idadeMeses = idadeAnos * 12
  let idadeDias = idadeAnos * 365
  let idadeSemanas = idadeAnos * 7

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `Sua idade é: ${idadeAnos} anos <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `Sua idade é: ${idadeMeses} meses <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `Sua idade é: ${idadeDias} dias <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `Sua idade é: ${idadeSemanas} semanas <br/>`
}

function exe15() {
  //Entrada de dados
  let sal = Number(document.getElementById('salario').value)
  let contaUm = Number(document.getElementById('cont-um').value)
  let contaDois = Number(document.getElementById('cont-dois').value)

  //Processamento de dados
  contaUm *= 1.02
  contaDois *= 1.02
  let salFinal = sal - (contaUm + contaDois)

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O salário final subtraindo o valor das contas com atraso(2%): R$ ${salFinal} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `O valor da primeira conta atrasada: R$${contaUm} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `O valor da segunda conta atrasada: R$${contaDois} <br/>`
}

function exe16() {
  let catetoUm = Number(document.getElementById('cat-um').value)
  let catetoDois = Number(document.getElementById('cat-dois').value)

  //Processamento de dados
  let hipotenusa = (catetoUm ** 2 + catetoDois ** 2) ** (1 / 2)

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O valor da hipotenusa é: ${hipotenusa}`
}

function exe17() {
  //Entrada de dados
  let valorRaio = Number(document.getElementById('raio').value)

  //Processamento de dados
  let comprimEsfera = 2 * Math.PI * valorRaio
  let areaEsfera = Math.PI * valorRaio ** 2
  let volumeEsfera = (4 / 3) * Math.PI * valorRaio ** 3

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O valor do comprimento da esfera: ${comprimEsfera} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `O valor da área da esfera: ${areaEsfera} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `O valor do volume da esfera: ${volumeEsfera} <br/>`
}

function exe18() {
  // Entrada de dados
  let tempCelsius = Number(document.getElementById('celsius').value)

  // Processamento de dados
  let tempFahrenheit = tempCelsius * 1.8 + 32

  // Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `A temperatura em Fahrenheit: ${tempFahrenheit.toFixed(1)}°F`
}

function exe19() {
  //Entrada de dados
  let ladoUm = Number(document.getElementById('lado1').value)
  let ladoDois = Number(document.getElementById('lado2').value)

  //Processamento de dados
  let areaComodo = parseInt(ladoUm * ladoDois)
  let consumoW = areaComodo * 18

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `A área do cômodo ${areaComodo}m² <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `O consumo  área do cômodo ${consumoW}W <br/>`
}

function exe20() {
  //Entrada de dados
  let angulo = Number(document.getElementById('angulo').value)
  let distancia = Number(document.getElementById('distancia').value)

  //Processamento
  let hipotenusa = distancia / Math.cos(angulo)

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `O valor da hipotenusa é: ${hipotenusa.toFixed(2)}`
}

function exe21() {
  // Entrada de dados
  let horasTrabalhadas = Number(document.getElementById('horas').value)

  let salMinimo = Number(document.getElementById('salario').value)

  let horasExtras = Number(document.getElementById('horas-extras').value)

  // Processamento de dados
  let valorHora = (salMinimo * 1) / 8
  let valorHoraExtra = (salMinimo * 1) / 4
  let salBruto = horasTrabalhadas * valorHora
  let receberHoraExtra = horasExtras * valorHoraExtra
  let salTotal = salBruto + receberHoraExtra

  //Saída de dados
  document.getElementById(
    'resultado'
  ).innerHTML = `Valor hora trabalhada: R$ ${valorHora} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `Valor hora extra trabalhada: R$ ${valorHoraExtra} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `Salário Bruto: R$ ${salBruto} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `A receber horas extras: R$ ${receberHoraExtra} <br/>`

  document.getElementById(
    'resultado'
  ).innerHTML += `Salário total a receber: R$ ${salTotal} <br/>`
}
