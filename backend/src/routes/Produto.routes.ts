import { Router } from "express";
import { FornecedorController } from "../controller/FornecedorController";

const router = Router();
const controller = new FornecedorController();

router.get("/fornecedor/produtos", controller.listarProdutos);
router.post("/fornecedor/produtos", controller.adicionarProduto);
router.put("/fornecedor/produtos/:id", controller.editarProduto);
router.delete("/fornecedor/produtos/:id", controller.removerProduto);

export default router;