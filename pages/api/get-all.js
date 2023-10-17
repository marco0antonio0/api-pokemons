import { pokemons_db } from "../../db/dados";

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
  //============================================================
  res
    .status(200)
    .json({ message: "Esta é uma rota de API get-all", data: pokemons_db });
}
