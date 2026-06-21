import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import {
  IoBagHandleOutline,
  IoCardOutline,
  IoCreateOutline,
  IoLocationOutline,
  IoLogOutOutline,
  IoMailOutline,
  IoPersonOutline,
  IoCallOutline,
} from "react-icons/io5";

function buscarUsuarioSalvo() {
  try {
    const usuario = localStorage.getItem("allshop:usuario")
    return usuario ? JSON.parse(usuario) : null
  } catch {
    return null;
  }
}

export default function PerfilUsuario() {
  const navigate = useNavigate();
  const usuarioSalvo = buscarUsuarioSalvo();

  if (!usuarioSalvo) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 gap-4">
        <p className="text-gray-600 font-medium">Você precisa estar logado para ver seu perfil.</p>
        <Button onPress={() => navigate("/login")} className="bg-orange-500 text-white rounded-2xl px-8">Fazer Login</Button>
      </div>
    )
  }

  const sair = () => {
    localStorage.removeItem("allshop:token");
    localStorage.removeItem("allshop:usuario");
    sessionStorage.clear();
    navigate("/login");
  };

  const botaoPadrao = `
    w-full h-14 rounded-2xl text-sm font-bold flex items-center justify-start px-6 gap-4 
    transition-all duration-300 border-none shadow-sm hover:shadow-md active:scale-[0.98]`

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 pb-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Minha Conta</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1 bg-white p-9 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Dados Pessoais</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-orange-100 p-2.5 rounded-xl text-orange-500"><IoPersonOutline size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Nome</p>
                  <h2 className="font-semibold text-gray-800 text-sm">{usuarioSalvo.nome}</h2>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-orange-100 p-2.5 rounded-xl text-orange-500"><IoMailOutline size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">E-mail</p>
                  <h2 className="font-semibold text-gray-800 text-sm">{usuarioSalvo.email}</h2>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-orange-100 p-2.5 rounded-xl text-orange-500"><IoCallOutline size={20} /></div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400">Telefone</p>
                  <h2 className="font-semibold text-gray-800 text-sm">{usuarioSalvo.telefone || "Não informado"}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
             <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Configurações</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <Button onPress={() => navigate("/editar-perfil")} className={`${botaoPadrao} bg-black text-white hover:bg-gray-800`}>
                     <IoCreateOutline size={20} /> Editar Perfil
                   </Button>
                   <Button onPress={() => navigate("/meus-pedidos")} className={`${botaoPadrao} bg-gray-100 text-gray-700 hover:bg-gray-200`}>
                     <IoBagHandleOutline size={20} /> Meus Pedidos
                   </Button>
                   <Button onPress={() => navigate("/enderecos")} className={`${botaoPadrao} bg-gray-100 text-gray-700 hover:bg-gray-200`}>
                     <IoLocationOutline size={20} /> Endereços
                   </Button>
                   <Button onPress={() => navigate("/minha-carteira")} className={`${botaoPadrao} bg-gray-100 text-gray-700 hover:bg-gray-200`}>
                     <IoCardOutline size={20} /> Minha carteira / Cartões
                   </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <Button onPress={sair} className={`${botaoPadrao} bg-red-50 text-red-500 hover:bg-red-100`}>
                      <IoLogOutOutline size={20} /> Sair da conta
                    </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}