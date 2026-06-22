import express from "express";
import cors from "cors";

import { carrinhoRoutes } from "./src/routes/Carrinho.routes";
import { favoritoRoutes } from "./src/routes/Favorito.routes";
import { produtoRoutes } from "./src/routes/Produto.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use(carrinhoRoutes);
app.use(favoritoRoutes);
app.use(produtoRoutes);

app.get("/", (req, res) => {
  res.send("API do AllShop funcionando 🚀");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});