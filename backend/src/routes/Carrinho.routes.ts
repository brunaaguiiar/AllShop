import { Router } from "express"
import { CarrinhoController } from "../controller/CarrinhoController"

const carrinhoRoutes = Router();

const carrinhoController = new CarrinhoController()

carrinhoRoutes.get(
  "/carrinho",
  carrinhoController.listarCarrinho.bind(carrinhoController)
);

carrinhoRoutes.post(
  "/carrinho",
  carrinhoController.adicionarItem.bind(carrinhoController)
);

carrinhoRoutes.delete(
  "/carrinho/:id",
  carrinhoController.removerItem.bind(carrinhoController)
);

carrinhoRoutes.post(
  "/carrinho/finalizar",
  carrinhoController.finalizarCompra.bind(carrinhoController)
);

export { carrinhoRoutes };
