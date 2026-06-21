import { prisma } from "../../lib/prisma";

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
    });

    if (!carrinho) {
      throw new Error("Carrinho não encontrado");
    }

    return await prisma.item_carrinho.delete({
      where: {
        id_carrinho_id_produto: {
          id_carrinho: carrinho.id_carrinho,
          id_produto
        }
      }
    });
  }
}