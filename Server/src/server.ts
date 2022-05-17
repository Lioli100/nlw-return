import cors from "cors";
import express from "express";
import { routes } from "./routes";

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrar informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar informações de uma única entidade, ex: aceita receber algo, sim ou não com
// DELETE = Deletar uma informação

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!");
});
