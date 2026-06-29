import { Router } from "express";
import { ProdutoController } from "../controller/ProdutoController";

const router = Router();
const controller = new ProdutoController();

router.get("/produtos", controller.listarProdutos);
router.get("/categorias", controller.listarCategorias);

export default router;