import { useState } from "react";
import { Button } from "@heroui/react";

export default function EditarPerfil() {
  const [nome, setNome] = useState("Ana Luíza");
  const [email, setEmail] = useState("analuiza@email.com");

  const salvar = () => {
    alert("Dados salvos com sucesso!");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Editar Perfil
      </h1>

      <div className="flex flex-col gap-6">

        <div>
          <label className="block text-gray-600 mb-2">
            Nome
          </label>

          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2">
            E-mail
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <Button
          onPress={salvar}
          className="bg-black text-white h-14 text-lg"
        >
          Salvar Alterações
        </Button>

      </div>
    </div>
  );
}