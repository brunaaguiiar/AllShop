import React, { useState } from "react";

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log({
      nome,
      email,
      senha,
    });

    alert("Conta criada com sucesso!");
  };

  return (
    <div className="auth-container">
      <div className="card">
        <div className="logo">A</div>

        <h1>Criar sua conta</h1>
        <p>Preencha seus dados para começar.</p>

        <form onSubmit={handleCadastro}>
          <label>Nome completo</label>
          <input
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="voce@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Crie uma senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <label>Confirmar senha</label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />

          <button type="submit">
            Criar conta
          </button>
        </form>

        <p>
          Já tem conta? <a href="/login">Fazer login</a>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;