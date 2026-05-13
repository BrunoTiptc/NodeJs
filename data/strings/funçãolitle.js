function brincarComStrings(str) {
    console.log(" A string é: " + str);
    console.log(str.toUpperCase()); // Letra maiúscula
    console.log(str.toLowerCase()); // Letra minúscula
    console.log(str.split(" ")); // Dividir a string em arrays usando o espaço como separador

    // Guarda o resultado em uma variavel para poder retornar depois
    const resultadoReplace = str.replace("Bruno", "César");
    console.log(resultadoReplace);

    console.log(str.includes("César")); // Verificar se a string conté uma palavra específica
    console.log(str.indexOf("Cesar")); // Obter o índice da primeira ocorrência de uma palavra específica
    console.log(str.slice(0, 5)); // Pegar uma parte da string usando índices (neste caso, os primeiros 5 caracteres)

    // Aqui euto mandando a funçao pro QA 
    return resultadoReplace;
}

// Para o jest conseguir importar a função, sempre tem que exportar ela.
module.exports = {brincarComStrings};


brincarComStrings("Bruno César");
brincarComStrings("JavaScript é divertido!");

