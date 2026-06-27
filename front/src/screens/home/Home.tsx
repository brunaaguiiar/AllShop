import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Categoria {
  nome: string;
}

interface Produto {
  produto_id: number;
  nome: string;
  descricao?: string;
  imagem?: string;
  preco?: number;
  precoAntigo?: string;
  desconto?: string;
  parcela?: string;
  categoria?: Categoria;
}

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const banners = [
    {
      titulo: "Oferta especial em notebooks",
      subtitulo: "Notebook Gamer Lenovo LOQ com 24% de desconto",
      imagem: "/imagens/notebook.png",
      produtoId: 1,
    },
    {
      titulo: "SSD Kingston em promoção",
      subtitulo: "Mais velocidade para seu computador com 18% OFF",
      imagem: "/imagens/SSD Kingston NV3 1TB.png",
      produtoId: 2,
    },
    {
      titulo: "PlayStation 5 Slim",
      subtitulo: "Console Sony PlayStation 5 Slim com preço especial",
      imagem: "/imagens/Console PlayStation 5 Slim.png",
      produtoId: 5,
    },
  ];

  const categorias = [
    "Todos",
    "Games",
    "Processadores",
    "Computadores",
    "Refrigeração",
    "Periféricos",
  ];

  const [bannerAtual, setBannerAtual] = useState(0);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");
  const API_URL = "http://localhost:3000";

  async function adicionarAoCarrinho(idProduto: number) {
    try {
      const response = await fetch(`${API_URL}/carrinho`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_usuario: 1,
          id_produto: idProduto,
          quantidade: 1,
        }),
      });

      if (response.ok) {
        alert("Produto adicionado ao carrinho!");
      } else {
        alert("Erro ao adicionar produto.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao conectar com o servidor.");
    }
  }

  async function carregarProdutos() {
    try {
      const response = await fetch(`${API_URL}/produtos`);
      const data = await response.json();

      setProdutos(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }
  useEffect(() => {
    async function loadProdutos() {
      await carregarProdutos();
    }

    loadProdutos();
    const intervalo = setInterval(() => {
      setBannerAtual((atual) => (atual + 1) % banners.length);
    }, 4000);

    return () => clearInterval(intervalo);
  }, [banners.length]);

  const alternarFavorito = (id: number) => {
    setFavoritos((favoritosAtuais) =>
      favoritosAtuais.includes(id)
        ? favoritosAtuais.filter((produtoId) => produtoId !== id)
        : [...favoritosAtuais, id]
    );
  };

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) => produto.categoria?.nome === categoriaSelecionada
        );

  const banner = banners[bannerAtual];

  return (
    <main
      style={{
        backgroundColor: "#fafafa",
        minHeight: "100vh",
        padding: "170px 32px 32px",
      }}
    >
      <Link
        to={`/produto/${banner.produtoId}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <section
          aria-label="Ofertas em destaque"
          style={{
            width: "100%",
            minHeight: "300px",
            borderRadius: "24px",
            overflow: "hidden",
            marginBottom: "32px",
            background: "linear-gradient(135deg, #ff5a00, #ff8a00)",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            alignItems: "center",
            padding: "32px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
            cursor: "pointer",
          }}
        >
          <div>
            <p
              style={{
                display: "inline-block",
                backgroundColor: "#fff",
                color: "#ff5a00",
                padding: "8px 14px",
                borderRadius: "999px",
                fontWeight: "bold",
                marginBottom: "14px",
              }}
            >
              OFERTA DA SEMANA
            </p>

            <h1
              style={{ color: "#fff", fontSize: "38px", marginBottom: "10px" }}
            >
              {banner.titulo}
            </h1>

            <p
              style={{ color: "#fff", fontSize: "18px", marginBottom: "22px" }}
            >
              {banner.subtitulo}
            </p>

            <button
              style={{
                backgroundColor: "#fff",
                color: "#ff5a00",
                border: "none",
                padding: "12px 18px",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Ver oferta
            </button>
          </div>

          <div
            style={{
              height: "230px",
              backgroundColor: "rgba(255,255,255,0.18)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={banner.imagem}
              alt={banner.titulo}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
              }}
            />
          </div>
        </section>
      </Link>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginBottom: "28px",
        }}
      >
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setBannerAtual(index)}
            aria-label={`Ir para oferta ${index + 1}`}
            style={{
              width: bannerAtual === index ? "28px" : "10px",
              height: "10px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: bannerAtual === index ? "#ff5a00" : "#c4c4c4",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "2em", marginBottom: "6px" }}>
          Tecnologia em destaque
        </h1>
        <p style={{ color: "#6b7280" }}>
          Produtos selecionados para você comprar no AllShop.
        </p>
      </header>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSelecionada(categoria)}
            style={{
              backgroundColor:
                categoriaSelecionada === categoria ? "#ff5a00" : "#fff",
              color: categoriaSelecionada === categoria ? "#fff" : "#111",
              border: "1px solid #ddd",
              borderRadius: "999px",
              padding: "10px 18px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {categoria}
          </button>
        ))}
      </div>

      <section
        aria-label="Lista de produtos"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
        }}
      >
        {produtosFiltrados.map((produto) => (
          <Link
            key={produto.produto_id}
            to={`/produto/${produto.produto_id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <article
              style={{
                position: "relative",
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                minHeight: "420px",
              }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alternarFavorito(produto.produto_id);
                }}
                aria-label={
                  favoritos.includes(produto.produto_id)
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
                title={
                  favoritos.includes(produto.produto_id)
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"
                }
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  border: "1px solid #eee",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  fontSize: "18px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                  zIndex: 2,
                }}
              >
                {favoritos.includes(produto.produto_id) ? "❤️" : "🤍"}
              </button>

              <div
                style={{
                  height: "145px",
                  backgroundColor: "#f9fafb",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={
                    produto.produto_id === 6
                      ? "/imagens/Console PlayStation 5 Slim.png"
                      : produto.produto_id === 7
                        ? "/imagens/Controle sem fio Dualsense Midnight.png"
                        : produto.produto_id === 8
                          ? "/imagens/Processador Ryzen 5 5600G.png"
                          : produto.produto_id === 9
                            ? "/imagens/PC Gamer Completo RGB Ryzen 5.png"
                            : produto.produto_id === 10
                              ? "/imagens/Water Cooler Rise Mode Gamer Black.png"
                              : produto.produto_id === 11
                                ? "/imagens/Mouse Gamer RGB.png"
                                : produto.produto_id === 12
                                  ? "/imagens/Teclado Mecânico RGB.png"
                                  : produto.produto_id === 13
                                    ? "/imagens/Headset Gamer HyperX Cloud III.png"
                                    : produto.produto_id === 14
                                      ? "/imagens/Webcam Logitech C920.png"
                                      : produto.produto_id === 15
                                        ? "/imagens/Processador Intel Core Ultra 5.png"
                                        : produto.produto_id === 16
                                          ? "/imagens/Placa de Vídeo RTX 4060.png"
                                          : produto.produto_id === 17
                                            ? "/imagens/Memória RAM Kingston Fury 16GB.png"
                                            : produto.produto_id === 18
                                              ? "/imagens/SSD Kingston NV3 1TB.png"
                                              : produto.produto_id === 19
                                                ? "/imagens/Notebook Dell Inspiron 15.png"
                                                : produto.produto_id === 20
                                                  ? "/imagens/Monitor Gamer 27 Polegadas.png"
                                                  : produto.produto_id === 21
                                                    ? "/imagens/Smart TV 50 Polegadas 4K.png"
                                                    : produto.produto_id === 22
                                                      ? "/imagens/Apple Watch Series 10.png"
                                                      : produto.produto_id ===
                                                          23
                                                        ? "/imagens/Cadeira Gamer ThunderX3.png"
                                                        : produto.produto_id ===
                                                            24
                                                          ? "/imagens/Caixa de Som JBL Flip 6.png"
                                                          : "/imagens/notebook.png"
                  }
                  alt={produto.nome}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>

              <p style={{ fontSize: "0.8em", marginBottom: "8px" }}>⭐ 5.0</p>

              <h2
                style={{
                  fontSize: "1em",
                  fontWeight: 500,
                  minHeight: "72px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                {produto.nome}
              </h2>

              {produto.precoAntigo && (
                <p
                  style={{
                    textDecoration: "line-through",
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  {produto.precoAntigo}
                </p>
              )}

              <strong
                style={{ display: "block", fontSize: "1.3em", color: "#111" }}
              >
                R$ {Number(produto.preco).toFixed(2)}
                {produto.desconto && (
                  <span
                    style={{
                      color: "#16a34a",
                      fontSize: "0.7em",
                      marginLeft: "8px",
                    }}
                  >
                    {produto.desconto}
                  </span>
                )}
              </strong>

              <p style={{ fontSize: "0.8em", color: "#6b7280" }}>
                {produto.parcela}
              </p>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  adicionarAoCarrinho(produto.produto_id);
                }}
                style={{
                  width: "100%",
                  backgroundColor: "#ff5a00",
                  color: "#fff",
                  border: "none",
                  padding: "10px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: "auto",
                }}
              >
                Adicionar ao carrinho
              </button>
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
}
