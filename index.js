const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000; // Porta na qual a API irá escutar

// Rota de exemplo
app.get("/", (req, res) => {
  res.send("Bem-vindo à minha API simples!");
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`A API está rodando na porta ${process.env.PORT || 3000}`);
});
