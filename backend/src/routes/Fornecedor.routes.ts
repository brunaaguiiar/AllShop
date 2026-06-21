import { Router } from 'express'
import { FornecedorController } from '../controller/fornecedorController'

const fornecedorRoutes = Router()
const fornecedorController = new FornecedorController()

fornecedorRoutes.post('/fornecedores', fornecedorController.criar)
fornecedorRoutes.get('/fornecedores', fornecedorController.listar)
fornecedorRoutes.get('/fornecedores/:id', fornecedorController.obterPorId)
fornecedorRoutes.put('/fornecedores/:id', fornecedorController.atualizar)
fornecedorRoutes.delete('/fornecedores/:id', fornecedorController.eliminar)

export default fornecedorRoutes