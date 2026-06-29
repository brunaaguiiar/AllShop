import { Router } from "express";
import fornecedorController from "../controller/FornecedorController";

const router = Router();

router.get("/fornecedor/produtos", fornecedorController.listar);
router.post("/fornecedor/produtos", fornecedorController.criar);
router.delete("/fornecedor/produtos/:id", fornecedorController.deletar);


export default router;