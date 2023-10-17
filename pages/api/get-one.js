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
  const { id } = req.query;
  if (id) {
    if (id < pokemons_db.length) {
      res.status(200).json({
        message: "Esta é uma rota de API de get-one",
        status: true,
        data: pokemons_db[id],
      });
    } else {
      res.status(400).json({
        message: "id solicitado fora do range da lista",
        status: false,
        data: [],
      });
    }
  } else {
    res.status(400).json({
      message: "id não informado ou inexistente",
      status: false,
      data: [],
    });
  }
}
