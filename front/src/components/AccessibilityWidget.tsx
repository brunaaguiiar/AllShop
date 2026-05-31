import { useState } from "react";

export default function AccessibilityWidget() {
  const [aberto, setAberto] = useState(false);
  const [fonte, setFonte] = useState(16);
  const [contraste, setContraste] = useState(false);

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

    document.body.classList.toggle(
      "modo-contraste",
      novoContraste
    );
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        top: "90px",
        zIndex: 9999
      }}
    >
      <button
        onClick={() => setAberto(!aberto)}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "15px",
          border: "none",
          backgroundColor: "#ff5a00",
          color: "white",
          fontSize: "28px",
          cursor: "pointer"
        }}
      >
        ♿
      </button>

      {aberto && (
        <div
          style={{
            marginTop: "8px",
            backgroundColor: "#ff5a00",
            padding: "10px",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}
        >
          <button onClick={aumentarFonte}>
            A+
          </button>

          <button onClick={diminuirFonte}>
            A-
          </button>

          <button onClick={alternarContraste}>
            🌙
          </button>

          <button>
            🤟
          </button>
        </div>
      )}
    </div>
  );
}