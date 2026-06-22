import { prisma } from '../lib/prisma'

class FavoritoService {
  async adicionar(usuario_id: number, produto_id: number) {
    return await prisma.favorito.create({
      data: {
        usuario_id,
        produto_id,
      },
    })
  }

  async listarPorUsuario(usuario_id: number) {
    return await prisma.favorito.findMany({
      where: { usuario_id },
      include: {
        produto: true, 
      },
    })
  }

  async remover(usuario_id: number, produto_id: number) {
    return await prisma.favorito.delete({
      where: {
        usuario_id_produto_id: {
          usuario_id,
          produto_id,
        },
      },
    })
  }
}

export default new FavoritoService();