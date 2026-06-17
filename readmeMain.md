# Estudos de Node.js & Paradigmas de Programação

Este repositório foi inicialmente criado para aprofundar meus estudos em **Node.js** e consolidar minha base em **JavaScript**. 

Na minha visão, entender a sintaxe pura da linguagem é fundamental. Compreender o ecossistema do JavaScript no back-end (Node.js) me dá uma consciência muito maior na hora de trabalhar simultaneamente no front-end com a lógica da página, integrando-a com HTML e CSS. No fim das contas, o mais importante é o domínio e o entendimento real da linguagem.

## 🚀 De Onde Vim e Para Onde Vou

Minha jornada prática começou pelo passo principal: aprendendo a fundo a navegação e a web através da documentação da Mozilla (MDN). Lembro que, quando era garoto e gostava das minhas "gambiarras", eu já usava o Firefox com várias extensões para fazer malabarismos nas plataformas — puramente aquela curiosidade de criança/adolescente explorando a tecnologia. Baixava softwares, mudava textos na página usando o CSS DevTools e tentava entender como a web funcionava. 

Hoje, percebo o quão inteligente é o uso dessas ferramentas, especialmente na área de **Quality Assurance (QA)**. Eu nem imaginava que o que começou como uma brincadeira de infância e o estudo daquela documentação fariam parte do meu futuro profissional.


No início da faculdade de Engenharia de Software, passamos por Algoritmos, Engenharia de Requisitos, Estrutura de Dados e Modelagem, até chegarmos a uma parte fascinante: **Paradigmas de Programação**. É aqui que você entende que não basta apenas ser um bom programador em Java, Python, C# ou .NET; o crucial é entender o propósito da tecnologia, para que ela serve e em qual arquitetura ela performa melhor. 

O conceito de comunicação é extremamente abrangente. Unindo a Engenharia de Software com a minha experiência atual com **hardware, rádio e redes wireless**, descobri que dados não são apenas informações que vão e vêm: eles se comunicam em bits, frequências eletromagnéticas e protocolos específicos para conversarem entre si.

---

## 🏗️ Estrutura do Repositório

Para manter o projeto organizado, apliquei uma **arquitetura modular e limpa**, dividida da seguinte forma:

* **`vscode/`**: Configurações de arquivos `.json` para execução de *launchers* e automação de testes.
* **`Algoritmos/`**: Concentra a base de Node.js, manipulação de variáveis, semântica e a sintaxe pura do JavaScript.
* **`ParadigmaDataDriven/`**: Espaço dedicado ao paradigma Orientado a Dados (Data-Driven). Aqui coloco em prática os conhecimentos em IA e conceitos modernos de arquitetura que vão além da Orientação a Objetos.
* **`ParadigmaFuncional/`**: Implementações focadas em imutabilidade e funções puras, garantindo que o paradigma funcional também seja praticado.
* **`test/`**: Pasta destinada aos testes da aplicação.
* **`docs/`**: Documentações de apoio (vazio momentaneamente).
* **`imagens/`**: Assets e imagens do projeto (vazio momentaneamente).

## 🛠️ Tecnologias e Ferramentas
* **Node.js** (Ambiente de execução)
* **JavaScript** (Linguagem base)
* **Jest** (`jest.config.js` para testes unitários e garantia de qualidade)

## 💡 Conexões do Mundo Real: Hardware, APIs e Coincidências Dev

Uma das coisas mais fascinantes da Engenharia de Software é descobrir como o código se materializa no mundo físico e como as ferramentas se alinham com a nossa própria jornada. Recentemente, vivenciei dois exemplos perfeitos disso:

### 🦓 O Dialeto das Impressoras Zebra (ZPL)
No meu trabalho diário com hardware e infraestrutura, deparei-me com as famosas impressoras térmicas **Zebra**. Longe de operarem com automações simples ou drivers comuns, descobri que elas possuem uma linguagem de programação de baixo nível própria: a **ZPL (Zebra Programming Language)**. 

Para fazer uma dessas máquinas imprimir uma etiqueta, o back-end precisa enviar coordenadas e comandos diretos (como `^XA ^FO50,50^A0N...^XZ`). Isso reforça o que aprendi em Paradigmas de Programação: os dados estão por toda parte, mas cada ecossistema exige o protocolo e a linguagem certa para se comunicar.

### 🦫 Conhecimentos em... Bruno? (Bruno API Client)
Em meio às buscas por vagas e requisitos de mercado para **Quality Assurance (QA)** e Engenharia de Software, encontrei uma vaga exigindo *"conhecimentos em Bruno"*. O que parecia uma brincadeira com o meu nome, na verdade, apresentou-me a uma das ferramentas de testes de API mais modernas da atualidade: o **Bruno** (`usebruno`).

O Bruno é um cliente de API em código aberto (alternativa ao Postman e Insomnia) que armazena suas coleções de requisições de forma puramente **Orientada a Dados (Data-Driven)**, usando arquivos de texto plano (`.bru`). Isso permite que toda a suite de testes de integração e rotas do back-end (como os scripts em Node.js) seja salva diretamente dentro do repositório do Git. Uma ferramenta essencial para QA que, por ironia do destino, carrega meu nome de batismo.