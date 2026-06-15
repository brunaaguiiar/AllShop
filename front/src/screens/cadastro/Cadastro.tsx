import { useState } from "react";
import { MdOutlineMail, MdLockOutline, MdPersonOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 

export default function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  
  const navigate = useNavigate();

  async function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setSucesso("");

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    if (senha.length < 6) {
      setErro("A senha precisa ter no mínimo 6 caracteres.");
      return;
    }

   try {
      const resposta = await axios.post("http://localhost:3333/cadastro", {
        nomeCompleto, 
        email,
        senha,
        cpf: "",     
        telefone: "", 
        data_nascimento: null
      });

      setSucesso(resposta.data.mensagem || "Conta criada com sucesso!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (error: unknown) { 
      if (axios.isAxiosError(error) && error.response && error.response.data.erro) {
        setErro(error.response.data.erro);
      } else {
        setErro("Não foi possível conectar ao servidor.");
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="rounded-3xl shadow-lg w-[420px] bg-white p-8 flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 mb-4">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <h1 className="text-xl font-semibold text-gray-800">
          Criar conta
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          É rápido e gratuito.
        </p>
        {erro && <p className="text-sm text-red-500 bg-red-50 w-full p-2 rounded-lg text-center mb-3 font-medium border border-red-200">{erro}</p>}
        {sucesso && <p className="text-sm text-green-500 bg-green-50 w-full p-2 rounded-lg text-center mb-3 font-medium border border-green-200">{sucesso}</p>}
        <form onSubmit={handleCadastro} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Nome completo *
            </label>
            <div className="relative">
              <MdPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                required
                value={nomeCompleto}
                onChange={(e) => setNomeCompleto(e.target.value)}
                placeholder="Seu nome"
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Email *
            </label>
            <div className="relative">
              <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Senha *
            </label>
            <div className="relative">
              <MdLockOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                required
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
            <span className="text-xs text-gray-500">
              Use no mínimo 6 caracteres.
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Confirmar senha *
            </label>
            <div className="relative">
              <MdLockOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                required
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="Repita a senha"
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white w-full rounded-xl py-3 font-medium mt-2 transition-colors">
            Criar minha conta
          </button>
          <p className="text-sm text-gray-500 text-center mt-2">
            Já tem conta?{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              <Link to="/login">
                Entrar na minha conta
              </Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}