import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";

export class CadastroController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, sobrenome, email, senha, cpf, telefone, data_nascimento } = req.body;

      const usuarioExiste = await prisma.usuario.findUnique({ 
        where: { email } 
      });
      
      if (usuarioExiste) {
        return res.status(400).json({ erro: "Este e-mail já está cadastrado." });
      }

      const senhaEscondida = await bcrypt.hash(senha, 10);

      const novoUsuario = await prisma.usuario.create({
        data: { 
          nome, 
          sobrenome,
          email, 
          senha: senhaEscondida,
          cpf,
          telefone,
          data_nascimento: data_nascimento ? new Date(data_nascimento) : null
        }
      });

      return res.status(201).json({ 
        mensagem: "Usuário cadastrado com sucesso!",
        usuario: {
          id: novoUsuario.id,
          nome: novoUsuario.nome,
          email: novoUsuario.email
        }
      });

    } catch (error) {
      console.error("Erro no cadastro:", error);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
  }
}