import { prisma } from '../lib/prisma';

interface ICriarFornecedorInput {
  razao_social: string;
  cnpj: string;
  email?: string;
  telefone?: string;
}

export class FornecedorService {
  async criar(dados: ICriarFornecedorInput) {
    const fornecedorExistente = await prisma.fornecedor.findUnique({
      where: { cnpj: dados.cnpj }
    })

    if (fornecedorExistente) {
      throw new Error('Já existe um fornecedor cadastrado com este CNPJ.')
    }

    return await prisma.fornecedor.create({
      data: dados
    })
  }

  async listarTodos() {
    return await prisma.fornecedor.findMany({
      orderBy: { razao_social: 'asc' }
    })
  }

  async buscarPorId(id: number) {
    const fornecedor = await prisma.fornecedor.findUnique({
      where: { fornecedor_id: id },
      include: { produto: true } 
    })

    if (!fornecedor) {
      throw new Error('Fornecedor não encontrado.');
    }

    return fornecedor;
  }

  async atualizar(id: number, dados: Partial<ICriarFornecedorInput>) {
    return await prisma.fornecedor.update({
      where: { fornecedor_id: id },
      data: dados
    })
  }

  async eliminar(id: number) {
    const possuiProdutos = await prisma.produto.findFirst({
      where: { fornecedor_id: id }
    })

    if (possuiProdutos) {
      throw new Error('Não é possível eliminar um fornecedor que possui produtos vinculados.');
    }

    return await prisma.fornecedor.delete({
      where: { fornecedor_id: id }
    })
  }
}