import { Router } from "express"
import FavoritoController from "../controller/FavoritosController"

const router = Router()

router.post("/favoritos", FavoritoController.adicionar)
router.get("/favoritos/:usuarioId", FavoritoController.listar)
router.delete("/favoritos", FavoritoController.remover)

export default router