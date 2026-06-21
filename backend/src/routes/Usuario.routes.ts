import { Router } from "express"
import { CadastroController } from "../controller/CadastroController"
import { LoginController } from "../controller/LoginController"
import { RecuperarSenhaController } from "../controller/RecuperarSenhaController" 

const usuarioRoutes = Router()
const cadastroController = new CadastroController()
const loginController = new LoginController()
const recuperarSenhaController = new RecuperarSenhaController() 

usuarioRoutes.post("/cadastro", cadastroController.handle)
usuarioRoutes.post("/login", loginController.handle)
usuarioRoutes.post("/usuarios/recuperar-senha", recuperarSenhaController.recuperar)

export { usuarioRoutes }