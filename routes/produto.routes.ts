import { Router } from "express";
import ProdutoController from "../controllers/produto.controller";

const router = Router();

router.delete("/:id", ProdutoController.delete);

export default router;