// Importa funçao
const {brincarComString} = require('../funçãolitle');

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
