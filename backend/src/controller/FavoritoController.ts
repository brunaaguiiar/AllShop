import { Request, Response } from "express";
import { FavoritoService } from "../services/favorito.service";

export class FavoritoController {

  private favoritoService = new FavoritoService();

  async favoritarProduto(
    req: Request,
    res: Response
  ): Promise<Response> {

    try {

      const {
        usuario_id,
        produto_id
      } = req.body;

      const favorito =
        await this.favoritoService.favoritarProduto(
          Number(usuario_id),
          Number(produto_id)
        );

      return res.status(201).json(favorito);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        erro: "Erro ao favoritar produto"
      });
    }
  }

  async listarFavoritos(
    req: Request,
    res: Response
  ): Promise<Response> {

    try {

      const usuario_id = Number(req.query.usuario_id);

      const favoritos =
        await this.favoritoService.listarFavoritos(usuario_id);

      return res.status(200).json(favoritos);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        erro: "Erro ao listar favoritos"
      });
    }
  }
}