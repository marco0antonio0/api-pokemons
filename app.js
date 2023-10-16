const express = require("express");
const app = express();
const port = 3000; // A porta em que a aplicação Express vai rodar

app.get("/api/hello", (req, res) => {
  res.json({ message: "Olá do servidor Express!" });
});

app.listen(port, () => {
  console.log(`Servidor Express rodando na porta ${port}`);
});
