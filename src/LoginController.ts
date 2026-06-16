import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      senha,
    });

    alert("Login realizado com sucesso!");
  };

  return (
    <div className="auth-container">
      <div className="card">
        <div className="logo">A</div>

        <h1>Entrar na AllShop</h1>
        <p>Acesse sua conta para continuar.</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="sua@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <a href="#">Recuperar senha</a>

          <button type="submit">
            Entrar na conta
          </button>
        </form>

        <p>
          Ainda não tem conta? <a href="/cadastro">Criar uma conta gratuita</a>
        </p>
      </div>
    </div>
  );
};

export default Login;