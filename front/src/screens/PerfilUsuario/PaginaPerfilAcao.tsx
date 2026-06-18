import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import {
  IoArrowBackOutline,
  IoBagHandleOutline,
  IoCardOutline,
  IoHomeOutline,
  IoLocationOutline,
} from "react-icons/io5";

type PaginaPerfilAcaoProps = {
  tipo: "pedidos" | "enderecos" | "carteira";
};

const conteudo = {
  pedidos: {
    titulo: "Meus Pedidos",
    descricao: "Aqui você poderá acompanhar compras, status e entregas.",
    Icone: IoBagHandleOutline,
  },
  enderecos: {
    titulo: "Endereços",
    descricao: "Aqui você poderá cadastrar e editar seus endereços de entrega.",
    Icone: IoLocationOutline,
  },
  carteira: {
    titulo: "Minha carteira / Cartões",
    descricao: "Aqui você poderá gerenciar cartões e formas de pagamento.",
    Icone: IoCardOutline,
  },
};

export default function PaginaPerfilAcao({ tipo }: PaginaPerfilAcaoProps) {
  const navigate = useNavigate();
  const { titulo, descricao, Icone } = conteudo[tipo];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <section className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
          <Icone className="text-3xl" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800">{titulo}</h1>
        <p className="mt-3 text-gray-500">{descricao}</p>
        <p className="mt-2 text-sm text-gray-400">
          Página em construção.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            onPress={() => navigate("/perfil")}
            className="h-12 flex-1 bg-black text-white"
          >
            <IoArrowBackOutline className="text-xl" />
            Voltar ao perfil
          </Button>

          <Button
            onPress={() => navigate("/home")}
            className="h-12 flex-1 border border-gray-300 bg-white text-gray-700"
          >
            <IoHomeOutline className="text-xl" />
            Ir para home
          </Button>
        </div>
      </section>
    </div>
  );
}
