import { Router } from "express";
import { RecuperarSenhaController } from "../controller/RecuperarSenhaController";

const RecuperarSenhaRouter = Router();
const recuperarSenhaController = new RecuperarSenhaController();

RecuperarSenhaRouter.post("/recuperar-senha", recuperarSenhaController.recuperar);

export default RecuperarSenhaRouter;