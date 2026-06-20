import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface IItemPedidoInput {
  produto_id: number
  quantidade: number
  preco_unitario: number
}

interface ICriarPedidoInput {
  usuario_id: number
  endereco_id: number
  forma_pagamento: string
  itens: IItemPedidoInput[]
}

export class PedidoService {
  
  async criarPedido(dados: ICriarPedidoInput) {
    let valorTotal = 0

    const itensMapeados = dados.itens.map(item => {
      const subtotal = item.quantidade * item.preco_unitario;
      valorTotal += subtotal

      return {
        produto_id: item.produto_id,
        quantidade: item.quantidade,
        preco_unitario: item.preco_unitario,
        subtotal: subtotal
      }
    })

    const novoPedido = await prisma.pedido.create({
      data: {
        usuario_id: dados.usuario_id,
        endereco_id: dados.endereco_id,
        forma_pagamento: dados.forma_pagamento,
        valor_total: valorTotal,
        status: "PENDENTE",
        item_pedido: {
          create: itensMapeados
        }
      },
      include: {
        item_pedido: {
          include: {
            produto: true
          }
        },
        endereco: true
      }
    })

    for (const item of dados.itens) {
      await prisma.produto.update({
        where: { produto_id: item.produto_id },
        data: {
          estoque: {
            decrement: item.quantidade
          }
        }
      })
    }

    return novoPedido;
  }

  async listarHistoricoUsuario(usuarioId: number) {
    return await prisma.pedido.findMany({
      where: { usuario_id: usuarioId },
      include: {
        item_pedido: {
          include: {
            produto: true
          }
        }
      },
      orderBy: {
        data_pedido: 'desc'
      }
    })
  }

  async obterDetalhesPedido(pedidoId: number) {
    const pedido = await prisma.pedido.findUnique({
      where: { id: pedidoId },
      include: {
        item_pedido: {
          include: {
            produto: true
          }
        },
        endereco: true
      }
    })

    if (!pedido) {
      throw new Error('Pedido não encontrado.');
    }

    return pedido;
  }
}