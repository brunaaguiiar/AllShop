import { Router } from 'express'
import { InteracaoController } from '../controller/InteracaoController'

const interacaoRoutes = Router()
const interacaoController = new InteracaoController()

interacaoRoutes.post('/logout', interacaoController.logout)
interacaoRoutes.post('/produtos/:idProduto/avaliar', interacaoController.avaliar)
interacaoRoutes.post('/produtos/:idProduto/comentar', interacaoController.comentar)
interacaoRoutes.get('/produtos/:idProduto/feedbacks', interacaoController.listarFeedbacks)

export default interacaoRoutes