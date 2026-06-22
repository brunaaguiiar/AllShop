import nodemailer from 'nodemailer'

export class EmailService {
  private transporter

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, 
      auth: {
        user: "brunaaguiiar2020@gmail.com", 
        pass: "ngwu trmm ufqy jbmip"          
      },
      tls: {
        rejectUnauthorized: false 
      }
    })
  }

  async enviarEmailRecuperacao(emailDestino: string, nomeUsuario: string, novaSenhaProvisoria: string) {
    const mailOptions = {
      from: '"SuporteAllShop" <brunaaguiiar2020@gmail.com>',
      to: emailDestino,
      subject: 'Recuperação de Senha - AllShop',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #F97316; border-bottom: 2px solid #F97316; padding-bottom: 10px;">Olá, ${nomeUsuario}!</h2>
          <p style="font-size: 14px; line-height: 1.6;">Recebemos uma solicitação de recuperação de senha para a sua conta no ecossistema <strong>AllShop</strong>.</p>
          <p style="font-size: 14px; line-height: 1.6;">Para sua segurança, geramos uma senha provisória para você realizar o seu primeiro acesso:</p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; font-size: 22px; font-weight: bold; text-align: center; letter-spacing: 3px; margin: 20px 0; color: #1e3a8a; border: 1px dashed #cbd5e1;">
            ${novaSenhaProvisoria}
          </div>
          <p style="color: #ef4444; font-size: 13px; font-weight: 500;">Recomendamos vivamente que você altere essa senha assim que fizer o login no seu Perfil de Usuário.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 11px; color: #999;">Se você não solicitou essa alteração, por favor desconsidere este e-mail.</p>
        </div>
      `
    }

    return await this.transporter.sendMail(mailOptions)
  }
}