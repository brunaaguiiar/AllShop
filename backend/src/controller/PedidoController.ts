import { Request, Response } from 'express';
import { PedidoService } from '../services/pedido.service';

const pedidoService = new PedidoService();

export class PedidoController {
  async criar(req: Request, res: Response) {
    try {
      const usuario_id = Number(req.headers['user-id'])
      const { endereco_id, forma_pagamento, itens } = req.body

      if (!usuario_id) {
        return res.status(401).json({ error: 'Usuário não autenticado.' })
      }

      if (!endereco_id || !forma_pagamento || !itens || itens.length === 0) {
        return res.status(400).json({ error: 'Dados insuficientes para finalizar a compra.' })
      }

      const pedido = await pedidoService.criarPedido({
        usuario_id,
        endereco_id: Number(endereco_id),
        forma_pagamento,
        itens
      })

      return res.status(201).json({ message: 'Pedido registrado com sucesso!', pedido })
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  async historico(req: Request, res: Response) {
    try {
      const usuario_id = Number(req.headers['user-id']);

      if (!usuario_id) {
        return res.status(401).json({ error: 'Usuário não autenticado.' })
      }

      const pedidos = await pedidoService.listarHistoricoUsuario(usuario_id);
      return res.status(200).json(pedidos);
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }

  async detalhes(req: Request, res: Response) {
    try {
      const pedidoId = Number(req.params.idPedido);
      const pedido = await pedidoService.obterDetalhesPedido(pedidoId);
      
      return res.status(200).json(pedido);
    } catch (error: any) {
      return res.status(500).json({ error: error.message })
    }
  }
}