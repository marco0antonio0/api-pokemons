const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Minha API Express está funcionando!");
});

app.listen(port, () => {
  console.log(`A API está escutando na porta ${port}`);
});
