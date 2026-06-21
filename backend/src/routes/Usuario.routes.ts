import { Router } from "express"
import { CadastroController } from "../controller/CadastroController"
import { LoginController } from "../controller/LoginController"
import { RecuperarSenhaController } from "../controller/RecuperarSenhaController" 

const usuarioRoutes = Router()
const cadastroController = new CadastroController()
const loginController = new LoginController()
const recuperarSenhaController = new RecuperarSenhaController() 

usuarioRoutes.post("/cadastro", (req, res) => {
  cadastroController.handle(req, res)
})

usuarioRoutes.post("/login", (req, res) => {
  loginController.handle(req, res)
})

usuarioRoutes.post("/usuarios/recuperar-senha", (req, res) => {
  recuperarSenhaController.recuperar(req, res)
})

export { usuarioRoutes }