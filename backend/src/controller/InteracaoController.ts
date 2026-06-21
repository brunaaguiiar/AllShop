import { Request, Response } from 'express'
import { InteracaoService } from '../services/interacao.service'

const interacaoService = new InteracaoService()

export class InteracaoController {
  async logout(req: Request, res: Response) {
    try {
      return res.status(200).json({ message: 'Sessão encerrada com sucesso! Remova o token do cliente.' })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  async avaliar(req: Request, res: Response) {
    try {
      const usuario_id = Number(req.headers['user-id'])
      const produto_id = Number(req.params.idProduto)
      const { nota } = req.body;

      if (!usuario_id) return res.status(401).json({ error: 'Usuário não autenticado.' })
      const avaliacao = await interacaoService.avaliarProduto({ usuario_id, produto_id, nota: Number(nota) })
      return res.status(201).json({ message: 'Avaliação registrada com sucesso!', avaliacao })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

  async comentar(req: Request, res: Response) {
    try {
      const usuario_id = Number(req.headers['user-id'])
      const produto_id = Number(req.params.idProduto)
      const { texto } = req.body;

      if (!usuario_id) return res.status(401).json({ error: 'Usuário não autenticado.' })

      const comentario = await interacaoService.adicionarComentario({ usuario_id, produto_id, texto })
      return res.status(201).json({ message: 'Comentário publicado com sucesso!', comentario })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

  async listarFeedbacks(req: Request, res: Response) {
    try {
      const produto_id = Number(req.params.idProduto);
      const feedbacks = await interacaoService.obterFeedbacksProduto(produto_id)
      return res.status(200).json(feedbacks);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}