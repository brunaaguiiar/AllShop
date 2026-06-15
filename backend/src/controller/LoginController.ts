import { Request, Response } from "express"; 
import { LoginService } from "../services/login.service";

const loginService = new LoginService();

export class LoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, senha } = req.body;

      const resultado = await loginService.execute(email, senha);

      return res.status(200).json(resultado);
    } catch (error: any) {
      if (error.message === "E-mail ou senha incorretos.") {
        return res.status(401).json({ erro: error.message });
      }

      console.error("Erro no login:", error);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
  }
}