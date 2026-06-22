import React, { useEffect, useState } from "react";

export default function AccessibilityWidget() {
  const [aberto, setAberto] = useState(false);
  const [fonte, setFonte] = useState(16);

  const [contraste, setContraste] = useState(() => {
    return localStorage.getItem("allshop:altoContraste") === "true";
  });

  useEffect(() => {
    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAberto(false);
      }
    };

    document.addEventListener("keydown", fecharComEsc);

    document.body.classList.toggle("modo-contraste", contraste);

    return () => {
      document.removeEventListener("keydown", fecharComEsc);
    };
  }, [contraste]);

  const aumentarFonte = () => {
    const novaFonte = fonte + 2;
    setFonte(novaFonte);
    document.documentElement.style.fontSize = `${novaFonte}px`;
  };

  const diminuirFonte = () => {
    if (fonte > 12) {
      const novaFonte = fonte - 2;
      setFonte(novaFonte);
      document.documentElement.style.fontSize = `${novaFonte}px`;
    }
  };

  const alternarContraste = () => {
    const novoContraste = !contraste;
    setContraste(novoContraste);

    // Salva a escolha do usuário para persistir entre as telas (Login -> Home)
    localStorage.setItem("allshop:altoContraste", String(novoContraste));
    document.body.classList.toggle("modo-contraste", novoContraste);
  };

  const lerPagina = () => {
    const texto = document.body.innerText;
    const fala = new SpeechSynthesisUtterance(texto);
    fala.lang = "pt-BR";
    speechSynthesis.cancel();
    speechSynthesis.speak(fala);
  };

  const pararLeitura = () => {
    speechSynthesis.cancel();
  };

  return (
    <div
      style={{
        position: "fixed",
        left: "20px",
        top: "100px",
        zIndex: 9999,
      }}
    >
      <button
        onClick={() => setAberto(!aberto)}
        aria-label="Abrir menu de acessibilidade"
        title="Menu de acessibilidade"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "18px",
          border: "2px solid white",
          backgroundColor: "#ff5a00",
          color: "white",
          fontSize: "28px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        }}
      >
        ♿
      </button>

      {aberto && (
        <div
          role="menu"
          aria-label="Opções de acessibilidade"
          style={{
            marginTop: "8px",
            backgroundColor: "#ff5a00",
            padding: "10px",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <button
            onClick={aumentarFonte}
            aria-label="Aumentar tamanho da fonte"
            title="Aumentar fonte"
            style={botaoAcessibilidade}
          >
            A+
          </button>

          <button
            onClick={diminuirFonte}
            aria-label="Diminuir tamanho da fonte"
            title="Diminuir fonte"
            style={botaoAcessibilidade}
          >
            A-
          </button>

          <button
            onClick={alternarContraste}
            aria-label="Ativar ou desativar alto contraste"
            title="Alto contraste"
            style={botaoAcessibilidade}
          >
            🌙
          </button>

          <button
            onClick={lerPagina}
            title="Ler página"
            style={botaoAcessibilidade}
          >
            🔊
          </button>

          <button
            onClick={pararLeitura}
            title="Parar leitura"
            style={botaoAcessibilidade}
          >
            ⏹️
          </button>
        </div>
      )}
    </div>
  );
}

const botaoAcessibilidade = {
  width: "44px",
  height: "38px",
  borderRadius: "10px",
  border: "1px solid white",
  backgroundColor: "white",
  color: "#ff5a00",
  fontWeight: "bold",
  cursor: "pointer",
  fontSize: "16px",
};
