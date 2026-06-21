import { Request, Response } from 'express';
import { EmailService } from '../services/email.service';
import bcrypt from 'bcrypt';
import { prisma } from "../lib/prisma";

const emailService = new EmailService();

export class RecuperarSenhaController {
  async recuperar(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        return res.status(400).json({ error: 'O e-mail é obrigatório.' });
      }

      const usuario = await prisma.usuario.findUnique({
        where: { email }
      });

      // 🔐 Proteção de privacidade: não diz se o e-mail existe de verdade ou não
      if (!usuario) {
        return res.status(200).json({ mensagem: 'Se o e-mail estiver cadastrado, as instruções foram enviadas.' });
      }

      // Gera senha provisória alfanumérica de 6 dígitos
      const senhaProvisoria = Math.random().toString(36).slice(-6);

      // Encripta a nova senha temporária para salvar no banco
      const senhaCriptografada = await bcrypt.hash(senhaProvisoria, 10);

      await prisma.usuario.update({
        where: { email },
        data: {
          senha: senhaCriptografada 
        }
      });

      // Dispara o Nodemailer usando as suas configurações do Gmail
      await emailService.enviarEmailRecuperacao(usuario.email, usuario.nome, senhaProvisoria);

      return res.status(200).json({ mensagem: 'E-mail de recuperação enviado com sucesso!' });
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}