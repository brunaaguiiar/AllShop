import express from "express";
import cors from "cors";
import { catalogoRoutes } from "./src/routes/Catalogo.routes";
import { usuarioRoutes } from "./src/routes/Usuario.routes"; 

const app = express();

app.use(cors());
app.use(express.json());

app.use(catalogoRoutes); 
app.use(usuarioRoutes); 

app.get("/", (req, res) => {
  res.send("API do AllShop funcionando");
});

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333");
});