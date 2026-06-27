import { Button } from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import { FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:3000";

type CartItem = {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export default function Carrinho() {
  const navigate = useNavigate();

 const [items, setItems] = useState<CartItem[]>([]);

 useEffect(() => {
  carregarCarrinho();
}, []);

async function carregarCarrinho() {
   try {
    const response = await fetch(
      `${API_URL}/carrinho?id_usuario=1`
    );

    const data = await response.json();

    console.log(data);

    const produtos = data.item_carrinho.map((item: any) => ({
      id: item.produto.produto_id,
      name: item.produto.nome,
      category: "Produto",
      price: Number(item.produto.preco),
      quantity: item.quantidade,
    image:
    item.produto.produto_id === 6
    ? "/imagens/Console PlayStation 5 Slim.png"
    : item.produto.produto_id === 7
    ? "/imagens/Controle sem fio Dualsense Midnight.png"
    : item.produto.produto_id === 8
    ? "/imagens/Processador Ryzen 5 5600G.png"
    : item.produto.produto_id === 9
    ? "/imagens/PC Gamer Completo RGB Ryzen 5.png"
    : item.produto.produto_id === 10
    ? "/imagens/Water Cooler Rise Mode Gamer Black.png"
    : item.produto.produto_id === 11
    ? "/imagens/Mouse Gamer RGB.png"
    : item.produto.produto_id === 12
    ? "/imagens/Teclado Mecânico RGB.png"
    : item.produto.produto_id === 13
    ? "/imagens/Headset Gamer HyperX Cloud III.png"
    : item.produto.produto_id === 14
    ? "/imagens/Webcam Logitech C920.png"
    : item.produto.produto_id === 15
    ? "/imagens/Processador Intel Core Ultra 5.png"
    : item.produto.produto_id === 16
    ? "/imagens/Placa de Vídeo RTX 4060.png"
    : item.produto.produto_id === 17
    ? "/imagens/Memória RAM Kingston Fury 16GB.png"
    : item.produto.produto_id === 18
    ? "/imagens/SSD Kingston NV3 1TB.png"
    : "/imagens/notebook.png",
    }));

    setItems(produtos);

    console.log(produtos);

  } catch (error) {
    console.error(error);
  }
}
  const subtotal = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [items]);

  const updateQuantity = (itemId: number, nextQuantity: number) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, nextQuantity) }
          : item
      )
    );
  };

  const removeItem = async (itemId: number) => {
  try {
    const response = await fetch(
      `${API_URL}/carrinho/${itemId}?id_usuario=1`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.id !== itemId)
      );
    } else {
      alert("Erro ao remover produto.");
    }
  } catch (error) {
    console.error(error);
    alert("Erro ao conectar com o servidor.");
  }
};

  if (items.length === 0) {
    return (
      <section className="flex min-h-[calc(100vh-5rem)] items-start justify-center bg-slate-50 px-6 py-20">
        <div className="flex max-w-md flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white text-orange-500 shadow-sm ring-1 ring-slate-200">
            <FiShoppingBag size={30} />
          </div>

          <h1 className="text-2xl font-bold text-slate-950">
            Seu carrinho está vazio
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Que tal explorar nossas ofertas?
          </p>

          <Button
            onPress={() => navigate("/home")}
            className="mt-7 h-12 rounded-xl bg-orange-500 px-8 font-semibold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
          >
            Ver produtos
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-slate-950">
          Seu carrinho
        </h1>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="space-y-4">
            {items.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-base font-bold text-slate-950">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-base font-bold text-orange-600">
                    {formatCurrency(item.price)}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                  <Button
                    isIconOnly
                    aria-label={`Remover ${item.name}`}
                    variant="light"
                    onPress={() => removeItem(item.id)}
                    className="h-9 w-9 min-w-9 text-slate-500 hover:text-orange-600"
                  >
                    <FiTrash2 size={18} />
                  </Button>

                  <div className="flex h-10 items-center rounded-xl border border-slate-200 bg-slate-50">
                    <Button
                      isIconOnly
                      aria-label="Diminuir quantidade"
                      variant="light"
                      onPress={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-10 w-10 min-w-10 text-slate-500"
                    >
                      <FiMinus size={16} />
                    </Button>

                    <span className="w-10 text-center text-sm font-semibold text-slate-950">
                      {item.quantity}
                    </span>

                    <Button
                      isIconOnly
                      aria-label="Aumentar quantidade"
                      variant="light"
                      onPress={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-10 w-10 min-w-10 text-slate-500"
                    >
                      <FiPlus size={16} />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">Resumo</h2>

            <div className="mt-5 space-y-3 border-b border-slate-200 pb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-medium text-slate-950">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Frete</span>
                <span className="font-semibold text-emerald-600">Grátis</span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-bold text-slate-950">Total</span>
              <span className="text-lg font-bold text-orange-600">
                {formatCurrency(subtotal)}
              </span>
            </div>

            <Button
             onPress={async () => {
               try {
                 const response = await fetch(
                 "http://localhost:3000/carrinho/finalizar?id_usuario=1",
                {
                 method: "POST",
                }
              );

    if (!response.ok) {
      throw new Error("Erro ao finalizar compra");
    }

    alert("Compra finalizada com sucesso!");

    setItems([]);

    navigate("/home");

  } catch (error) {
    console.error(error);
    alert("Erro ao finalizar compra.");
  }
}}
              className="mt-7 h-12 w-full rounded-xl bg-orange-500 font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
           >
              Finalizar compra
            </Button>

            <Button
              variant="light"
              onPress={() => navigate("/home")}
              className="mt-3 h-10 w-full rounded-xl font-medium text-slate-600 hover:text-orange-600"
            >
              Continuar comprando
            </Button>
          </aside>
        </div>
      </div>
    </section>
  );
}