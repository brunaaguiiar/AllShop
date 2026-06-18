import { useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function EditarPerfil() {
  const navigate = useNavigate();
  const usuarioSalvo = JSON.parse(
    localStorage.getItem("allshop:usuario") ??
      '{"nome":"Ana Luíza","email":"analuiza@email.com"}'
  );
  const [nome, setNome] = useState(usuarioSalvo.nome);
  const [email, setEmail] = useState(usuarioSalvo.email);

  const salvar = () => {
    localStorage.setItem("allshop:usuario", JSON.stringify({ nome, email }));
    alert("Dados salvos com sucesso!");
    navigate("/perfil");
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
