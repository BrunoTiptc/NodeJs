# Anotações da linguagem JS

No javaScript, os tipos de dados e bem diferente do JAVA. Enquanto no java voce tem intm float, double, long... no JS o motor simplifica quase tudo.

Tabela de dados:    Sempre antes de começar uma nova linguagem de programação, gosto de ler a documentaçao e os tipos de dados e seus tamanhos.

1. Number (O "faz tudo")Diferente de outras linguagens, o JS não separa números inteiros de decimais. Tudo é Number.Quanto carrega: 64 bits (padrão IEEE 754).O que aceita: Inteiros (10), decimais (10.5), e valores especiais como Infinity e NaN (Not a Number).Exemplo: let idade = 25; ou let preco = 19.99;

2. String (Texto)Sequências de caracteres usadas para texto.Quanto carrega: 16 bits por caractere (UTF-16). O limite depende da memória do PC, mas na prática é "gigante".Dica: Você pode usar aspas simples ', duplas " ou a Crase ` (Template Strings, que permite quebrar linha e colocar variáveis dentro).

3. BooleanO clássico da lógica.Valores: true ou false.Uso: Essencial para os if e as tomadas de decisão no código.

4. Undefined vs Null (O Fantasma e o Vazio)Isso confunde quem vem do Python/Java:Undefined: A variável foi declarada, mas ninguém deu valor pra ela ainda. É o estado "natural" do JS.Null: Você, programador, diz explicitamente que aquela variável está vazia.

5. BigInt (Para números "monstruosos")Se o Number de 64 bits não aguentar o tranco (números maiores que 9 quatrilhões), usamos o BigInt.Como usar: Basta colocar um n no final do número: let muitoGrande = 9007199254740991n;