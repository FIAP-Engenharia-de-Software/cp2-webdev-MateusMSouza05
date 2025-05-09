// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  calcIMC = peso / (altura * altura)

  if (altura <= 0 || isNaN(altura) || isNaN(peso)) {
    return "Erro"
  } else {
    if (calcIMC < 18.5 && calcIMC > 0 ) {
      return "Abaixo do peso"
    } else if (calcIMC < 24.9) {
      return "Peso normal"
    } else if (calcIMC < 29.9) {
      return "Sobrepeso"
    } else if (calcIMC > 30) {
      return "Obesidade"
    }
  }
  
}

// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };