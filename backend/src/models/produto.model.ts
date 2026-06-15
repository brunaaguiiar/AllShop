import { prisma } from "../lib/prisma";

export class ProdutoModel {
  async listAll() {
    return await prisma.produto.findMany({
      include: { categoria: true }
    });
  }

  async listCategoriasAll() {
    return await prisma.categoria.findMany();
  }
}