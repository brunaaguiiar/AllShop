import { prisma } from "../lib/prisma";

export class PedidoService {
  async criarPedido(data: {
    usuario_id: number;
    endereco_id: number;
    forma_pagamento: string;
    itens: Array<{ produto_id: number; quantidade: number }>;
  }) {
    const produtos = await Promise.all(
      data.itens.map(async (item) => {
        const produto = await prisma.produto.findUnique({
          where: { produto_id: item.produto_id },
        });

        if (!produto) {
          throw new Error(`Produto ${item.produto_id} não encontrado.`);
        }

        return { produto, quantidade: item.quantidade };
      })
    )

    const valorTotal = produtos.reduce(
      (sum, { produto, quantidade }) => sum + Number(produto.preco) * quantidade,
      0
    )

    const pedido = await prisma.pedido.create({
      data: {
        usuario_id: data.usuario_id,
        endereco_id: data.endereco_id,
        forma_pagamento: data.forma_pagamento,
        valor_total: valorTotal,
        status: "pendente",
        item_pedido: {
          create: produtos.map(({ produto, quantidade }) => ({
            produto_id: produto.produto_id,
            quantidade,
            preco_unitario: Number(produto.preco),
            subtotal: Number(produto.preco) * quantidade,
          })),
        },
      },
      include: {
        item_pedido: { include: { produto: true } },
      },
    })

    return pedido;
  }

  async listarHistoricoUsuario(usuarioId: number) {
    return await prisma.pedido.findMany({
      where: { usuario_id: usuarioId },
      include: {
        item_pedido: { include: { produto: true } },
        endereco: true,
      },
      orderBy: { data_pedido: "desc" },
    });
  }

  async obterDetalhesPedido(pedidoId: number) {
    return await prisma.pedido.findUnique({
      where: { id: pedidoId },
      include: {
        item_pedido: { include: { produto: true } },
        endereco: true,
      },
    })
  }
}
