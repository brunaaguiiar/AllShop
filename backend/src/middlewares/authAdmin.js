const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const authAdmin = async (req, res, next) => {
  try {
    const usuarioId = req.usuarioId
    
    const usuario = await prisma.usuario.findUnique({
      where: { id: usuarioId }
    });

    if (usuario && usuario.role === 'ADMIN') {
      next()
    } else {
      return res.status(403).json({ message: "Acesso negado: Apenas administradores." })
    }
  } catch (error) {
    return res.status(500).json({ message: "Erro interno." })
  }
}
module.exports = authAdmin