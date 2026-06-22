import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  const produtos = [
    { id: 1, categoria: "Notebooks", nome: "Notebook Gamer Lenovo LOQ", imagem: "./src/assets/notebook.png", precoAntigo: "R$ 8.748,13", preco: "R$ 5.949,00", desconto: "-24%", parcela: "No PIX ou 10x de R$ 661,00" },
    { id: 2, categoria: "Armazenamento", nome: "SSD Kingston NV3 1TB", imagem: "./src/assets/SSD Kingston NV3 1TB.png", precoAntigo: "R$ 1.294,11", preco: "R$ 899,99", desconto: "-18%", parcela: "No PIX ou 10x de R$ 105,88" },
    { id: 3, categoria: "TVs", nome: "Smart TV 50 Polegadas 4K", imagem: "./src/assets/Smart TV 50 Polegadas 4K.png", precoAntigo: "R$ 2.320,90", preco: "R$ 1.889,90", desconto: "-18%", parcela: "No PIX ou 10x de R$ 188,99" },
    { id: 4, categoria: "Componentes", nome: "Processador Intel Core Ultra 5", imagem: "./src/assets/Processador Intel Core Ultra 5.png", precoAntigo: "R$ 2.117,64", preco: "R$ 1.099,99", desconto: "-38%", parcela: "No PIX ou 10x de R$ 129,41" },
    { id: 5, categoria: "Consoles", nome: "Console PlayStation 5 Slim", imagem: "./src/assets/Console PlayStation 5 Slim.png", precoAntigo: "R$ 4.599,00", preco: "R$ 4.091,07", desconto: "-4%", parcela: "No PIX ou 10x de R$ 439,90" },
    { id: 6, categoria: "Periféricos", nome: "Monitor Gamer 27 Polegadas", imagem: "./src/assets/Monitor Gamer 27 Polegadas.png", preco: "R$ 1.199,90", parcela: "No PIX ou 10x de R$ 119,99" },
    { id: 7, categoria: "Periféricos", nome: "Teclado Mecânico RGB", imagem: "./src/assets/Teclado Mecânico RGB.png", precoAntigo: "R$ 349,90", preco: "R$ 249,90", desconto: "-28%", parcela: "No PIX ou 10x de R$ 24,99" },
    { id: 8, categoria: "Periféricos", nome: "Mouse Gamer RGB", imagem: "./src/assets/Mouse Gamer RGB.png", preco: "R$ 129,90", parcela: "No PIX ou 10x de R$ 12,99" },
    { id: 9, categoria: "Periféricos", nome: "Headset Gamer HyperX Cloud III", imagem: "./src/assets/Headset Gamer HyperX Cloud III.png", precoAntigo: "R$ 799,90", preco: "R$ 599,90", desconto: "-25%", parcela: "No PIX ou 10x de R$ 59,99" },
    { id: 10, categoria: "Acessórios", nome: "Webcam Logitech C920", imagem: "./src/assets/Webcam Logitech C920.png", preco: "R$ 349,90", parcela: "No PIX ou 10x de R$ 34,99" },
    { id: 11, categoria: "Acessórios", nome: "Cadeira Gamer ThunderX3", imagem: "./src/assets/Cadeira Gamer ThunderX3.png", precoAntigo: "R$ 1.299,90", preco: "R$ 999,90", desconto: "-23%", parcela: "No PIX ou 10x de R$ 99,99" },
    { id: 12, categoria: "Notebooks", nome: "Notebook Dell Inspiron 15", imagem: "./src/assets/Notebook Dell Inspiron 15.png", preco: "R$ 3.299,90", parcela: "No PIX ou 10x de R$ 329,99" },
    { id: 13, categoria: "Componentes", nome: "Placa de Vídeo RTX 4060", imagem: "./src/assets/Placa de Vídeo RTX 4060.png", precoAntigo: "R$ 2.499,90", preco: "R$ 2.099,90", desconto: "-16%", parcela: "No PIX ou 10x de R$ 209,99" },
    { id: 14, categoria: "Componentes", nome: "Memória RAM Kingston Fury 16GB", imagem: "./src/assets/Memória RAM Kingston Fury 16GB.png", preco: "R$ 289,90", parcela: "No PIX ou 10x de R$ 28,99" },
    { id: 15, categoria: "Acessórios", nome: "Caixa de Som JBL Flip 6", imagem: "./src/assets/Caixa de Som JBL Flip 6.png", precoAntigo: "R$ 799,90", preco: "R$ 649,90", desconto: "-18%", parcela: "No PIX ou 10x de R$ 64,99" },
    { id: 16, categoria: "Acessórios", nome: "Apple Watch Series 10", imagem: "./src/assets/Apple Watch Series 10.png", preco: "R$ 4.299,90", parcela: "No PIX ou 10x de R$ 429,99" }
  ];

  const banners = [
    { titulo: "Oferta especial em notebooks", subtitulo: "Notebook Gamer Lenovo LOQ com 24% de desconto", imagem: "./src/assets/notebook.png", produtoId: 1 },
    { titulo: "SSD Kingston em promoção", subtitulo: "Mais velocidade para seu computador com 18% OFF", imagem: "./src/assets/SSD Kingston NV3 1TB.png", produtoId: 2 },
    { titulo: "PlayStation 5 Slim", subtitulo: "Console Sony PlayStation 5 Slim com preço especial", imagem: "./src/assets/Console PlayStation 5 Slim.png", produtoId: 5 }
  ];

  const categorias = ["Todos", "Notebooks", "Armazenamento", "TVs", "Componentes", "Consoles", "Periféricos", "Acessórios"];

  const [bannerAtual, setBannerAtual] = useState(0);
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todos");

  useEffect(() => {
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
      : produtos.filter((produto) => produto.categoria === categoriaSelecionada);

  const banner = banners[bannerAtual];

  return (
    <main style={{ backgroundColor: "#fafafa", minHeight: "100vh", padding: "170px 32px 32px" }}>
      <Link to={`/produto/${banner.produtoId}`} style={{ textDecoration: "none", color: "inherit" }}>
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
            cursor: "pointer"
          }}
        >
          <div>
            <p style={{ display: "inline-block", backgroundColor: "#fff", color: "#ff5a00", padding: "8px 14px", borderRadius: "999px", fontWeight: "bold", marginBottom: "14px" }}>
              OFERTA DA SEMANA
            </p>

            <h1 style={{ color: "#fff", fontSize: "38px", marginBottom: "10px" }}>
              {banner.titulo}
            </h1>

            <p style={{ color: "#fff", fontSize: "18px", marginBottom: "22px" }}>
              {banner.subtitulo}
            </p>

            <button style={{ backgroundColor: "#fff", color: "#ff5a00", border: "none", padding: "12px 18px", borderRadius: "12px", fontWeight: "bold", cursor: "pointer" }}>
              Ver oferta
            </button>
          </div>

          <div style={{ height: "230px", backgroundColor: "rgba(255,255,255,0.18)", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <img src={banner.imagem} alt={banner.titulo} style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }} />
          </div>
        </section>
      </Link>

      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "28px" }}>
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
              cursor: "pointer"
            }}
          />
        ))}
      </div>

      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "2em", marginBottom: "6px" }}>Tecnologia em destaque</h1>
        <p style={{ color: "#6b7280" }}>Produtos selecionados para você comprar no AllShop.</p>
      </header>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "30px" }}>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            onClick={() => setCategoriaSelecionada(categoria)}
            style={{
              backgroundColor: categoriaSelecionada === categoria ? "#ff5a00" : "#fff",
              color: categoriaSelecionada === categoria ? "#fff" : "#111",
              border: "1px solid #ddd",
              borderRadius: "999px",
              padding: "10px 18px",
              cursor: "pointer",
              fontWeight: "bold"
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
          gap: "18px"
        }}
      >
        {produtosFiltrados.map((produto) => (
          <Link key={produto.id} to={`/produto/${produto.id}`} style={{ textDecoration: "none", color: "inherit" }}>
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
                minHeight: "420px"
              }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alternarFavorito(produto.id);
                }}
                aria-label={favoritos.includes(produto.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
                title={favoritos.includes(produto.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
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
                  zIndex: 2
                }}
              >
                {favoritos.includes(produto.id) ? "❤️" : "🤍"}
              </button>

              <div style={{ height: "145px", backgroundColor: "#f9fafb", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px", overflow: "hidden" }}>
                <img src={produto.imagem} alt={produto.nome} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>

              <p style={{ fontSize: "0.8em", marginBottom: "8px" }}>⭐ 5.0</p>

              <h2 style={{ fontSize: "1em", fontWeight: 500, minHeight: "72px", display: "flex", alignItems: "flex-start" }}>
                {produto.nome}
              </h2>

              {produto.precoAntigo && (
                <p style={{ textDecoration: "line-through", color: "#6b7280", margin: 0 }}>
                  {produto.precoAntigo}
                </p>
              )}

              <strong style={{ display: "block", fontSize: "1.3em", color: "#111" }}>
                {produto.preco}
                {produto.desconto && (
                  <span style={{ color: "#16a34a", fontSize: "0.7em", marginLeft: "8px" }}>
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
                  alert("Produto adicionado ao carrinho!");
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
                  marginTop: "auto"
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