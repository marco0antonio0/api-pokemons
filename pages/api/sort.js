import { pokemons_db } from "../../db/dados";

function gerarNumeroInteiroAleatorio(min, max) {
  // Use Math.floor para arredondar para baixo o resultado
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default function handler(req, res) {
  //============================================================
  // cors aplicado
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, OPTIONS, PATCH, DELETE, POST, PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  var numeroAleatorio = gerarNumeroInteiroAleatorio(0, pokemons_db.length);

  //============================================================
  res.status(200).json({
    message: "Esta é uma rota de API de sorteio de pokemon",
    status: true,
    data: pokemons_db[numeroAleatorio],
  });
}
