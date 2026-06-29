import axios from "axios"

const API_URL = "http://localhost:3333"

function obterIdUsuarioLogado(): number {
  return 1;
}

export const pedidoServiceFrontend = {
  async buscarHistorico() {
    const usuarioId = obterIdUsuarioLogado();
    if (!usuarioId) {
      throw new Error("Usuário não identificado. Faça login novamente.")
    }

    const resposta = await axios.get(`${API_URL}/pedidos/historico`, {
      headers: {
        "user-id": usuarioId,
      },
    })

    return resposta.data;
  },
};
