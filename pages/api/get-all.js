import DatabaseConnection from "../../connection/connectio";

export default async function handler(req, res) {
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
  // import database conexão
  const db = new DatabaseConnection();
  //============================================================
  try {
    // faz a conexão com a instacia
    await db.connect();

    // query a ser executada
    const sql = "SELECT * FROM Pokemon"; // query SQL atribuida a variavel
    // query a sendo executada e armazenada o resultado
    const results = await db.query(sql); // query SQL sendo executada
    // ==================================================
    // condicional executa caso tenha retorno da query
    if (results) {
      // entrega da mensagem na chamada
      res.status(200).json({
        message: "Esta é uma rota de API get-all",
        status: true,
        data: results,
      });
    } else {
      // ==================================================
      // condicional executa caso NÃO tenha retorno da query
      // entrega da mensagem de erro na chamada
      res.status(404).json({
        message: "não informado ou inexistente",
        status: false,
        data: results,
      });
    }
  } catch (error) {
    // ==================================================
    // entrega da mensagem de erro na chamada
    res.status(500).json({
      message: "Erro interno do servidor",
      status: false,
      data: [],
    });
  } finally {
    // Certifique-se de fechar a conexão quando terminar
    await db.close(); // por fim ele encerra a conexão
  }

  //============================================================
}
