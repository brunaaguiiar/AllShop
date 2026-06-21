import { Request, Response } from "express";
import { CarrinhoService } from "../services/carrinho.service";

export class CarrinhoController {
  private carrinhoService = new CarrinhoService();

  async listarCarrinho(req: Request, res: Response): Promise<Response> {
    try {
      const id_usuario = Number(req.query.id_usuario);

      const carrinho = await this.carrinhoService.listarCarrinho(id_usuario);

      return res.status(200).json(carrinho);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        erro: "Erro ao listar carrinho",
      });
    }
  }

  async adicionarItem(req: Request, res: Response): Promise<Response> {
    try {
      const { id_usuario, id_produto, quantidade } = req.body;

      const item = await this.carrinhoService.adicionarItem(
        Number(id_usuario),
        Number(id_produto),
        Number(quantidade)
      );

      return res.status(201).json(item);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        erro: "Erro ao adicionar item",
      });
    }
  }

  async removerItem(req: Request, res: Response): Promise<Response> {
    try {
      const id_produto = Number(req.params.id);
      const id_usuario = Number(req.query.id_usuario);

      await this.carrinhoService.removerItem(
        id_usuario,
        id_produto
      );

      return res.status(200).json({
        mensagem: "Item removido com sucesso",
      });
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        erro: "Erro ao remover item",
      });
    }
  }
}