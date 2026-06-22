import { Request, Response } from "express"
import FavoritoService from "../services/favoritos.service"

class FavoritoController {
  async adicionar(req: Request, res: Response) {
    const { usuarioId, produtoId } = req.body

    const favorito = await FavoritoService.adicionar(
      Number(usuarioId),
      Number(produtoId)
    )

    return res.json(favorito);
  }

  async listar(req: Request, res: Response) {
    const { usuarioId } = req.params

    const favoritos = await FavoritoService.listarPorUsuario(
      Number(usuarioId)
    )

    return res.json(favoritos);
  }

  async remover(req: Request, res: Response) {
    const { usuarioId, produtoId } = req.body

    await FavoritoService.remover(
      Number(usuarioId),
      Number(produtoId)
    )

    return res.json({ message: "Favorito removido com sucesso" })
  }
}

export default new FavoritoController()