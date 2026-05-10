function brincarComStrings(str) {
    return {
    texto : " A string é: " + str,
    maiuscula : str.toUpperCase(), // Letra maiúscula
    minuscula : str.toLowerCase(), // Letra minúscula
    dividida : str.split(" "), // Dividir a string em arrays usando o espaço como separador
    substituida : str.replace("Bruno", "César"), // Substituir uma parte da string por outra
    contem : str.includes("César"), // Verificar se a string conté uma palavra específica
    indice : str.indexOf("César") // Obter o índice da primeira ocorrência de uma palavra específica
    };
}

console.log(brincarComStrings("Bruno César"));
console.log(brincarComStrings("JavaScript é divertido!"));

