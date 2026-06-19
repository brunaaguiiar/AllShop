import { Link } from "react-router-dom";

export default function Home() {
  const produtos = [
    { id: 1, nome: "Notebook Gamer Lenovo LOQ", imagem: "/notebook.png", precoAntigo: "R$ 8.748,13", preco: "R$ 5.949,00", desconto: "-24%", parcela: "No PIX ou 10x de R$ 661,00" },
    { id: 2, nome: "SSD Kingston NV3 1TB", imagem: "/SSD Kingston NV3 1TB.png", precoAntigo: "R$ 1.294,11", preco: "R$ 899,99", desconto: "-18%", parcela: "No PIX ou 10x de R$ 105,88" },
    { id: 3, nome: "Smart TV 50 Polegadas 4K", imagem: "/Smart TV 50 Polegadas 4K.png", precoAntigo: "R$ 2.320,90", preco: "R$ 1.889,90", desconto: "-18%", parcela: "No PIX ou 10x de R$ 188,99" },
    { id: 4, nome: "Processador Intel Core Ultra 5", imagem: "/Processador Intel Core Ultra 5.png", precoAntigo: "R$ 2.117,64", preco: "R$ 1.099,99", desconto: "-38%", parcela: "No PIX ou 10x de R$ 129,41" },
    { id: 5, nome: "Console PlayStation 5 Slim", imagem: "/Console PlayStation 5 Slim.png", precoAntigo: "R$ 4.599,00", preco: "R$ 4.091,07", desconto: "-4%", parcela: "No PIX ou 10x de R$ 439,90" },
    { id: 6, nome: "Monitor Gamer 27 Polegadas", imagem: "/Monitor Gamer 27 Polegadas.png", precoAntigo: "R$ 1.599,90", preco: "R$ 1.199,90", desconto: "-25%", parcela: "No PIX ou 10x de R$ 119,99" },
    { id: 7, nome: "Teclado Mecânico RGB", imagem: "/Teclado Mecânico RGB.png", precoAntigo: "R$ 349,90", preco: "R$ 249,90", desconto: "-28%", parcela: "No PIX ou 10x de R$ 24,99" },
    { id: 8, nome: "Mouse Gamer RGB", imagem: "/Mouse Gamer RGB.png", precoAntigo: "R$ 199,90", preco: "R$ 129,90", desconto: "-35%", parcela: "No PIX ou 10x de R$ 12,99" }
  ];

  return (
    <main style={{ backgroundColor: "#f3f4f6", minHeight: "100vh", padding: "120px 32px 32px" }}>
      <header style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "2em", marginBottom: "6px" }}>
          Tecnologia em destaque
        </h1>

        <p style={{ color: "#6b7280" }}>
          Produtos selecionados para você comprar no AllShop.
        </p>
      </header>

      <section
        aria-label="Lista de produtos"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px"
        }}
      >
        {produtos.map((produto) => (
          <Link
            key={produto.id}
            to={`/produto/${produto.id}`}
            style={{
              textDecoration: "none",
              color: "inherit"
            }}
          >
            <article
              style={{
                backgroundColor: "#fff",
                borderRadius: "16px",
                padding: "14px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                border: "1px solid #eee",
                cursor: "pointer",
                minHeight: "360px"
              }}
            >
              <div
                style={{
                  height: "145px",
                  backgroundColor: "#f9fafb",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }}
                />
              </div>

              <p style={{ fontSize: "0.8em", marginBottom: "8px" }}>
                ⭐ 5.0
              </p>

              <h2 style={{ fontSize: "1em", fontWeight: 500, minHeight: "44px" }}>
                {produto.nome}
              </h2>

              <p style={{ textDecoration: "line-through", color: "#6b7280" }}>
                {produto.precoAntigo}
              </p>

              <strong style={{ display: "block", fontSize: "1.3em", color: "#111" }}>
                {produto.preco}
                <span style={{ color: "#16a34a", fontSize: "0.7em", marginLeft: "8px" }}>
                  {produto.desconto}
                </span>
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
                  marginTop: "12px"
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