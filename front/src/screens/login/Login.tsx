import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setErro("")

    try {
      const resposta = await axios.post("http://localhost:3333/login", {
        email,
        senha,
      })

      const { token, usuario } = resposta.data;

      localStorage.setItem("allshop:token", token)
      localStorage.setItem("allshop:usuario", JSON.stringify(usuario))

      navigate("/home")
    } catch (error: unknown) {
      console.error(error)

      function getErrorMessage(err: unknown) {
        if (typeof err === "object" && err !== null) {
          const response = (err as { response?: unknown }).response
          if (typeof response === "object" && response !== null) {
            const data = (response as { data?: unknown }).data
            if (typeof data === "object" && data !== null) {
              const mensagem = (data as { mensagem?: unknown }).mensagem
              if (typeof mensagem === "string") return mensagem
            }
          }
        }
        if (err instanceof Error) return err.message
        return "Erro ao tentar fazer login. Verifique suas credenciais."
      }

      setErro(getErrorMessage(error))
    }
  }

  return (
    <main className="min-h-screen w-full flex bg-gray-50 font-sans">
      <div className="hidden md:flex w-1/2 flex-col items-center justify-center bg-white p-12 select-none">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
            Tudo sobre compras online no <br />
            <span className="text-orange-500">mesmo lugar!</span>
          </h1>
          <div className="flex justify-center pt-4">
            <img 
              src="https://illustrations.popsy.co/amber/work-from-home.svg" 
              alt="Ilustração AllShop" 
              className="h-72 w-auto pointer-events-none"
            />
          </div>
          <div className="flex justify-center gap-2 pt-4">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            <span className="h-2 w-2 rounded-full bg-gray-200"></span>
            <span className="h-2 w-2 rounded-full bg-gray-200"></span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-orange-500 p-6 md:p-12">
        <div className="max-w-md w-full bg-white p-8 md:p-10 rounded-3xl shadow-2xl space-y-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/20 font-bold text-white text-xl mb-3">
              A
            </div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Entrar na AllShop</h2>
            <p className="text-xs text-gray-400 mt-1">Acesse sua conta para continuar</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            {erro && (
              <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-medium border border-red-200">
                {erro}
              </div>
            )}
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 tracking-wider block">
                USUÁRIO OU EMAIL *
              </label>
              <input
                type="email"
                required
                placeholder="usuario@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border border-gray-200 bg-gray-50/50 text-gray-800 rounded-xl focus:outline-none focus:border-orange-400 focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300"
              />
            </div>
            <div className="space-y-1 relative">
              <label className="text-[11px] font-bold text-gray-400 tracking-wider block">
                SENHA *
              </label>
              <input
                type="password"
                required
                placeholder="Sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full h-12 px-4 border border-gray-200 bg-gray-50/50 text-gray-800 rounded-xl focus:outline-none focus:border-orange-400 focus:bg-white text-sm transition-all duration-200 placeholder:text-gray-300"
              />
              <div className="flex justify-end pt-1">
                <a href="/recuperar" className="text-xs text-orange-500 font-semibold hover:underline bg-transparent border-none p-0 cursor-pointer">
                  Esqueceu a senha?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-12 rounded-2xl bg-orange-500 font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-600 active:scale-[0.98] text-sm tracking-wide mt-2 cursor-pointer"
            >
              ENTRAR
            </button>
          </form>
          <div className="text-center text-sm text-gray-500 pt-2">
            Não tem uma conta?{" "}
            <a href="/cadastro" className="text-orange-500 font-bold hover:underline">
              Cadastre-se grátis
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}