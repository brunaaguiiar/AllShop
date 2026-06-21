import { FormEvent, useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

function formatarTelefone(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);
  if (digitos.length === 0) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 7) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  }
  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function buscarUsuarioSalvo() {
  try {
    const usuario = localStorage.getItem("allshop:usuario");
    return usuario ? JSON.parse(usuario) : { nome: "", email: "", telefone: "" };
  } catch {
    return { nome: "", email: "", telefone: "" };
  }
}

export default function EditarPerfil() {
  const navigate = useNavigate();
  const usuarioSalvo = buscarUsuarioSalvo();
  
  const [nome, setNome] = useState(usuarioSalvo.nome);
  const [email, setEmail] = useState(usuarioSalvo.email);
  const [telefone, setTelefone] = useState(usuarioSalvo.telefone || "");
  const [erro, setErro] = useState("");

  const salvar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      setErro("Por favor, preencha todos os campos.");
      return;
    }

    const novoUsuario = { nome: nome.trim(), email: email.trim(), telefone: telefone.trim() };

    localStorage.setItem("allshop:usuario", JSON.stringify(novoUsuario));
    
    window.dispatchEvent(new Event("usuarioLogado"));
    
    navigate("/perfil");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <form onSubmit={salvar} className="w-full max-w-lg rounded-3xl bg-white p-8 md:p-10 shadow-2xl border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Editar Perfil</h1>
        <p className="text-gray-400 text-sm mb-8">Atualize suas informações pessoais</p>

        <div className="flex flex-col gap-5">
          {/* Nome */}
          <div>
            <label className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 block uppercase">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => { setNome(e.target.value); setErro(""); }}
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 block uppercase">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErro(""); }}
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 block uppercase">Telefone</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => { setTelefone(formatarTelefone(e.target.value)); setErro(""); }}
              placeholder="(00) 00000-0000"
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
            />
          </div>

          {erro && <p className="text-sm font-medium text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">{erro}</p>}

          <div className="flex flex-col gap-3 sm:flex-row mt-4">
            <Button type="submit" className="h-14 flex-1 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20">
              Salvar alterações
            </Button>
            <Button
              type="button"
              onPress={() => navigate("/perfil")}
              className="h-14 flex-1 border border-gray-200 bg-white text-gray-600 font-semibold rounded-2xl hover:bg-gray-50"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}