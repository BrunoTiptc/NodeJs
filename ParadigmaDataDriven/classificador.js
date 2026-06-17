/*npm init -y
npm install natural
*/

const natural = require('natural');
const classifier = new natural.BayesClassifier();

//Treinamento do classificador
classifier.addDocument('O filme foi incrível', 'positivo');
classifier.addDocument('Eu adorei o filme', 'positivo');
classifier.addDocument('O filme foi terrível', 'negativo');
classifier.addDocument('Eu odiei o filme', 'negativo');

//Treinamento completo
classifier.train();

//Para o classificador funcionar bem precisamos de mais exemplos, mas para fins de demonstração, isso é suficiente.
//Classificando um novo texto

const texto = 'Não foi terrível, mas também não foi bom';
const resultado = classifier.classify(texto);
console.log(`O sentimento do texto "${texto}" é: ${resultado}`);