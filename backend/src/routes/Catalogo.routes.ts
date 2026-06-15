import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController";

const catalogoRoutes = Router();
const produtoController = new ProdutoController();

catalogoRoutes.get("/produtos", produtoController.listarProdutos);
catalogoRoutes.get("/categorias", produtoController.listarCategorias);

export { catalogoRoutes };