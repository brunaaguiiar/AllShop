import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import {
  IoPersonOutline,
  IoMailOutline,
  IoLogOutOutline,
  IoBagHandleOutline,
  IoLocationOutline,
  IoCreateOutline,
  IoCardOutline,
} from "react-icons/io5";

export default function PerfilUsuario() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          Meu Perfil
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Informações da conta
        </p>

        <div className="flex flex-col gap-4">

          {/* Campo Nome */}
          <div className="border rounded-xl p-3 flex items-center gap-3">
            <IoPersonOutline className="text-gray-400 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Nome</p>
              <h2 className="font-semibold text-gray-800">
                Ana Luíza
              </h2>
            </div>
          </div>

          {/* Campo E-mail */}
          <div className="border rounded-xl p-3 flex items-center gap-3">
            <IoMailOutline className="text-gray-400 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">E-mail</p>
              <h2 className="font-semibold text-gray-800">
                analuiza@email.com
              </h2>
            </div>
          </div>

          <Button
            onPress={() => navigate("/editar-perfil")}
            className="bg-black text-white font-medium rounded-xl flex items-center justify-center gap-2 py-2.5"
          >
            <IoCreateOutline className="text-lg" />
            Editar Perfil
          </Button>

          <Button
            onPress={() => navigate("/meus-pedidos")}
            className="border border-gray-300 font-medium rounded-xl text-gray-700 bg-white flex items-center justify-center gap-2 py-2.5"
          >
            <IoBagHandleOutline className="text-lg" />
            Meus Pedidos
          </Button>

          <Button
            onPress={() => navigate("/enderecos")}
            className="border border-gray-300 font-medium rounded-xl text-gray-700 bg-white flex items-center justify-center gap-2 py-2.5"
          >
            <IoLocationOutline className="text-lg text-gray-500" />
            Endereços
          </Button>

          <Button
            onPress={() => navigate("/minha-carteira")}
            className="border border-gray-300 font-medium rounded-xl text-gray-700 bg-white flex items-center justify-center gap-2 py-2.5"
          >
            <IoCardOutline className="text-lg text-gray-500" />
            Minha carteira / Cartões
          </Button>

          <Button
            onPress={() => navigate("/login")}
            className="bg-red-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 py-2.5"
          >
            <IoLogOutOutline className="text-lg" />
            Sair
          </Button>

        </div>
      </div>
    </div>
  );
}