import express from "express";
import cors from "cors";

import { carrinhoRoutes } from "./src/routes/Carrinho.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(carrinhoRoutes);

app.get("/", (req, res) => {
  res.send("API do AllShop funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});