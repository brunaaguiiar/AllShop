import express from "express"
import cors from "cors"
import { usuarioRoutes } from "./src/routes/Usuario.routes"
import pedidoRoutes from "./src/routes/Pedido.routes"
import fornecedorRoutes from "./src/routes/Fornecedor.routes"
import interacaoRoutes from "./src/routes/Interacao.routes"
import { carrinhoRoutes } from "./src/routes/Carrinho.routes";
import { favoritoRoutes } from "src/routes/Favoritos.routes"
import produtoRoutes from "./src/routes/Produto.routes"

const app = express();

app.use(cors())

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }))

app.use(usuarioRoutes)
app.use(pedidoRoutes)
app.use(fornecedorRoutes)
app.use("/api", favoritoRoutes);
app.use(interacaoRoutes)
app.use(produtoRoutes)

app.use(carrinhoRoutes);
app.use(favoritoRoutes);

app.get("/", (req, res) => {
  res.send("API do AllShop funcionando")
})

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333")
})