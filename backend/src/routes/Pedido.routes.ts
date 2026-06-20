import { Router } from 'express'
import { PedidoController } from '../controller/PedidoController'

const pedidoRoutes = Router();
const pedidoController = new PedidoController();

pedidoRoutes.post('/pedidos', pedidoController.criar)
pedidoRoutes.get('/pedidos/historico', pedidoController.historico)
pedidoRoutes.get('/pedidos/:idPedido', pedidoController.detalhes)

export default pedidoRoutes;