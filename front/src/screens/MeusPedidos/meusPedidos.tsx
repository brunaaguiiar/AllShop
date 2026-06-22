import { useEffect, useState } from "react";
import { Button, Spinner } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import {
  IoBagHandleOutline,
  IoArrowBackOutline,
  IoHomeOutline,
  IoCheckmarkCircleOutline,
  IoAlertCircleOutline,
} from "react-icons/io5";
import { pedidoServiceFrontend } from "../../services/pedido.service";

interface Produto {
  nome: string;
  preco?: number;
}

interface ItemPedido {
  id: number;
  quantidade: number;
  preco_unitario: number;
  subtotal: number;
  produto: Produto;
}

interface Pedido {
  id: number;
  status: string;
  forma_pagamento: string;
  valor_total: number;
  data_pedido: string;
  item_pedido: ItemPedido[];
}

export default function MeusPedidos() {
  const navigate = useNavigate();
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarHistorico() {
      try {
        setCarregando(true);
        const dados = await pedidoServiceFrontend.buscarHistorico();
        setPedidos(dados);
      } catch (error: unknown) {
        console.error(error);

        function getMensagemErro(err: unknown) {
          if (typeof err === "object" && err !== null) {
            const response = (err as { response?: unknown }).response;
            if (typeof response === "object" && response !== null) {
              const data = (response as { data?: unknown }).data;
              if (typeof data === "object" && data !== null) {
                const mensagem = (data as { error?: unknown }).error;
                if (typeof mensagem === "string") return mensagem;
              }
            }
          }
          if (error instanceof Error) return error.message;
          if (typeof error === "string") return error;
          return "Erro ao carregar o histórico de pedidos.";
        }

        setErro(getMensagemErro(error));
      } finally {
        setCarregando(false);
      }
    }

    carregarHistorico();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 pt-24">
      <section className="w-full max-w-2xl mx-auto rounded-2xl bg-white p-8 shadow-lg text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
          <IoBagHandleOutline className="text-3xl" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Meus Pedidos</h1>
        <p className="mt-3 text-gray-500">
          Acompanhe o status e o histórico das suas compras feitas na AllShop.
        </p>

        {carregando && (
          <div className="my-12 flex flex-col items-center justify-center gap-3">
            <Spinner color="warning" size="lg" />
            <p className="text-gray-500 text-sm font-medium">
              Buscando seus pedidos no banco de dados...
            </p>
          </div>
        )}

        {!carregando && erro && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 border border-red-200 text-left flex items-start gap-3">
            <IoAlertCircleOutline className="text-2xl text-red-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-red-800">Ops! Algo deu errado</h3>
              <p className="text-sm text-red-700 mt-1">{erro}</p>
            </div>
          </div>
        )}

        {!carregando && !erro && pedidos.length === 0 && (
          <div className="my-12 border-2 border-dashed border-gray-200 rounded-2xl p-8">
            <p className="text-gray-500 font-medium">
              Você ainda não realizou nenhuma compra.
            </p>
            <Button
              onPress={() => navigate("/home")}
              className="mt-4 bg-orange-500 text-white font-semibold rounded-xl"
            >
              Explorar produtos
            </Button>
          </div>
        )}

        {!carregando && !erro && pedidos.length > 0 && (
          <div className="mt-6 flex flex-col gap-4 text-left">
            {pedidos.map((pedido) => (
              <div
                key={pedido.id}
                className="rounded-xl border border-gray-200 bg-gray-50 p-5 shadow-sm"
              >
                <div className="flex items-start justify-between border-b border-gray-200 pb-3 mb-3">
                  <div className="flex items-start gap-3">
                    <IoCheckmarkCircleOutline className="mt-1 text-xl text-orange-500" />
                    <div>
                      <h2 className="font-bold text-gray-800">Pedido #{pedido.id}</h2>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Realizado em: {new Date(pedido.data_pedido).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600 uppercase">
                    {pedido.status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 text-sm text-gray-600">
                  <p>
                    <strong>Forma de Pagamento:</strong> {pedido.forma_pagamento}
                  </p>
                  <div className="mt-2 rounded-lg bg-white p-3 border border-gray-100 flex flex-col gap-1.5">
                    <strong className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                      Itens do Pedido:
                    </strong>
                    {pedido.item_pedido?.map((item) => (
                      <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                        <span>
                          {item.quantidade}x <span className="font-medium text-gray-800">{item.produto?.nome}</span>
                        </span>
                        <span className="text-gray-500">
                          R$ {item.subtotal.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-right text-base font-bold text-gray-800">
                    Total: <span className="text-orange-500">R$ {Number(pedido.valor_total).toFixed(2).replace(".", ",")}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button
            onPress={() => navigate("/perfil")}
            className="h-12 bg-black text-white rounded-xl font-semibold"
          >
            <span className="flex w-full items-center justify-center gap-2">
              <IoArrowBackOutline className="text-xl" /> Voltar ao perfil
            </span>
          </Button>
          <Button
            onPress={() => navigate("/home")}
            className="h-12 border border-gray-300 bg-white text-gray-700 rounded-xl font-semibold"
          >
            <span className="flex w-full items-center justify-center gap-2">
              <IoHomeOutline className="text-xl" /> Ir para home
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
}