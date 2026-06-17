// jest.config.js
module.exports = {
  testMatch: ["**/__tests__/**/*.test.js"], // só roda arquivos .test.js dentro de __tests__
  testEnvironment: "node",                  // ambiente Node puro
  silent: true                              // esconde console.log nos testes
};
