import { useState } from "react";

export default function Home() {

  const [fonte, setFonte] = useState(16);
  const [contraste, setContraste] = useState(false);

  return (

    <div
      style={{
        fontSize: `${fonte}px`,
        padding: "20px",
        backgroundColor: contraste ? "black" : "white",
        color: contraste ? "white" : "black",
        minHeight: "100vh"
      }}
    >

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px"
        }}
      >

        <button
          onClick={() => setFonte(fonte + 2)}
        >
          A+
        </button>

        <button
          onClick={() => {
            if (fonte > 12) {
              setFonte(fonte - 2);
            }
          }}
        >
          A-
        </button>

        <button
          onClick={() => setContraste(!contraste)}
        >
          Alto Contraste
        </button>

      </div>

      <h1>
        Home funcionando
      </h1>

      <p>
        Bem-vindo ao AllShop
      </p>

    </div>

  );

}