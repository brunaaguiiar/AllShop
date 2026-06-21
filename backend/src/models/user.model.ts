import { prisma } from "../lib/prisma";

export class UserModel {
  async findByEmail(email: string) {
    return await prisma.usuario.findUnique({ where: { email } });
  }

  async create(dados: {
    nome: string;
    sobrenome?: string;
    email: string;
    senhaCriptografada: string;
    cpf?: string;
    telefone?: string;
    data_nascimento?: string;
  }) {
    return await prisma.usuario.create({
      data: {
        nome: dados.nome,
        sobrenome: dados.sobrenome ?? "Não Informado",
        email: dados.email,
        senha: dados.senhaCriptografada,
        cpf: dados.cpf ?? "",
        telefone: dados.telefone ?? null,
        data_nascimento: dados.data_nascimento ? new Date(dados.data_nascimento) : null,
      },
    });
  }

  async update(userId: string, data: { nome?: string; email?: string; telefone?: string }) {
    const id = Number(userId);
    if (!id) {
      throw new Error("ID de usuário inválido.");
    }

    return await prisma.usuario.update({
      where: { id },
      data: {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
      },
    });
  }
}