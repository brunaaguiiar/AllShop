import { Request, Response } from "express"; 
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class LoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, senha } = req.body;
      const usuario = await prisma.usuario.findUnique({ where: { email } });
      if (!usuario) {
        return res.status(401).json({ erro: "E-mail ou senha incorretos." });
      }
      const senhaEstaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (!senhaEstaCorreta) {
        return res.status(401).json({ erro: "E-mail ou senha incorretos." });
      }
      const token = jwt.sign({ id: usuario.id }, "SUA_CHAVE_SECRETA", { expiresIn: "1d" });
      return res.status(200).json({
        usuario: { nome: usuario.nome, email: usuario.email },
        token: token
      });
    } catch (error) {
      console.error("Erro no login:", error);
      return res.status(500).json({ erro: "Erro interno no servidor." });
    }
  }
}