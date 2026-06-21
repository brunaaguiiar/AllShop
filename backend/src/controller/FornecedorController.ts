import { Request, Response } from 'express';
import { FornecedorService } from '../services/fornecedor.service';

const fornecedorService = new FornecedorService();

export class FornecedorController {
  async criar(req: Request, res: Response) {
    try {
      const { razao_social, cnpj, email, telefone } = req.body;

      if (!razao_social || !cnpj) {
        return res.status(400).json({ error: 'Razão Social e CNPJ são campos obrigatórios.' });
      }

      const novoFornecedor = await fornecedorService.criar({
        razao_social,
        cnpj,
        email,
        telefone
      })

      return res.status(201).json({ message: 'Fornecedor cadastrado com sucesso!', novoFornecedor })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

  async listar(req: Request, res: Response) {
    try {
      const fornecedores = await fornecedorService.listarTodos()
      return res.status(200).json(fornecedores);
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  async obterPorId(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const fornecedor = await fornecedorService.buscarPorId(id)
      return res.status(200).json(fornecedor)
    } catch (error: any) {
      return res.status(404).json({ error: error.message })
    }
  }

  async atualizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id)
      const dadosAtualizados = req.body

      const fornecedor = await fornecedorService.atualizar(id, dadosAtualizados)
      return res.status(200).json({ message: 'Fornecedor atualizado com sucesso!', fornecedor })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }

  async eliminar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await fornecedorService.eliminar(id);
      return res.status(200).json({ message: 'Fornecedor removido com sucesso!' })
    } catch (error: any) {
      return res.status(400).json({ error: error.message })
    }
  }
}