class ProdutoService {
  listar() {
    return [
      {
        id: 1,
        nome: "Notebook",
        preco: 3500,
      },
      {
        id: 2,
        nome: "Mouse",
        preco: 80,
      },
    ];
  }
}

export default new ProdutoService();