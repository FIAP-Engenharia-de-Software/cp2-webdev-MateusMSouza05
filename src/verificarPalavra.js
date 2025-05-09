// ## 2. Verificador de Comprimento e Presença de Palavras **(1 ponto)**

// **Enunciado:**

// Implemente a função verificarPalavra, que receba uma frase, e uma palavra de busca e:

// - Retorna `"A frase é muito curta"` se o comprimento da frase for menor que 5;
// - Retorna `"A frase contém a palavra de busca"` se a `palavraBusca` estiver contida dentro de frase (ignorando maiúsculas e minúsculas);
// - Retorna `"A frase não contém a palavra de busca"` caso contrário;
// - Remove espaços extras no início e no final da frase antes de realizar a verificação.

function verificarPalavra(frase, palavraBusca) {
<<<<<<< HEAD
  if(frase.length < 5) {
    return "A frase é muito curta"
  } else if(palavraBusca.toLowerCase() == palavraBusca ){
    return "A frase contém a palavra de busca"
  } else if (palavraBusca.toLowerCase() != palavraBusca.toLowerCase()) {
    "A frase não contém a palavra de busca"
  }
=======
  if (frase.lenght < 5) {
    return "A frase contém a palavra de busca"
  }
  if (frase )
>>>>>>> 756193860703ac07bc93a07cbeff192cdf1d7ce4
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { verificarPalavra };