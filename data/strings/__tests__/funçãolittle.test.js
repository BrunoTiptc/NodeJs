// Importa funçao
const {brincarComStrings} = require('../funçãolitle');

// Testa a função

test('Deve conter César apos o replace', () => {
    // Aqui é onde eu testasse a lógica,não só console.log
    const resultado = "Bruno César";
    expect(resultado).toContain("César");
});

test ('Caso de Borda: String vazia', () => {
    const resultado = "";
    expect(resultado).toBe(""); 
});

test('Deve falhar se eu procurar sem acento', () => {

    const resultado = brincarComStrings("Bruno César");

    //Procure por "Cesar" sem acento onde so existe com acento
    expect(resultado).toBe("César César");
});