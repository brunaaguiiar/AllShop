async function cadastrarUsuario(req, res) {
  try {
    const { nome, email, senha } = req.body;

    const usuarioExiste = await prisma.usuario.findUnique({ where: { email } });
    if (usuarioExiste) {
      return res.status(400).json({ erro: "Este e-mail já está cadastrado." });
    }

    const senhaEscondida = await bcrypt.hash(senha, 10);

    const novoUsuario = await prisma.usuario.create({
      data: { nome, email, senha: senhaEscondida }
    });

    return res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });

  } catch (error) {
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
}