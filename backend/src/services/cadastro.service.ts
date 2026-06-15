import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";

const userModel = new UserModel();

export class CadastroService {
  async execute(dados: {
    nomeCompleto: string;
    email: string;
    senhaPlana: string;
    cpf: string;
    telefone?: string;
    data_nascimento?: string;
  }) {
    const usuarioExiste = await userModel.findByEmail(dados.email);
    if (usuarioExiste) {
      throw new Error("Este e-mail já está cadastrado.");
    }

    const partesDoNome = dados.nomeCompleto.trim().split(" ");
    const nome = partesDoNome[0];
    const sobrenome = partesDoNome.slice(1).join(" ") || "Não Informado";

    const senhaEscondida = await bcrypt.hash(dados.senhaPlana, 10);

    const novoUsuario = await userModel.create({
      nome,
      sobrenome,
      email: dados.email,
      senhaCriptografada: senhaEscondida,
      cpf: dados.cpf,
      telefone: dados.telefone,
      data_nascimento: dados.data_nascimento
    });

    return {
      id: novoUsuario.id,
      nome: novoUsuario.nome,
      email: novoUsuario.email
    };
  }
}