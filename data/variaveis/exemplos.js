if (true){
    var nome = "Bruno";
    let sobrenome = "César";
    const idade = 30;
    let string = "Aqui dentro do bloco abaixo e fora do bloco \n ";

    console.log(nome,sobrenome,idade,string); // Bruno César 30 Aqui dentro do bloco abaixo e fora do bloco
}
    console.log("fora do bloco variavel vazou (var nome)", nome);

    /**
 * =========================================================================
 *   GUIA JS RAIZ: CONST, LET E VAR (DIFERENÇAS DE ESCOPO E MEMÓRIA)
 * =========================================================================
 * 
 * 1. ESCOPO (Onde a variável está visível):
 *    - 'var': Tem escopo global/de função. Ele NÃO respeita blocos como if, for, while.
 *             Se criado dentro de um if, ele "vaza" para o resto do código.
 *    - 'let' e 'const': Têm escopo de bloco { }. Eles ficam presos e protegidos
 *                       dentro das chaves onde foram criados. Fora delas, morrem.
 * 
 * 2. REDECLARAÇÃO (Criar de novo com o mesmo nome):
 *    - 'var': Aceita ser recriado (Ex: var x = 1; var x = 2;). Isso gera bugs terríveis!
 *    - 'let' e 'const': Proíbem redeclaração no mesmo escopo. O JS dá erro na hora.
 * 
 * 3. REATRIBUIÇÃO (Mudar o valor da variável depois de criada):
 *    - 'var' e 'let': Permitem mudar o valor livremente ao longo do código.
 *    - 'const': É uma CONSTANTE. Uma vez definido o valor, você não pode mudá-lo.
 * 
 * 4. A RECOLEÇÃO/EXCEÇÃO DE ARRAYS E OBJETOS COM 'CONST':
 *    - Se você criar um Objeto ou Array com 'const', você NÃO PODE reatribuir toda
 *      a estrutura (mudar de objeto para string, por exemplo).
 *    - Porém, você PODE alterar as propriedades internas (mudar um valor lá dentro),
 *      porque o endereço de memória principal continua sendo o mesmo (mutação).
 * 
 * =========================================================================
 */


