import { Request, Response } from "express";
import ProdutoService from "../services/produto.service";

class ProdutoController {
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const resultado = await ProdutoService.delete(Number(id));

      return res.status(200).json(resultado);
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }
  }
}

export default new ProdutoController();