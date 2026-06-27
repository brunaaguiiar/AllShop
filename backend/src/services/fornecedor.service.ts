import { prisma } from "../../lib/prisma";

class FornecedorService {
  async listarProdutos() {
    return prisma.produto.findMany({
      include: {
        categoria: true,
        fornecedor: true,
      },
    });
  }

  async criarProduto(data: any) {
    return prisma.produto.create({
      data: {
        nome: data.nome,
        descricao: data.descricao,
        preco: data.preco,
        imagem: data.imagem,
        estoque: data.estoque,
        categoria_id: data.categoria_id,
        fornecedor_id: data.fornecedor_id,
      },
    });
  }

  async deletarProduto(id: number) {
    return prisma.produto.delete({
      where: {
        produto_id: id,
      },
    });
  }
}

export default new FornecedorService();