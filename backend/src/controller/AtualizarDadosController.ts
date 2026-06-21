import { Request, Response } from "express";
import { AtualizarDadosService } from "../services/atualizarDados.service"

const atualizarDadosService = new AtualizarDadosService()

export class AtualizarDadosController {
  async handle(req: Request, res: Response) {
    try {
      const rawId = req.params.id
      const id = Array.isArray(rawId) ? rawId[0] : rawId

      if (!id) {
        return res.status(400).json({ erro: "ID do usuário é obrigatório." })
      }

      const { nome, email, telefone } = req.body;
      const usuarioAtualizado = await atualizarDadosService.execute(id, {
        nome,
        email,
        telefone,
      })

      return res.json(usuarioAtualizado)
      
    } catch (error: any) {
      console.error("Erro ao atualizar dados:", error);
      return res.status(400).json({ erro: error.message || "Erro ao atualizar perfil." })
    }
  }
}