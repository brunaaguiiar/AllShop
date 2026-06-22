import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController";

const produtoRoutes = Router();
const produtoController = new ProdutoController();

produtoRoutes.get("/produtos", (req, res) =>
  produtoController.listarProdutos(req, res)
);

produtoRoutes.get("/categorias", (req, res) =>
  produtoController.listarCategorias(req, res)
);

export { produtoRoutes };