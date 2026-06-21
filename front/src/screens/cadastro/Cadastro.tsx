import { useState } from "react"
import { MdOutlineMail } from "react-icons/md"
import { FiLock, FiUser, FiCreditCard } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

export default function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmarSenha, setConfirmarSenha] = useState("")
  const [erro, setErro] = useState("")
  const [sucesso, setSucesso] = useState("")
  const [carregando, setCarregando] = useState(false)
  
  const navigate = useNavigate();

  async function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setSucesso("");
    setCarregando(true);

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      setCarregando(false);
      return;
    }

    if (senha.length < 6) {
      setErro("A senha precisa ter no mínimo 6 caracteres.");
      setCarregando(false);
      return;
    }

    try {
      const resposta = await axios.post("http://localhost:3333/cadastro", {
        nomeCompleto, 
        email,
        senha,
        cpf, 
        telefone: "", 
        data_nascimento: null
      })

      setSucesso(resposta.data.mensagem || "Conta criada com sucesso!")
      setTimeout(() => {
        navigate("/login")
      }, 2000);

    } catch (error: unknown) { 
      if (axios.isAxiosError(error) && error.response && error.response.data.erro) {
        setErro(error.response.data.erro);
      } else {
        setErro("Não foi possível conectar ao servidor.")
      }
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-white">
      <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-12 bg-gray-50 select-none">
        <div className="max-w-md text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-gray-800 leading-tight">
            Encontre tudo que precisa em <span className="text-orange-500">um só lugar!</span>
          </h2>
          
          <div className="w-full max-w-[360px] my-4">
            <img 
              src="https://illustrations.popsy.co/amber/work-from-home.svg" 
              alt="Ilustração AllShop" 
              className="w-full h-auto drop-shadow-sm"
            />
          </div>
          <div className="flex gap-2 justify-center mt-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-500 p-6 md:p-12 relative overflow-y-auto">
        <div className="rounded-3xl shadow-2xl w-full max-w-[450px] bg-white p-8 md:p-10 flex flex-col items-center z-10 my-auto">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl mb-4 bg-orange-500 shadow-md shadow-orange-500/20">
            <span className="text-white font-black text-2xl tracking-wider">A</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Criar conta</h1>
          <p className="text-sm text-gray-400 mb-6 text-center">É rápido e gratuito.</p>
          {erro && (
            <p className="text-sm text-red-500 bg-red-50 w-full p-3 rounded-xl text-center mb-4 font-medium border border-red-200">
              {erro}
            </p>
          )}
          {sucesso && (
            <p className="text-sm text-green-500 bg-green-50 w-full p-3 rounded-xl text-center mb-4 font-medium border border-green-200">
              {sucesso}
            </p>
          )}
          <form onSubmit={handleCadastro} className="w-full flex flex-col gap-3.5">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nome completo <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  required
                  type="text"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-gray-50 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MdOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@email.com"
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-gray-50 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                CPF <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiCreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  required
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="000.000.000-00"
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-gray-50 focus:bg-white transition-all text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Campo: Senha */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Senha *
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    required
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Mín. 6 dígitos"
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-gray-50 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Confirmar *
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    required
                    type="password"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    placeholder="Repita a senha"
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 bg-gray-50 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={carregando}
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white w-full rounded-xl py-3 mt-3 font-bold shadow-lg shadow-orange-500/10 active:scale-[0.99] transition-all disabled:bg-gray-300 disabled:shadow-none disabled:cursor-not-allowed text-sm uppercase tracking-wider"
            >
              {carregando ? "Criando conta..." : "Criar minha conta"}
            </button>
            <div className="flex justify-center w-full text-sm text-gray-500 mt-3 border-t border-gray-100 pt-4">
              <span className="mr-1">Já tem conta?</span>
              <Link 
                to="/login"
                className="font-bold text-orange-500 hover:text-orange-600 hover:underline cursor-pointer transition-colors"
              >
                Entrar na minha conta
              </Link>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}