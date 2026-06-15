import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userModel = new UserModel();

export class LoginService {
  async execute(email: string, senhaPlana: string) {
    const usuario = await userModel.findByEmail(email);
    if (!usuario) {
      throw new Error("E-mail ou senha incorretos.");
    }
    const senhaEstaCorreta = await bcrypt.compare(senhaPlana, usuario.senha);
    if (!senhaEstaCorreta) {
      throw new Error("E-mail ou senha incorretos.");
    }
    const token = jwt.sign({ id: usuario.id }, "SUA_CHAVE_SECRETA", { expiresIn: "1d" });

    return {
      usuario: { nome: usuario.nome, email: usuario.email },
      token
    };
  }
}