function brincarComStrings(str) {
    console.log(" A string é: " + str);
    console.log(str.toUpperCase()); // Letra maiúscula
    console.log(str.toLowerCase()); // Letra minúscula
    console.log(str.split(" ")); // Dividir a string em arrays usando o espaço como separador
    console.log(str.replace("Bruno", "César")); // Substituir uma parte da string por outra
    console.log(str.includes("César")); // Verificar se a string conté uma palavra específica
    console.log(str.indexOf("César")); // Obter o índice da primeira ocorrência de uma palavra específica
    console.log(str.slice(0, 5)); // Pegar uma parte da string usando índices (neste caso, os primeiros 5 caracteres)

}

brincarComStrings("Bruno César");
brincarComStrings("JavaScript é divertido!");

