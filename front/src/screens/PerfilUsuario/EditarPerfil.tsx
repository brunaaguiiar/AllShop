import { FormEvent, useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const usuarioPadrao = {
  nome: "Ana Luiza",
  email: "analuiza@email.com",
  telefone: "(11) 99999-9999",
};

function formatarTelefone(valor: string) {
  const digitos = valor.replace(/\D/g, "").slice(0, 11);

  if (digitos.length === 0) return "";
  if (digitos.length <= 2) return `(${digitos}`;
  if (digitos.length <= 7) {
    return `(${digitos.slice(0, 2)}) ${digitos.slice(2)}`;
  }

  return `(${digitos.slice(0, 2)}) ${digitos.slice(2, 7)}-${digitos.slice(7)}`;
}

function buscarUsuarioSalvo() {
  try {
    const usuario = localStorage.getItem("allshop:usuario");
    return usuario ? JSON.parse(usuario) : usuarioPadrao;
  } catch {
    return usuarioPadrao;
  }
}

export default function EditarPerfil() {
  const navigate = useNavigate();
  const usuarioSalvo = buscarUsuarioSalvo();
  const [nome, setNome] = useState(usuarioSalvo.nome);
  const [email, setEmail] = useState(usuarioSalvo.email);
  const [telefone, setTelefone] = useState(
    usuarioSalvo.telefone ?? usuarioPadrao.telefone
  );
  const [erro, setErro] = useState("");

  const salvar = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nomeFormatado = nome.trim();
    const emailFormatado = email.trim();
    const telefoneFormatado = telefone.trim();
    const telefoneValido = /^\(\d{2}\) \d{5}-\d{4}$/.test(telefoneFormatado);

    if (!nomeFormatado || !emailFormatado || !telefoneFormatado) {
      setErro("Preencha nome, e-mail e telefone para salvar.");
      return;
    }

    if (!telefoneValido) {
      setErro("Digite o telefone no formato (xx) xxxxx-xxxx.");
      return;
    }

    localStorage.setItem(
      "allshop:usuario",
      JSON.stringify({
        nome: nomeFormatado,
        email: emailFormatado,
        telefone: telefoneFormatado,
      })
    );
    navigate("/perfil");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={salvar}
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="text-3xl font-bold mb-6">Editar Perfil</h1>

        <div className="flex flex-col gap-6">
          <div>
            <label htmlFor="nome" className="block text-gray-600 mb-2">
              Nome
            </label>

            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
                setErro("");
              }}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-600 mb-2">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErro("");
              }}
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="telefone" className="block text-gray-600 mb-2">
              Telefone
            </label>

            <input
              id="telefone"
              type="tel"
              value={telefone}
              onChange={(e) => {
                setTelefone(formatarTelefone(e.target.value));
                setErro("");
              }}
              placeholder="(11) 99999-9999"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {erro && <p className="text-sm font-medium text-red-600">{erro}</p>}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit" className="h-14 flex-1 bg-black text-lg text-white">
              Salvar alteracoes
            </Button>

            <Button
              type="button"
              onPress={() => navigate("/perfil")}
              className="h-14 flex-1 border border-gray-300 bg-white text-lg text-gray-700"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
