import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProdutoDetalhe() {
  const { id } = useParams();

  const produtos = [
    {
      id: 1,
      nome: "Notebook Gamer Lenovo LOQ",
      imagem: "/notebook.png",
      descricao: "Notebook gamer com alto desempenho para jogos, estudos e trabalho.",
      precoAntigo: "R$ 8.748,13",
      preco: "R$ 5.949,00",
      desconto: "-24% de desconto"
    },
    {
      id: 2,
      nome: "SSD Kingston NV3 1TB",
      imagem: "/SSD Kingston NV3 1TB.png",
      descricao: "SSD NVMe de alta velocidade para melhorar o desempenho do computador.",
      precoAntigo: "R$ 1.294,11",
      preco: "R$ 899,99",
      desconto: "-18% de desconto"
    },
    {
      id: 3,
      nome: "Smart TV 50 Polegadas 4K",
      imagem: "/Smart TV 50 Polegadas 4K.png",
      descricao: "Smart TV 4K com imagem de alta resolução e recursos inteligentes.",
      precoAntigo: "R$ 2.320,90",
      preco: "R$ 1.889,90",
      desconto: "-18% de desconto"
    },
    {
      id: 4,
      nome: "Processador Intel Core Ultra 5",
      imagem: "/Processador Intel Core Ultra 5.png",
      descricao: "Processador Intel de alto desempenho para computadores modernos.",
      precoAntigo: "R$ 2.117,64",
      preco: "R$ 1.099,99",
      desconto: "-38% de desconto"
    },
    {
      id: 5,
      nome: "Console PlayStation 5 Slim",
      imagem: "/Console PlayStation 5 Slim.png",
      descricao: "Console PlayStation 5 Slim com SSD e alta performance para jogos.",
      precoAntigo: "R$ 4.599,00",
      preco: "R$ 4.091,07",
      desconto: "-4% de desconto"
    },
    {
      id: 6,
      nome: "Monitor Gamer 27 Polegadas",
      imagem: "/Monitor Gamer 27 Polegadas.png",
      descricao: "Monitor gamer de 27 polegadas com ótima qualidade de imagem.",
      precoAntigo: "R$ 1.599,90",
      preco: "R$ 1.199,90",
      desconto: "-25% de desconto"
    },
    {
      id: 7,
      nome: "Teclado Mecânico RGB",
      imagem: "/Teclado Mecânico RGB.png",
      descricao: "Teclado mecânico com iluminação RGB e resposta rápida.",
      precoAntigo: "R$ 349,90",
      preco: "R$ 249,90",
      desconto: "-28% de desconto"
    },
    {
      id: 8,
      nome: "Mouse Gamer RGB",
      imagem: "/Mouse Gamer RGB.png",
      descricao: "Mouse gamer RGB com alta precisão e design ergonômico.",
      precoAntigo: "R$ 199,90",
      preco: "R$ 129,90",
      desconto: "-35% de desconto"
    }
  ];

  const produto = produtos.find((item) => item.id === Number(id));

  const [comentario, setComentario] = useState("");
  const [nota, setNota] = useState(5);

  // Simulação visual.
  // Depois, esses dados devem vir do banco pela API:
  // GET /produtos/:id/avaliacoes
  const [comentarios, setComentarios] = useState([
    {
      nome: "Usuário AllShop",
      nota: 5,
      texto: "Produto muito bom, chegou rápido e bem embalado."
    },
    {
      nome: "Cliente",
      nota: 4,
      texto: "Gostei bastante, atende ao que promete."
    }
  ]);

  if (!produto) {
    return (
      <main
        style={{
          padding: "40px",
          backgroundColor: "#f3f4f6",
          minHeight: "100vh"
        }}
      >
        <h1>Produto não encontrado</h1>
      </main>
    );
  }

  const enviarAvaliacao = () => {
    if (comentario.trim() === "") {
      alert("Digite um comentário antes de enviar.");
      return;
    }

    const novaAvaliacao = {
      nome: "Você",
      nota: nota,
      texto: comentario
    };

    // Simulação visual.
    // Depois, isso será enviado para a API:
    // POST /produtos/:id/avaliacoes
    setComentarios([novaAvaliacao, ...comentarios]);

    setComentario("");
    setNota(5);
  };

  return (
    <main
      style={{
        padding: "40px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh"
      }}
    >
      <section
        style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          padding: "24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginBottom: "30px"
        }}
      >
        <div
          style={{
            backgroundColor: "#f9fafb",
            borderRadius: "16px",
            height: "320px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            src={produto.imagem}
            alt={produto.nome}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain"
            }}
          />
        </div>

        <div>
          <h1>{produto.nome}</h1>

          <p style={{ color: "#6b7280" }}>
            {produto.descricao}
          </p>

          <p
            style={{
              textDecoration: "line-through",
              color: "#6b7280"
            }}
          >
            {produto.precoAntigo}
          </p>

          <strong
            style={{
              display: "block",
              fontSize: "32px",
              color: "#111",
              marginBottom: "10px"
            }}
          >
            {produto.preco}
          </strong>

          <p style={{ color: "#16a34a", fontWeight: "bold" }}>
            {produto.desconto}
          </p>

          <button
            style={{
              backgroundColor: "#ff5a00",
              color: "#fff",
              border: "none",
              borderRadius: "12px",
              padding: "14px 20px",
              fontWeight: "bold",
              cursor: "pointer",
              marginTop: "20px"
            }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </section>

      <section
        style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          padding: "24px",
          marginBottom: "30px"
        }}
      >
        <h2>Avaliar produto</h2>

        <label>
          Nota:
          <select
            value={nota}
            onChange={(e) => setNota(Number(e.target.value))}
            style={{
              marginLeft: "10px",
              padding: "8px",
              borderRadius: "8px"
            }}
          >
            <option value={5}>5 estrelas</option>
            <option value={4}>4 estrelas</option>
            <option value={3}>3 estrelas</option>
            <option value={2}>2 estrelas</option>
            <option value={1}>1 estrela</option>
          </select>
        </label>

        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Escreva sua avaliação sobre o produto..."
          style={{
            width: "100%",
            minHeight: "110px",
            marginTop: "15px",
            padding: "12px",
            borderRadius: "12px",
            border: "1px solid #ddd"
          }}
        />

        <button
          onClick={enviarAvaliacao}
          style={{
            backgroundColor: "#ff5a00",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            padding: "12px 18px",
            fontWeight: "bold",
            cursor: "pointer",
            marginTop: "12px"
          }}
        >
          Enviar avaliação
        </button>
      </section>

      <section
        style={{
          backgroundColor: "#fff",
          borderRadius: "18px",
          padding: "24px"
        }}
      >
        <h2>Comentários e avaliações</h2>

        {comentarios.map((item, index) => (
          <div
            key={index}
            style={{
              borderTop: "1px solid #eee",
              paddingTop: "15px",
              marginTop: "15px"
            }}
          >
            <strong>{item.nome}</strong>
            <p>{"⭐".repeat(item.nota)}</p>
            <p>{item.texto}</p>
          </div>
        ))}
      </section>
    </main>
  );
}