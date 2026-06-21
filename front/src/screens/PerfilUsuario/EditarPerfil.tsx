import { FormEvent, useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    return usuario
      ? JSON.parse(usuario)
      : { id: "", nome: "", email: "", telefone: "" };
  } catch {
    return { id: "", nome: "", email: "", telefone: "" };
  }
}

export default function EditarPerfil() {
  const navigate = useNavigate();
  const usuarioSalvo = buscarUsuarioSalvo();

  const [nome, setNome] = useState(usuarioSalvo.nome);
  const [email, setEmail] = useState(usuarioSalvo.email);
  const [telefone, setTelefone] = useState(usuarioSalvo.telefone || "");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const editarPerfil = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErro("");
    setCarregando(true);

    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      setErro("Por favor, preencha todos os campos.");
      setCarregando(false);
      return;
    }

    const novosDados = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
    };

    try {
      console.log("Enviando dados para o servidor:", novosDados);

      const resposta = await axios.put(
        `http://localhost:3333/usuario/${usuarioSalvo.id}`,
        novosDados
      );

      console.log("Dados salvos com sucesso no banco:", resposta.data);

      localStorage.setItem("allshop:usuario", JSON.stringify(resposta.data));

      window.dispatchEvent(new Event("usuarioLogado"));
      navigate("/perfil");
    } catch (error: unknown) {
      console.error("Erro ao editar perfil:", error);

      const mensagemDeErro =
        axios.isAxiosError(error) &&
        error.response?.data &&
        typeof error.response.data === "object"
          ? (error.response.data as { erro?: string }).erro
          : undefined;

      setErro(mensagemDeErro || "Erro ao salvar alterações no servidor.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <form
        onSubmit={editarPerfil}
        className="w-full max-w-lg rounded-3xl bg-white p-8 md:p-10 shadow-2xl border border-gray-100"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Editar Perfil</h1>
        <p className="text-gray-400 text-sm mb-8">
          Atualize suas informações pessoais
        </p>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 block uppercase">
              Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 block uppercase">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
            />
          </div>

          <div>
            <label className="text-[11px] font-bold text-gray-400 tracking-wider mb-2 block uppercase">
              Telefone
            </label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              className="w-full border border-gray-200 bg-gray-50 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-orange-500 transition-all text-sm"
            />
          </div>

          {erro && (
            <p className="text-sm font-medium text-red-500 bg-red-50 p-3 rounded-xl border border-red-100">
              {erro}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row mt-4">
            <Button
              type="submit"
              isLoading={carregando}
              className="h-14 flex-1 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
            >
              {carregando ? "Salvando..." : "Salvar alterações"}
            </Button>
            <Button
              type="button"
              onPress={() => navigate("/perfil")}
              className="h-14 flex-1 border border-gray-200 bg-white text-gray-600 font-semibold rounded-2xl hover:bg-gray-50"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
