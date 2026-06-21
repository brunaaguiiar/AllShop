const express = require('express')
const router = express.Router()
const authAdmin = require('../middlewares/authAdmin')
const auth = require('../middlewares/auth')

router.get('/fornecedores', auth, authAdmin, async (req, res) => {
  try {
    const fornecedores = await prisma.fornecedor.findMany()
    res.json(fornecedores)
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar fornecedores." })
  }
})

module.exports = router