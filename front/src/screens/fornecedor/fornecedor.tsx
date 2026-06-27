import { useEffect, useState, useRef } from "react";

interface Produto {
  produto_id: number;
  nome: string;
  descricao?: string;
  imagem?: string;
  preco?: number;
  estoque?: number;
}

export default function Fornecedor() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [termoBusca, setTermoBusca] = useState("")
  const API_URL = "http://localhost:3000";
  
  const modalRef = useRef<HTMLDialogElement>(null);

  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    descricao: "",
    preco: 0,
    categoria_id: 1, 
    fornecedor_id: 1, 
    estoque: 0,
    imagem: "", 
  });

  async function carregarProdutosFornecedor() {
    try {
      const response = await fetch(`${API_URL}/fornecedor/produtos`);
      const data = await response.json();
      setProdutos(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxW = 800;
          const scale = maxW / img.width;
          canvas.width = img.width > maxW ? maxW : img.width;
          canvas.height = img.width > maxW ? img.height * scale : img.height;

          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressedBase64 = canvas.toDataURL("image/jpeg", 0.7);
            setNovoProduto({ ...novoProduto, imagem: compressedBase64 });
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  async function salvarProduto() {
    try {
      const response = await fetch(`${API_URL}/fornecedor/produtos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      });

      if (!response.ok) {
        alert("Erro ao salvar produto");
        return;
      }

      await carregarProdutosFornecedor();
      
      setNovoProduto({
        nome: "",
        descricao: "",
        preco: 0,
        categoria_id: 1,
        fornecedor_id: 1,
        estoque: 0,
        imagem: "",
      });

      modalRef.current?.close();
    } catch (error) {
      console.error(error);
      alert("Erro no servidor");
    }
  }

  async function removerProduto(id: number) {
    if (!confirm("Tem certeza que deseja remover este produto?")) return;
    try {
      const response = await fetch(`${API_URL}/produtos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        await carregarProdutosFornecedor();
      } else {
        alert("Erro ao remover produto.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const loadProdutos = async () => {
      try {
        const response = await fetch(`${API_URL}/fornecedor/produtos`, {
          signal: controller.signal,
        });
        const data = await response.json();

        if (!active) return;
        setProdutos(Array.isArray(data) ? data : []);
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error(error);
      }
    };

    void loadProdutos();

    return () => {
      active = false;
      controller.abort();
    };
  }, [API_URL]);

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const totalProdutos = produtos.length;
  const valorEstoque = produtos.reduce((acc, p) => acc + (Number(p.preco || 0) * Number(p.estoque || 0)), 0);
  const estoqueBaixo = produtos.filter(p => Number(p.estoque || 0) < 5).length;

  return (
    <main style={{ padding: "120px 32px 32px", minHeight: "100vh", backgroundColor: "#fafafa", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ fontSize: "2.2em", fontWeight: "bold", color: "#111", margin: 0 }}>Dashboard do Fornecedor</h1>
        <p style={{ color: "#6b7280", margin: "4px 0 0" }}>Gerencie seus produtos da AllShop</p>
      </header>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "32px" }}>
        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #f3f4f6" }}>
          <span style={{ color: "#9ca3af", fontSize: "0.85em", fontWeight: "bold", textTransform: "uppercase" }}>Produtos Ativos</span>
          <h2 style={{ fontSize: "2.5em", margin: "8px 0 0", fontWeight: "bold", color: "#111" }}>{totalProdutos}</h2>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #f3f4f6" }}>
          <span style={{ color: "#9ca3af", fontSize: "0.85em", fontWeight: "bold", textTransform: "uppercase" }}>Valor em Estoque</span>
          <h2 style={{ fontSize: "2.5em", margin: "8px 0 0", fontWeight: "bold", color: "#ff5a00" }}>
            R$ {valorEstoque.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
        </div>
        <div style={{ backgroundColor: "#fff", padding: "24px", borderRadius: "16px", boxShadow: "0 4px 12px rgba(0,0,0,0.03)", border: "1px solid #f3f4f6" }}>
          <span style={{ color: "#9ca3af", fontSize: "0.85em", fontWeight: "bold", textTransform: "uppercase" }}>Estoque Baixo</span>
          <h2 style={{ fontSize: "2.5em", margin: "8px 0 0", fontWeight: "bold", color: estoqueBaixo > 0 ? "#dc2626" : "#111" }}>{estoqueBaixo}</h2>
        </div>
      </section>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", gap: "16px" }}>
        <input 
          type="text" 
          placeholder="Buscar produto..." 
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value)}
          style={{ flex: 1, maxWidth: "400px", padding: "14px 16px", borderRadius: "12px", border: "1px solid #e5e7eb", backgroundColor: "#fff", fontSize: "0.95rem" }}
        />
        <button 
          onClick={() => modalRef.current?.showModal()}
          style={{
            backgroundColor: "#ff5a00",
            color: "#fff",
            border: "none",
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "0.95rem",
            boxShadow: "0 4px 14px rgba(255, 90, 0, 0.25)"
          }}
        >
          + Adicionar Produto
        </button>
      </div>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        {produtosFiltrados.map((produto) => (
          <article
            key={produto.produto_id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
              border: "1px solid #f3f4f6",
              display: "flex",
              flexDirection: "column",
              minHeight: "440px",
            }}
          >
            <div style={{ height: "180px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", backgroundColor: "#f9fafb", borderRadius: "12px", overflow: "hidden" }}>
              <img
                src={produto.imagem || "https://placehold.co/400x300?text=Sem+Imagem"}
                alt={produto.nome}
                style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
              />
            </div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: "600", color: "#111", margin: "0 0 8px 0", minHeight: "48px" }}>
              {produto.nome}
            </h2>
            <p style={{ color: "#6b7280", fontSize: "0.85rem", margin: "0 0 12px 0" }}>{produto.descricao || "Sem descrição informada."}</p>
            <div style={{ marginTop: "auto" }}>
              <strong style={{ display: "block", fontSize: "1.4em", color: "#ff5a00", marginBottom: "4px" }}>
                R$ {Number(produto.preco || 0).toFixed(2)}
              </strong>
              <span style={{ display: "block", fontSize: "0.85em", color: "#9ca3af", marginBottom: "16px" }}>
                Estoque: {produto.estoque || 0} unidades
              </span>
              <button
                onClick={() => removerProduto(produto.produto_id)}
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  color: "#ef4444",
                  border: "1px solid #fca5a5",
                  padding: "10px",
                  borderRadius: "10px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Remover
              </button>
            </div>
          </article>
        ))}
      </section>
      <dialog 
        ref={modalRef} 
        style={{
          border: "none",
          borderRadius: "16px",
          padding: "32px",
          width: "560px",
          maxWidth: "92vw",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          outline: "none",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: 0,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h2 style={{ margin: "0 0 6px 0", fontSize: "1.45rem", fontWeight: "bold", color: "#111827" }}>Adicionar Novo Produto</h2>
            <p style={{ margin: 0, color: "#6b7280", fontSize: "0.9rem" }}>Preencha os campos abaixo para disponibilizar o item na loja.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: "500", fontSize: "0.85rem", color: "#4b5563" }}>
              Nome do Produto
              <input type="text" placeholder="Ex: PlayStation 5 Slim" style={{ padding: "12px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }} value={novoProduto.nome} onChange={(e) => setNovoProduto({ ...novoProduto, nome: e.target.value })} />
            </label>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: "500", fontSize: "0.85rem", color: "#4b5563" }}>
              Descrição
              <input type="text" placeholder="Resumo e especificações" style={{ padding: "12px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }} value={novoProduto.descricao} onChange={(e) => setNovoProduto({ ...novoProduto, descricao: e.target.value })} />
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: "500", fontSize: "0.85rem", color: "#4b5563" }}>
                Preço (R$)
                <input type="number" placeholder="0.00" style={{ padding: "12px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }} value={String(novoProduto.preco)} onChange={(e) => setNovoProduto({ ...novoProduto, preco: Number(e.target.value) })} />
              </label>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: "500", fontSize: "0.85rem", color: "#4b5563" }}>
                Estoque Inicial
                <input type="number" placeholder="0" style={{ padding: "12px", borderRadius: "10px", border: "1px solid #d1d5db", fontSize: "0.95rem", outline: "none" }} value={String(novoProduto.estoque)} onChange={(e) => setNovoProduto({ ...novoProduto, estoque: Number(e.target.value) })} />
              </label>
            </div>
            <label style={{ display: "flex", flexDirection: "column", gap: "6px", fontWeight: "500", fontSize: "0.85rem", color: "#4b5563" }}>
              Imagem do Produto (Do seu Computador)
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                style={{ padding: "8px 0", fontSize: "0.95rem" }} 
              />
              {novoProduto.imagem && (
                <span style={{ fontSize: "0.8em", color: "#16a34a", fontWeight: "bold" }}>✓ Imagem pronta e otimizada!</span>
              )}
            </label>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px", marginTop: "8px" }}>
            <button 
              onClick={() => modalRef.current?.close()} 
              style={{ padding: "12px 20px", borderRadius: "10px", border: "1px solid #e5e7eb", backgroundColor: "#f9fafb", color: "#4b5563", cursor: "pointer", fontWeight: "600", fontSize: "0.9rem" }}
            >
              Cancelar
            </button>
            <button 
              onClick={salvarProduto} 
              style={{
                padding: "12px 24px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(135deg, #ff5a00, #ff7a00)",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "0.9rem",
                boxShadow: "0 4px 12px rgba(255, 90, 0, 0.2)"
              }}
            >
              Salvar Produto
            </button>
          </div>
        </div>
      </dialog>
    </main>
  );
}