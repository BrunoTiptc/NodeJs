# Dentro da sua pasta do projeto, inicialize o Node
npm init -y

# Instale a biblioteca de linguagem natural
npm install natural

Trecho tirado do curso ibm watson ia fundations

O back-end de um chatbot faz o trabalho árduo de entender e responder

Suponha que parte do trabalho de um chatbot seja ajudá-lo quando você perder ou esquecer sua senha. Você pode inserir “Como reconfigurar minha senha”, o que seria fácil para o chatbot manipular. Para descrever essa ação, um programador de chatbot pode pensar em termos como: 

IF pergunta = “Como reconfigurar minha senha”
THEN resposta = “Agui está como criar uma nova senha”
Mas nem sempre os humanos são fáceis de entender. Eles podem perguntar ou digitar: 

“Como não consigo entrar na minha conta?!” 
“Esqueci a p@#$ da senha!”
“Diz que minha senha está errada.” 
“esquec senh” 
Isso informa que uma resposta do chatbot (“É assim que se cria uma nova senha”) pode ser acionada por um grande número de consultas do usuário (incluindo todas as listadas e muito mais). 

Esse é um grande trabalho para os algoritmos chamados classificadores. Os classificadores podem mapear muitas maneiras diferentes de fazer uma pergunta para um conjunto muito pequeno de respostas. Quão pequeno? Alguns chatbots de varejo respondem a centenas de perguntas diferentes com apenas cinco ou seis respostas possíveis. As perguntas que os chatbots não conseguem responder são enviadas para o atendimento ao cliente. 