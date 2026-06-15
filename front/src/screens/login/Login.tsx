import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const resposta = await axios.post("http://localhost:3333/login", {
        email,
        senha
      });

      const { token, usuario } = resposta.data;

      localStorage.setItem("@AllShop:token", token);
      localStorage.setItem("@AllShop:user", JSON.stringify(usuario));

      console.log("Login bem-sucedido!", usuario);

      navigate("/"); 

    } catch (error: unknown) { 
      if (axios.isAxiosError(error) && error.response && error.response.data.erro) {
        setErro(error.response.data.erro);
      } else {
        setErro("Não foi possível conectar ao servidor.");
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-gray-100">
      <div className="rounded-3xl shadow-xl w-[420px] bg-white p-10 flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg mb-4 bg-orange-500">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        
        <h1 className="text-xl font-semibold text-gray-800">Entrar na AllShop</h1>
        <p className="text-sm text-gray-500 mb-6">Acesse sua conta para continuar</p>
        
        {erro && (
          <p className="text-sm text-red-500 bg-red-50 w-full p-2.5 rounded-lg text-center mb-4 font-medium border border-red-200">
            {erro}
          </p>
        )}

        <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Usuário ou Email <span className="text-red-700">*</span>
            </label>
            <div className="relative">
              <MdOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="email"
                type="email"
                placeholder="usuario@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg pl-9 pr-3 py-2 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Senha <span className="text-red-700">*</span>
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="senha"
                type="password"
                placeholder="Sua senha"
                required
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full border border-gray-300 rounded-lg pl-9 py-2 outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white w-full rounded-full py-2.5 mt-2 font-semibold shadow-md active:scale-[0.98] transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {carregando ? "Entrando..." : "Entrar"}
          </button>

          <div className="flex justify-between w-full text-xs text-gray-500 mt-2 px-1">
            <button 
              type="button" 
              onClick={() => navigate("/recuperar-senha")}
              className="hover:underline hover:text-orange-600 cursor-pointer transition-colors"
            >
              Esqueceu a senha?
            </button>
            
            <button 
              type="button"
              onClick={() => navigate("/cadastro")}
              className="hover:underline hover:text-orange-600 cursor-pointer transition-colors"
            >
              Não tem uma conta?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}