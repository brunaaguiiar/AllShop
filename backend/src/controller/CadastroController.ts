import { Request, Response } from "express";
import { CadastroService } from "../services/cadastro.service";

const cadastroService = new CadastroService();

export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { nomeCompleto, email, senha, cpf, telefone, data_nascimento } = req.body;

      const novoUsuario = await cadastroService.execute({
        nomeCompleto,
        email,
        senhaPlana: senha,
        cpf,
        telefone,
        data_nascimento
      });

      return res.status(201).json({ 
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: novoUsuario
      });

    } catch (error: any) {
      if (error.message === "Este e-mail já está cadastrado.") {
        return res.status(400).json({ erro: error.message });
      }

      console.error("Erro no cadastro:", error);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
  }
}