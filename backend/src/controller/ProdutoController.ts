import { Request, Response } from "express";
import { ProdutoService } from "../services/produto.service";

const produtoService = new ProdutoService();

export class ProdutoController {
  async listarCategorias(req: Request, res: Response): Promise<Response> {
    try {
      const categorias = await produtoService.listarCategorias();
      return res.status(200).json(categorias);
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
      return res.status(500).json({ erro: "Erro ao buscar categorias." });
    }
  }

  async listarProdutos(req: Request, res: Response): Promise<Response> {
    try {
      const produtos = await produtoService.listarProdutos();
      return res.status(200).json(produtos);
    } catch (error) {
      console.error("Erro ao listar produtos:", error);
      return res.status(500).json({ erro: "Erro ao buscar produtos." });
    }
  }
}