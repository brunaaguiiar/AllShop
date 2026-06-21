import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface ICriarAvaliacaoInput {
  usuario_id: number
  produto_id: number
  nota: number
}

interface ICriarComentarioInput {
  usuario_id: number
  produto_id: number
  texto: string
}

export class InteracaoService {
  async avaliarProduto(dados: ICriarAvaliacaoInput) {
    if (dados.nota < 1 || dados.nota > 5) {
      throw new Error('A nota deve ser entre 1 e 5 estrelas.');
    }

    return await prisma.avaliacao.upsert({
      where: {
        usuario_id_produto_id: {
          usuario_id: dados.usuario_id,
          produto_id: dados.produto_id
        }
      },
      update: {
        nota: dados.nota,
        data_avaliacao: new Date()
      },
      create: {
        usuario_id: dados.usuario_id,
        produto_id: dados.produto_id,
        nota: dados.nota
      }
    });
  }

  async adicionarComentario(dados: ICriarComentarioInput) {
    if (!dados.texto.trim()) {
      throw new Error('O texto do comentário não pode estar vazio.')
    }

    return await prisma.comentario.create({
      data: {
        usuario_id: dados.usuario_id,
        produto_id: dados.produto_id,
        texto: dados.texto
      },
      include: {
        usuario: {
          select: { nome: true, sobrenome: true } 
        }
      }
    })
  }

  async obterFeedbacksProduto(produtoId: number) {
    const comentarios = await prisma.comentario.findMany({
      where: { produto_id: produtoId },
      include: {
        usuario: {
          select: { nome: true, sobrenome: true }
        }
      },
      orderBy: { data_comentario: 'desc' }
    })

    const avaliacoes = await prisma.avaliacao.findMany({
      where: { produto_id: produtoId },
      select: { nota: true }
    })

    const totalNotas = avaliacoes.reduce((acc, curr) => acc + curr.nota, 0);
    const mediaAvaliacao = avaliacoes.length > 0 ? (totalNotas / avaliacoes.length).toFixed(1) : 0

    return {
      mediaAvaliacao: Number(mediaAvaliacao),
      totalAvaliacoes: avaliacoes.length,
      comentarios
    }
  }
}