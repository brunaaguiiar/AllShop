import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const API_URL = "http://localhost:3333"

interface Produto {
  produto_id: number
  nome: string
  descricao?: string
  preco: number
  imagem?: string
  estoque?: number
  categoria?: {
    nome: string
  }
}

interface Comentario {
  nome: string;
  nota: number;
  texto: string;
}

export default function ProdutoDetalhe() {
  const { id } = useParams();

  const [produto, setProduto] = useState<Produto | null>(null)
  const [loading, setLoading] = useState(true);

  const [comentario, setComentario] = useState("")
  const [nota, setNota] = useState(5)
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      nome: "Cliente AllShop",
      nota: 5,
      texto: "Produto excelente, recomendo bastante.",
    },
  ])

  useEffect(() => {
    async function carregarProduto() {
      try {
        const response = await fetch(`${API_URL}/produtos/${id}`)

        if (!response.ok) {
          throw new Error("Produto não encontrado")
        }

        const data = await response.json()
        setProduto(data)
      } catch (error) {
        console.error(error)
        setProduto(null)
      } finally {
        setLoading(false)
      }
    }

    carregarProduto();
  }, [id])

  function enviarAvaliacao() {
    if (!comentario.trim()) {
      alert("Digite um comentário.");
      return
    }

    const novoComentario = {
      nome: "Você",
      nota,
      texto: comentario,
    }

    setComentarios([novoComentario, ...comentarios])
    setComentario("")
    setNota(5)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Carregando produto...
      </div>
    );
  }

  if (!produto) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Produto não encontrado
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 md:px-8 py-28">
      <div className="max-w-7xl mx-auto">
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-10 grid md:grid-cols-2 gap-10">
          <div className="bg-gray-100 rounded-3xl p-6 flex items-center justify-center">
            <img
              src={produto.imagem || "/imagens/notebook.png"}
              alt={produto.nome}
              className="max-h-[420px] object-contain hover:scale-105 transition duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-orange-500 font-semibold mb-2">
              {produto.categoria?.nome || "Produto"}
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {produto.nome}
            </h1>
            <p className="text-gray-500 mt-4 leading-relaxed">
              {produto.descricao || "Sem descrição"}
            </p>
            <div className="mt-8">
              <p className="text-4xl font-bold text-orange-500">
                R$ {Number(produto.preco).toFixed(2)}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Estoque: {produto.estoque}
              </p>
            </div>
            <button className="mt-8 w-full md:w-fit bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition">
              Adicionar ao carrinho
            </button>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-md p-6 md:p-8 mt-8">
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
        </section>
        <section className="bg-white rounded-3xl shadow-md p-6 md:p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Comentários</h2>
          <div className="space-y-4">
            {comentarios.map((item, index) => (
              <div key={index} className="border rounded-2xl p-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <strong>{item.nome}</strong>
                  <span>{"⭐".repeat(item.nota)}</span>
                </div>

                <p className="text-gray-600 mt-2">{item.texto}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}