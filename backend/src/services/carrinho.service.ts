import { prisma } from "../../lib/prisma"

export class CarrinhoService {

  async listarCarrinho(id_usuario: number) {
    return await prisma.carrinho.findFirst({
      where: { id_usuario },
      include: {
        item_carrinho: {
          include: {
            produto: true
          }
        }
      }
    });
  }

  async adicionarItem(
    id_usuario: number,
    id_produto: number,
    quantidade: number
  ) {

    const carrinho = await prisma.carrinho.findFirst({
      where: { id_usuario }
    });

    if (!carrinho) {
      throw new Error("Carrinho não encontrado");
    }

    return await prisma.item_carrinho.create({
      data: {
        id_carrinho: carrinho.id_carrinho,
        id_produto,
        quantidade
      }
    });
  }

  async removerItem(
    id_usuario: number,
    id_produto: number
  ) {

    const carrinho = await prisma.carrinho.findFirst({
      where: { id_usuario }
    })

    if (!carrinho) {
      throw new Error("Carrinho não encontrado")
    }

    return await prisma.item_carrinho.delete({
      where: {
        id_carrinho_id_produto: {
          id_carrinho: carrinho.id_carrinho,
          id_produto
        }
      }
    })
  }
  async finalizarCompra(id_usuario: number) {

  const carrinho = await prisma.carrinho.findFirst({
    where: { id_usuario },
    include: {
      item_carrinho: {
        include: {
          produto: true,
        },
      },
    },
  });

  if (!carrinho) {
    throw new Error("Carrinho não encontrado");
  }

  if (carrinho.item_carrinho.length === 0) {
    throw new Error("Carrinho vazio");
  }

  const valorTotal = carrinho.item_carrinho.reduce(
    (total, item) =>
      total + Number(item.produto.preco) * item.quantidade,
    0
  );

  await prisma.pedido.create({
    data: {
      usuario_id: id_usuario,
      endereco_id: 1,
      forma_pagamento: "PIX",
      valor_total: valorTotal,
      status: "ENTREGUE",

      item_pedido: {
        create: carrinho.item_carrinho.map((item) => ({
          produto_id: item.id_produto,
          quantidade: item.quantidade,
          preco_unitario: item.produto.preco,
          subtotal:
            Number(item.produto.preco) * item.quantidade,
        })),
      },
    },
  });

    await prisma.item_carrinho.deleteMany({
      where: {
        id_carrinho: carrinho.id_carrinho
      }
    });

    return {
      mensagem: "Compra finalizada com sucesso"
    };
  }

}