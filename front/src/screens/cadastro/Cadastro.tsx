import { MdOutlineMail } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Cadastro() {
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
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">
              Nome completo *
            </label>
            <div className="relative">
              <MdPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
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
                type="email"
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
                type="password"
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
                type="password"
                placeholder="Repita a senha"
                className="w-full border rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white w-full rounded-xl py-3 font-medium mt-2">
            Criar minha conta
          </button>
          <p className="text-sm text-gray-500 text-center mt-2">
            Já tem conta?{" "}
            <span className="text-orange-500 cursor-pointer">
                <Link to="/login">
              Entrar na minha conta
                </Link>
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}