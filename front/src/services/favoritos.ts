import api from "./api";

export const listarFavoritos = async (usuarioId: number) => {
  const response = await api.get(`/api/favoritos/${usuarioId}`);
  return response.data;
};

export const removerFavorito = async (usuarioId: number, produtoId: number) => {
  const response = await api.delete("/api/favoritos", {
    data: { usuarioId, produtoId },
  });
  return response.data;
};

export const adicionarFavorito = async (usuarioId: number, produtoId: number) => {
  const response = await api.post("/api/favoritos", {
    usuarioId,
    produtoId,
  });
  return response.data;
};
