import { prisma } from "../../lib/prisma";

export class FavoritoService {

  async favoritarProduto(
    usuario_id: number,
    produto_id: number
  ) {

    return await prisma.favorito.create({
      data: {
        usuario_id,
        produto_id
      }
    });
  }

  async listarFavoritos(usuario_id: number) {

    return await prisma.favorito.findMany({
      where: {
        usuario_id
      },
      include: {
        produto: true
      }
    });
  }
}