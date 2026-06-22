import { useState } from "react";

const formatarMoeda = (valor: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor);
};

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  estoque: number;
  imagem: string;
}

export default function FornecedorDashboard() {
  const [produtos, setProdutos] = useState<Produto[]>([
    {
      id: 1,
      nome: "Fone Bluetooth Pro",
      descricao: "Cancelamento de ruído e 30h bateria",
      preco: 199.9,
      categoria: "Eletrônicos",
      estoque: 24,
      imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    },
    {
      id: 2,
      nome: "Camiseta Premium",
      descricao: "100% algodão",
      preco: 79.9,
      categoria: "Vestuário",
      estoque: 3,
      imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
  ]);

  const [busca, setBusca] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editando, setEditando] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [imagemPreview, setImagemPreview] = useState("");

  const [novoProduto, setNovoProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    categoria: "",
    estoque: 0,
    imagem: "",
  });

  const filtrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  );

  const valorTotal = produtos.reduce((acc, p) => acc + p.preco * p.estoque, 0);

  const estoqueBaixo = produtos.filter((p) => p.estoque < 5).length;

  function handleImagem(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImagemPreview(url);
    setNovoProduto({ ...novoProduto, imagem: url });
  }

  function salvarProduto() {
    if (
      !novoProduto.nome.trim() ||
      novoProduto.preco <= 0 ||
      !novoProduto.categoria.trim()
    ) {
      alert("Preencha os campos corretamente.");
      return;
    }

    if (editando && editId !== null) {
      setProdutos((prev) =>
        prev.map((p) => (p.id === editId ? { ...novoProduto, id: editId } : p))
      );
    } else {
      setProdutos((prev) => [
        ...prev,
        {
          ...novoProduto,
          id: Date.now(),
        },
      ]);
    }

    setNovoProduto({
      id: 0,
      nome: "",
      descricao: "",
      preco: 0,
      categoria: "",
      estoque: 0,
      imagem: "",
    });

    setImagemPreview("");
    setModalOpen(false);
    setEditId(null);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-24">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Painel do Fornecedor
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Produtos ativos</p>
          <h2 className="text-3xl font-bold mt-1">{produtos.length}</h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500">
            Valor total em estoque
          </p>
          <h2 className="text-3xl font-bold mt-1 text-orange-600">
            {formatarMoeda(valorTotal)}
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-sm font-medium text-gray-500">Estoque baixo</p>
          <h2 className="text-3xl font-bold mt-1 text-red-600">
            {estoqueBaixo}
          </h2>
        </div>
      </div>

      <div className="flex justify-end gap-4 mb-8">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="w-80 bg-white border border-orange-500 rounded-2xl px-4 py-2 outline-none focus:ring-2 focus:ring-orange-500/20"
        />

        <button
          onClick={() => {
            setEditando(false);
            setEditId(null);
            setNovoProduto({
              id: 0,
              nome: "",
              descricao: "",
              preco: 0,
              categoria: "",
              estoque: 0,
              imagem: "",
            });
            setImagemPreview("");
            setModalOpen(true);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 cursor-pointer rounded-2xl font-semibold transition-all"
        >
          + Adicionar produto
        </button>
      </div> 

      <div className="grid md:grid-cols-3 gap-6">
        {filtrados.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <img src={p.imagem} className="w-full h-48 object-cover" />

            <div className="p-5">
              <h2 className="font-bold text-lg">{p.nome}</h2>
              <p className="text-sm text-gray-500 mb-4">{p.categoria}</p>

              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <span className="text-orange-600 font-bold text-xl">
                  {formatarMoeda(p.preco)}
                </span>
                <span className="text-xs text-gray-400">
                  Estoque: {p.estoque}
                </span>
              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => {
                    setEditando(true);
                    setEditId(p.id);
                    setNovoProduto(p);
                    setImagemPreview(p.imagem);
                    setModalOpen(true);
                  }}
                  className="flex-1 border border-gray-200 rounded-xl py-2 hover:bg-gray-50 cursor-pointer"
                >
                  Editar
                </button>

                <button
                  onClick={() =>
                    setProdutos(produtos.filter((i) => i.id !== p.id))
                  }
                  className="flex-1 bg-red-600 text-white rounded-xl py-2 hover:bg-red-700 cursor-pointer"
                >
                  Remover
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editando ? "Editar Produto" : "Adicionar Produto"}
              </h2>

              <button
                onClick={() => setModalOpen(false)}
                className="text-3xl text-gray-400 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nome do produto
                </label>
                <input
                  value={novoProduto.nome}
                  onChange={(e) =>
                    setNovoProduto({
                      ...novoProduto,
                      nome: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Descrição
                </label>
                <textarea
                  rows={4}
                  value={novoProduto.descricao}
                  onChange={(e) =>
                    setNovoProduto({
                      ...novoProduto,
                      descricao: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Preço (R$)
                  </label>
                  <input
                    type="number"
                    value={novoProduto.preco || ""}
                    onChange={(e) =>
                      setNovoProduto({
                        ...novoProduto,
                        preco: parseFloat(e.target.value) || 0,
                      })
                    }
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Quantidade em estoque
                  </label>
                  <input
                    type="number"
                    value={novoProduto.estoque || ""}
                    onChange={(e) =>
                      setNovoProduto({
                        ...novoProduto,
                        estoque: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full rounded-2xl border border-gray-200 px-4 py-3"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Categoria
                </label>
                <input
                  value={novoProduto.categoria}
                  onChange={(e) =>
                    setNovoProduto({
                      ...novoProduto,
                      categoria: e.target.value,
                    })
                  }
                  className="w-full rounded-2xl border border-gray-200 px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Imagem do produto
                </label>

                <label className="cursor-pointer block border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-orange-500 transition">
                  <p className="text-5xl mb-3">📷</p>
                  <p className="font-medium">Clique para enviar</p>
                  <p className="text-sm text-gray-400">PNG, JPG, WEBP</p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImagem}
                    className="hidden"
                  />
                </label>

                {imagemPreview && (
                  <img
                    src={imagemPreview}
                    className="mt-4 w-full h-52 rounded-2xl object-cover border"
                  />
                )}
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                <p className="text-sm text-gray-500">
                  Valor total desse estoque
                </p>
                <p className="text-2xl font-bold text-orange-600">
                  {formatarMoeda(novoProduto.preco * novoProduto.estoque)}
                </p>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-full py-3 rounded-2xl border border-gray-300 font-medium cursor-pointer"
                >
                  Cancelar
                </button>

                <button
                  onClick={salvarProduto}
                  className="w-full py-3 rounded-2xl bg-orange-500 text-white font-semibold hover:bg-orange-600 cursor-pointer"
                >
                  Salvar Produto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
