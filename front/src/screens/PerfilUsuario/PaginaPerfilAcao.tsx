import { FormEvent, useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import {
  IoAddOutline,
  IoArrowBackOutline,
  IoCardOutline,
  IoCheckmarkCircleOutline,
  IoCreateOutline,
  IoHomeOutline,
  IoLocationOutline,
  IoTrashOutline,
} from "react-icons/io5";

type PaginaPerfilAcaoProps = {
  tipo: "enderecos" | "carteira"
};

type ItemEditavel = {
  id: string;
  titulo: string;
  destaque: string;
  detalhes: string;
}

const enderecosPadrao: ItemEditavel[] = [
  { id: "endereco-casa", titulo: "Casa", destaque: "Endereço principal", detalhes: "Rua das Flores, 120 - Centro" },
  { id: "endereco-trabalho", titulo: "Trabalho", destaque: "Endereço secundário", detalhes: "Av. Brasil, 450 - Sala 22" },
]

const carteiraPadrao: ItemEditavel[] = [
  { id: "cartao-principal", titulo: "Cartão principal", destaque: "Visa final 1234", detalhes: "Validade 08/29" },
  { id: "pix", titulo: "Pix", destaque: "Forma de pagamento ativa", detalhes: "Disponível para compras aprovadas na hora" },
]

const conteudo = {
  enderecos: {
    titulo: "Endereços",
    descricao: "Aqui você pode cadastrar e editar seus endereços de entrega.",
    Icone: IoLocationOutline,
  },
  carteira: {
    titulo: "Minha carteira / Cartões",
    descricao: "Aqui você pode gerenciar cartões e formas de pagamento.",
    Icone: IoCardOutline,
  },
}

function buscarItens(chave: string, padrao: ItemEditavel[]) {
  try {
    const itens = localStorage.getItem(chave);
    return itens ? JSON.parse(itens) : padrao;
  } catch { return padrao; }
}

function salvarItens(chave: string, itens: ItemEditavel[]) {
  localStorage.setItem(chave, JSON.stringify(itens));
}

const itemVazio = { id: "", titulo: "", destaque: "", detalhes: "" };

export default function PaginaPerfilAcao({ tipo }: PaginaPerfilAcaoProps) {
  const navigate = useNavigate();
  const { titulo, descricao, Icone } = conteudo[tipo];
  const chaveStorage = `allshop:${tipo}`;
  const padrao = tipo === "carteira" ? carteiraPadrao : enderecosPadrao;
  
  const [itens, setItens] = useState<ItemEditavel[]>(buscarItens(chaveStorage, padrao));
  const [formulario, setFormulario] = useState<ItemEditavel>(itemVazio);
  const [editandoId, setEditandoId] = useState("");
  const [erro, setErro] = useState("");

  const textoAdicionar = tipo === "enderecos" ? "Adicionar endereço" : "Adicionar cartão";

  const iniciarNovo = () => { setFormulario(itemVazio); setEditandoId(""); setErro(""); };
  const iniciarEdicao = (item: ItemEditavel) => { setFormulario(item); setEditandoId(item.id); setErro(""); };

  const excluirItem = (id: string) => {
    const novosItens = itens.filter((item) => item.id !== id);
    setItens(novosItens);
    salvarItens(chaveStorage, novosItens);
    iniciarNovo();
  }

  const salvarItem = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const itemFormatado = {
      id: editandoId || `${tipo}-${Date.now()}`,
      titulo: formulario.titulo.trim(),
      destaque: formulario.destaque.trim(),
      details: formulario.detalhes.trim(), 
      detalhes: formulario.detalhes.trim(),
    }

    if (!itemFormatado.titulo || !itemFormatado.destaque || !itemFormatado.detalhes) {
      setErro("Preencha todos os campos antes de salvar.");
      return;
    }

    const novosItens = editandoId
      ? itens.map((item) => (item.id === editandoId ? itemFormatado : item))
      : [...itens, itemFormatado];

    setItens(novosItens);
    salvarItens(chaveStorage, novosItens);
    iniciarNovo();
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 pt-24">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500">
          <Icone className="text-3xl" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800">{titulo}</h1>
        <p className="mt-3 text-gray-500">{descricao}</p>

        <div className="mt-6 grid gap-5 text-left lg:grid-cols-[1fr_1fr]">
          <div className="flex flex-col gap-3">
            {itens.map((item) => (
              <div key={item.id} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <div className="flex items-start gap-3">
                  <IoCheckmarkCircleOutline className="mt-1 text-xl text-orange-500" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800">{item.titulo}</h2>
                    <p className="text-sm font-medium text-orange-600">{item.destaque}</p>
                    <p className="mt-1 text-sm text-gray-500">{item.detalhes}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button onPress={() => iniciarEdicao(item)} className="h-10 bg-black text-white">
                    <span className="flex w-full items-center justify-center gap-2"><IoCreateOutline />Editar</span>
                  </Button>
                  <Button onPress={() => excluirItem(item.id)} className="h-10 border border-red-200 bg-white text-red-600">
                    <span className="flex w-full items-center justify-center gap-2"><IoTrashOutline />Excluir</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={salvarItem} className="rounded-xl border border-gray-200 bg-white p-4">
            <h2 className="font-semibold text-gray-800">{editandoId ? "Editar item" : textoAdicionar}</h2>
            <div className="mt-4 flex flex-col gap-3">
              <input
                value={formulario.titulo}
                onChange={(e) => setFormulario({ ...formulario, titulo: e.target.value })}
                placeholder={tipo === "enderecos" ? "Ex: Casa" : "Ex: Cartão principal"}
                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                value={formulario.destaque}
                onChange={(e) => setFormulario({ ...formulario, destaque: e.target.value })}
                placeholder={tipo === "enderecos" ? "Ex: Endereço principal" : "Ex: Visa final 1234"}
                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                value={formulario.detalhes}
                onChange={(e) => setFormulario({ ...formulario, detalhes: e.target.value })}
                placeholder={tipo === "enderecos" ? "Ex: Rua, número - bairro" : "Ex: Validade 08/29"}
                className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            {erro && <p className="mt-3 text-sm font-medium text-red-600">{erro}</p>}
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <Button type="submit" className="h-11 bg-orange-500 text-white">
                <span className="flex w-full items-center justify-center gap-2"><IoAddOutline />Salvar</span>
              </Button>
              <Button type="button" onPress={iniciarNovo} className="h-11 border border-gray-300 bg-white text-gray-700">
                Limpar
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button onPress={() => navigate("/perfil")} className="h-12 bg-black text-white rounded-xl">
            <span className="flex w-full items-center justify-center gap-2 font-semibold"><IoArrowBackOutline className="text-xl" />Voltar ao perfil</span>
          </Button>
          <Button onPress={() => navigate("/home")} className="h-12 border border-gray-300 bg-white text-gray-700 rounded-xl">
            <span className="flex w-full items-center justify-center gap-2 font-semibold"><IoHomeOutline className="text-xl" />Ir para home</span>
          </Button>
        </div>
      </section>
    </div>
  )
}