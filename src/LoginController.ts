async function loginUsuario(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await prisma.usuario.findUnique({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ erro: "E-mail ou senha incorretos." });
    }

    const senhaEstaCorreta = await bcrypt.compare(senha, usuario.senha);
    if (!senhaEstaCorreta) {
      return res.status(401).json({ erro: "E-mail ou senha incorretos." });
    }

    const token = jwt.sign({ id: usuario.id }, "SUA_CHAVE_SECRETA", { expiresIn: "1d" });

    return res.status(200).json({
      usuario: { nome: usuario.nome, email: usuario.email },
      token: token
    });

  } catch (error) {
    return res.status(500).json({ erro: "Erro interno no servidor." });
  }
}