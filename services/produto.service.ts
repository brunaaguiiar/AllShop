import { prisma } from "../database/prisma";

class ProdutoService {
  async delete(id: number) {
    const produto = await prisma.produto.findUnique({
      where: { id },
    });

    if (!produto) {
      throw new Error("Produto não encontrado.");
    }

    await prisma.produto.delete({
      where: { id },
    });

    return {
      message: "Produto excluído com sucesso.",
    };
  }
}

export default new ProdutoService();