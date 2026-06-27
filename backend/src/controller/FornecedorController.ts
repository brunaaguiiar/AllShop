import { Request, Response } from "express";
import fornecedorService from "../services/fornecedor.service";

class FornecedorController {
  async listar(req: Request, res: Response) {
    try {
      const produtos = await fornecedorService.listarProdutos();
      return res.json(produtos);
    } catch (error) {
      return res.status(500).json({ erro: "Erro ao listar produtos" });
    }
  }

  async criar(req: Request, res: Response) {
    try {
      const produto = await fornecedorService.criarProduto(req.body);
      return res.status(201).json(produto);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ erro: "Erro ao criar produto" });
    }
  }

  async deletar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await fornecedorService.deletarProduto(id);
      return res.json({ mensagem: "Produto removido" });
    } catch {
      return res.status(500).json({ erro: "Erro ao deletar" });
    }
  }
}

export default new FornecedorController();