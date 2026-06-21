import { Router } from "express";
import { FavoritoController } from "../controller/FavoritoController";

const favoritoRoutes = Router();

const favoritoController = new FavoritoController();

favoritoRoutes.post(
  "/favoritos",
  favoritoController.favoritarProduto.bind(favoritoController)
);

favoritoRoutes.get(
  "/favoritos",
  favoritoController.listarFavoritos.bind(favoritoController)
);

export { favoritoRoutes };