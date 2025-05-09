// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  if (nota >= 6 && nota <= 10) {
    return "Aprovado"
<<<<<<< HEAD
  } else if (nota < 6 && nota >= 0) {
    return "Reprovado"
  } else{
=======
  }
  else if (nota < 6 ) {
    return "Reprovado"
  }
  else {
>>>>>>> 756193860703ac07bc93a07cbeff192cdf1d7ce4
    return "Nota inválida"
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };