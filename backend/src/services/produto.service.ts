import { ProdutoModel } from "../models/produto.model";

const produtoModel = new ProdutoModel();

export class ProdutoService {
  async listarProdutos() {
    return await produtoModel.listAll();
  }

  async listarCategorias() {
    return await produtoModel.listCategoriasAll();
  }
}