import { Router } from "express";
import FavoritoController from "../controller/FavoritosController";

const favoritoRoutes = Router();

const favoritosController = FavoritoController;

favoritoRoutes.post(
  "/favoritos",
  favoritosController.adicionar.bind(favoritosController)
);

favoritoRoutes.get(
  "/favoritos/:usuarioId",
  favoritosController.listar.bind(favoritosController)
);

favoritoRoutes.delete(
  "/favoritos",
  favoritosController.remover.bind(favoritosController)
);

export { favoritoRoutes };