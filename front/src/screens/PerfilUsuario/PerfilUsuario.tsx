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
  const usuarioSalvo = JSON.parse(
    localStorage.getItem("allshop:usuario") ??
      '{"nome":"Ana Luíza","email":"analuiza@email.com"}'
  );

  const sair = () => {
    localStorage.removeItem("allshop:token");
    sessionStorage.clear();
    navigate("/login");
  };

  const botaoPadrao = `
    w-full
    h-16
    rounded-xl
    text-lg
    font-semibold
    flex
    items-center
    justify-center
    gap-3
    transition-all
    duration-300
    hover:bg-orange-500
    hover:text-white
    hover:scale-[1.02]
    focus:ring-4
    focus:ring-orange-300
  `;
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
                {usuarioSalvo.nome}
              </h2>
            </div>
          </div>

          {/* Campo E-mail */}
          <div className="border rounded-xl p-3 flex items-center gap-3">
            <IoMailOutline className="text-gray-400 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">E-mail</p>
              <h2 className="font-semibold text-gray-800">
                {usuarioSalvo.email}
              </h2>
            </div>
          </div>

          <Button
            onPress={() => navigate("/editar-perfil")}
            className={`${botaoPadrao} bg-black text-white`}
          >
            <IoCreateOutline className="text-2xl" />
            Editar Perfil
          </Button>

          <Button
            onPress={() => navigate("/meus-pedidos")}
            className={`${botaoPadrao} bg-white border border-gray-300 text-gray-700`}
          >
            <IoBagHandleOutline className="text-2xl" />
            Meus Pedidos
          </Button>

          <Button
            onPress={() => navigate("/enderecos")}
            className={`${botaoPadrao} bg-white border border-gray-300 text-gray-700`}
          >
            <IoLocationOutline className="text-2xl" />
            Endereços
          </Button>

          <Button
            onPress={() => navigate("/minha-carteira")}
            className={`${botaoPadrao} bg-white border border-gray-300 text-gray-700`}
          >
            <IoCardOutline className="text-2xl" />
            Minha carteira / Cartões
          </Button>

          <Button
            onPress={sair}
            className={`${botaoPadrao} bg-red-500 text-white hover:bg-red-700`}
          >
            <IoLogOutOutline className="text-2xl" />
            Sair
          </Button>

        </div>
      </div>
    </div>
  );
}
