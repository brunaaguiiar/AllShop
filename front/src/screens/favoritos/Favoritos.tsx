import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { listarFavoritos,removerFavorito as removerFavoritoApi,} from "../../services/favoritos";

interface Produto {
  produto_id: number;
  nome: string;
  preco: number;
  imagem: string;
}

interface FavoritoItem {
  usuario_id: number;
  produto_id: number;
  produto: Produto;
}

export default function Favoritos() {
  const navigate = useNavigate();

  const [favoritos, setFavoritos] = useState<Produto[]>([]);
  const usuarioId = 1;

  useEffect(() => {
    async function load() {
      try {
        const data = await listarFavoritos(usuarioId);
        console.log("API:", data);

        const produtos = data.map((item: FavoritoItem) => item.produto);
        console.log("Produtos:", produtos);

        setFavoritos(produtos);
      } catch (error) {
        console.error("Erro ao carregar favoritos:", error);
      }
    }

    load();
  }, []);

  const removerFavorito = async (produtoId: number) => {
    try {
      await removerFavoritoApi(usuarioId, produtoId);

      setFavoritos((prev) => prev.filter((item) => item.produto_id !== produtoId));
    } catch (error) {
      console.error("Erro ao remover favorito:", error);
    }
  };

  const formatarPreco = (valor: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Meus Favoritos</h1>

          <p className="mt-2 text-gray-500">
            Você possui {favoritos.length} item(ns) salvo(s)
          </p>
        </div>
        {favoritos.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl bg-white p-16 shadow-sm">
            <div className="mb-6 text-7xl">🤍</div>

            <h2 className="text-2xl font-bold text-gray-800">
              Nenhum favorito ainda
            </h2>

            <p className="mt-3 text-center text-gray-500 max-w-md">
              Explore a loja e salve seus produtos preferidos.
            </p>

            <button
              onClick={() => navigate("/home")}
              className="mt-8 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600 cursor-pointer"
            >
              Voltar para a loja
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {favoritos.map((produto) => (
              <div
                key={produto.produto_id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="h-56 w-full object-cover"
                  />
                  <button
                    onClick={() => removerFavorito(produto.produto_id)}
                    className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110 cursor-pointer"
                  >
                    <LuHeart size={22} className="text-red-500 fill-red-500" />
                  </button>
                </div>
                <div className="p-5">
                  <h2 className="min-h-[56px] text-lg font-bold text-gray-800">
                    {produto.nome}
                  </h2>

                  <p className="mt-3 text-2xl font-bold text-orange-500">
                    {formatarPreco(produto.preco)}
                  </p>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 cursor-pointer">
                    <LuShoppingCart size={18} />
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
