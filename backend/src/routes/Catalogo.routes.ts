import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController";

const catalogoRoutes = Router();
const produtoController = new ProdutoController();


export { catalogoRoutes };