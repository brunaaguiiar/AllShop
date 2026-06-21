import { Router } from "express"
import { CadastroController } from "../controller/CadastroController"
import { LoginController } from "../controller/LoginController"

const usuarioRoutes = Router()
const cadastroController = new CadastroController()
const loginController = new LoginController()

usuarioRoutes.post("/cadastro", (req, res) => {
  cadastroController.handle(req, res)
})

usuarioRoutes.post("/login", (req, res) => {
  loginController.handle(req, res)
})

export { usuarioRoutes }