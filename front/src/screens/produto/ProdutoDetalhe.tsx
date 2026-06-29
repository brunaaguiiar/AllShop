import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProdutoDetalhe() {
  const { id } = useParams();

  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer Lenovo LOQ",
      imagem: "/imagens/notebook.png",
      descricao:
        "Notebook gamer com alto desempenho para jogos, estudos e trabalho.",
      precoAntigo: "R$ 8.748,13",
      preco: "R$ 5.949,00",
      desconto: "-24%",
    },
  ]

  const produto = produtos.find((item) => item.id === Number(id))

  const [comentario, setComentario] = useState("")
  const [nota, setNota] = useState(5);

  const [comentarios, setComentarios] = useState([
    {
      nome: "Usuário AllShop",
      nota: 5,
      texto: "Produto muito bom, chegou rápido e bem embalado.",
    },
  ])

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Produto não encontrado</h1>
      </div>
    );
  }

  function enviarAvaliacao() {
    if (!comentario.trim()) return;

    setComentarios([
      {
        nome: "Você",
        nota,
        texto: comentario,
      },
      ...comentarios,
    ]);

    setComentario("")
    setNota(5)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-4 md:px-8 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 rounded-3xl p-6 flex justify-center items-center">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="max-h-[400px] object-contain hover:scale-105 transition"
            />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {produto.nome}
            </h1>

            <p className="text-gray-500 mt-4 leading-relaxed">
              {produto.descricao}
            </p>

            <p className="line-through text-gray-400 mt-6">
              {produto.precoAntigo}
            </p>

            <div className="flex items-center gap-4 mt-2">
              <span className="text-4xl font-bold text-orange-500">
                {produto.preco}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">
                {produto.desconto}
              </span>
            </div>

            <button className="mt-8 w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition">
              Adicionar ao carrinho
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Avaliar produto</h2>

          <select
            value={nota}
            onChange={(e) => setNota(Number(e.target.value))}
            className="border rounded-xl px-4 py-3 mb-4 w-full md:w-60"
          >
            <option value={5}>⭐⭐⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={1}>⭐</option>
          </select>

          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Escreva sua avaliação..."
            className="w-full border rounded-2xl p-4 min-h-[140px]"
          />

          <button
            onClick={enviarAvaliacao}
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            Enviar avaliação
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Comentários</h2>

          <div className="space-y-4">
            {comentarios.map((item, index) => (
              <div
                key={index}
                className="border rounded-2xl p-4 bg-gray-50"
              >
                <div className="flex justify-between">
                  <strong>{item.nome}</strong>
                  <span>{"⭐".repeat(item.nota)}</span>
                </div>

                <p className="text-gray-600 mt-2">{item.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}