import { UserModel } from "../models/user.model"

const userModel = new UserModel()

export class AtualizarDadosService {
  async execute(userId: string, data: { nome: string; email: string; telefone: string }) {
    return await userModel.update(userId, data);
  }
}
