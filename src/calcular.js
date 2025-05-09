// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
<<<<<<< HEAD
  let resultado

  if (operador === "+"){
    resultado = num1 + num2;
  } else if (operador === "-") {
    resultado = num1 - num2;
  } else if (operador === "*") {
    resultado = num1 * num2;
  } else if (operador === "/") {
    resultado = num1 / num2;
  } else if (num1 == NaN || num2 == NaN ) {
    return "Erro: parâmetros inválidos"
  } else {
    return "Erro: operação inválida"
  } 

  




  return resultado
}

    // switch (operador) {
    //   case "+":
    //     resultado = num1 + num2
    //     break;
    //   case "-":
    //     resultado = num1 - num2
    //     break;
    //   case "*":
    //     resultado = num1 * num2
    //     break;
    //   case "/":
    //     resultado = num1 / num2
    //     break;
    //   case   
    // }
=======
  if (a || b == NaN) {
    return "Erro: parâmetros inválidos"
  }
  if (a || b == 0) {
    return "Erro: divisão por zero"
  }
  if (a || b == "") {
    return "Erro: operação inválida"
  }
}



>>>>>>> 756193860703ac07bc93a07cbeff192cdf1d7ce4
//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };