import { Button } from "@heroui/react";
import { useMemo, useState } from "react";
import {
  FiEdit2,
  FiPlus,
  FiRefreshCw,
  FiSave,
  FiSearch,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

type Fornecedor = {
  id: number;
  razaoSocial: string;
  cnpj: string;
  email: string;
  telefone: string;
};

type FormFornecedor = Omit<Fornecedor, "id">;

const fornecedoresIniciais: Fornecedor[] = [
  {
    id: 1,
    razaoSocial: "Tech Distribuidora LTDA",
    cnpj: "12.345.678/0001-90",
    email: "contato@techdist.com.br",
    telefone: "(11) 4002-8922",
  },
  {
    id: 2,
    razaoSocial: "Áudio Premium SA",
    cnpj: "98.765.432/0001-10",
    email: "vendas@audiopremium.com",
    telefone: "(21) 3322-1100",
  },
  {
    id: 3,
    razaoSocial: "Acessórios Brasil ME",
    cnpj: "11.222.333/0001-44",
    email: "comercial@acessoriosbr.com",
    telefone: "(31) 2555-7788",
  },
];

const formularioVazio: FormFornecedor = {
  razaoSocial: "",
  cnpj: "",
  email: "",
  telefone: "",
};

export default function Fornecedores() {
  const [fornecedores, setFornecedores] =
    useState<Fornecedor[]>(fornecedoresIniciais);

  const [busca, setBusca] = useState("");
  const [formAberto, setFormAberto] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [form, setForm] = useState<FormFornecedor>(formularioVazio);

  const fornecedoresFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();

    if (!termo) {
      return fornecedores;
    }

    return fornecedores.filter((fornecedor) => {
      const conteudo = `
        ${fornecedor.razaoSocial}
        ${fornecedor.cnpj}
        ${fornecedor.email}
        ${fornecedor.telefone}
      `.toLowerCase();

      return conteudo.includes(termo);
    });
  }, [busca, fornecedores]);

  const atualizarCampo = (campo: keyof FormFornecedor, valor: string) => {
    setForm((formAtual) => ({
      ...formAtual,
      [campo]: valor,
    }));
  };

  const abrirNovoFornecedor = () => {
    setEditandoId(null);
    setForm(formularioVazio);
    setFormAberto(true);
  };

  const abrirEdicao = (fornecedor: Fornecedor) => {
    setEditandoId(fornecedor.id);
    setForm({
      razaoSocial: fornecedor.razaoSocial,
      cnpj: fornecedor.cnpj,
      email: fornecedor.email,
      telefone: fornecedor.telefone,
    });
    setFormAberto(true);
  };

  const fecharFormulario = () => {
    setFormAberto(false);
    setEditandoId(null);
    setForm(formularioVazio);
  };

  const salvarFornecedor = () => {
    if (!form.razaoSocial.trim() || !form.cnpj.trim() || !form.email.trim()) {
      return;
    }

    if (editandoId !== null) {
      setFornecedores((listaAtual) =>
        listaAtual.map((fornecedor) =>
          fornecedor.id === editandoId
            ? { ...fornecedor, ...form }
            : fornecedor
        )
      );
    } else {
      setFornecedores((listaAtual) => [
        ...listaAtual,
        {
          id: Date.now(),
          ...form,
        },
      ]);
    }

    fecharFormulario();
  };

  const excluirFornecedor = (id: number) => {
    setFornecedores((listaAtual) =>
      listaAtual.filter((fornecedor) => fornecedor.id !== id)
    );

    if (editandoId === id) {
      fecharFormulario();
    }
  };

  const atualizarLista = () => {
    setFornecedores(fornecedoresIniciais);
    setBusca("");
    fecharFormulario();
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-600">
              <HiOutlineBuildingOffice2 size={17} />
              <span>Cadastros</span>
            </div>

            <h1 className="text-3xl font-bold text-slate-950">Fornecedores</h1>

            <p className="mt-1 text-sm text-slate-700">
              Gerencie os fornecedores cadastrados na plataforma.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button
              onPress={atualizarLista}
              className="h-11 rounded-xl border border-slate-300 bg-white px-4 font-semibold text-slate-700 shadow-sm hover:bg-slate-100"
            >
              <FiRefreshCw size={17} />
              Atualizar
            </Button>

            <Button
              onPress={abrirNovoFornecedor}
              className="h-11 rounded-xl bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/25 hover:bg-orange-600"
            >
              <FiPlus size={18} />
              Novo Fornecedor
            </Button>
          </div>
        </div>

        <label className="mb-4 flex h-12 w-full max-w-xl items-center gap-3 rounded-xl border border-slate-300 bg-slate-100 px-4 text-slate-500">
          <FiSearch size={18} />

          <input
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Buscar por razão social, CNPJ ou email"
            className="h-full flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
          />
        </label>

        {formAberto && (
          <div className="mb-5 rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-950">
                  {editandoId ? "Editar fornecedor" : "Novo fornecedor"}
                </h2>

                <p className="mt-1 text-sm text-slate-600">
                  {editandoId
                    ? "Atualize os dados cadastrados para este fornecedor."
                    : "Informe os dados para incluir um fornecedor na plataforma."}
                </p>
              </div>

              <Button
                isIconOnly
                type="button"
                variant="light"
                onPress={fecharFormulario}
                className="h-10 w-10 min-w-10 self-end rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 sm:self-auto"
                aria-label="Fechar formulário"
              >
                <FiX size={20} />
              </Button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-800">
                  Razão social
                </span>

                <input
                  type="text"
                  value={form.razaoSocial}
                  onChange={(event) =>
                    atualizarCampo("razaoSocial", event.target.value)
                  }
                    maxLength={80}
                  placeholder="Ex: Tech Distribuidora LTDA"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-orange-400 focus:bg-white"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-800">
                  CNPJ
                </span>

                <input
                  type="text"
                  value={form.cnpj}
                  onChange={(event) => atualizarCampo("cnpj", event.target.value)}
                  maxLength={18}
                  placeholder="00.000.000/0000-00"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-orange-400 focus:bg-white"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-800">
                  Email
                </span>

                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => atualizarCampo("email", event.target.value)}
                  maxLength={80}
                  placeholder="email@fornecedor.com"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-orange-400 focus:bg-white"
                />
              </label>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-800">
                  Telefone
                </span>

                <input
                  type="tel"
                  value={form.telefone}
                  onChange={(event) =>
                    atualizarCampo("telefone", event.target.value)
                  }
                  maxLength={15}
                  placeholder="(00) 0000-0000"
                  className="h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-4 text-sm text-slate-900 outline-none focus:border-orange-400 focus:bg-white"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <Button
                type="button"
                onPress={fecharFormulario}
                className="h-11 rounded-xl border border-slate-300 bg-white px-5 font-semibold text-slate-700 hover:bg-slate-100"
              >
                Cancelar
              </Button>

              <Button
                type="button"
                onPress={salvarFornecedor}
                className="h-11 rounded-xl bg-orange-500 px-5 font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
              >
                <FiSave size={17} />
                {editandoId ? "Salvar alterações" : "Salvar fornecedor"}
              </Button>
            </div>
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead className="bg-slate-100">
                <tr className="border-b border-slate-300 text-xs uppercase tracking-wide text-slate-700">
                  <th className="px-5 py-4 font-semibold">Razão Social</th>
                  <th className="px-5 py-4 font-semibold">CNPJ</th>
                  <th className="px-5 py-4 font-semibold">Email</th>
                  <th className="px-5 py-4 font-semibold">Telefone</th>
                  <th className="px-5 py-4 text-right font-semibold">Ações</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-slate-100/60">
                {fornecedoresFiltrados.map((fornecedor) => (
                  <tr key={fornecedor.id} className="text-sm text-slate-800">
                    <td className="px-5 py-4 font-bold text-slate-950">
                      {fornecedor.razaoSocial}
                    </td>
                    <td className="px-5 py-4">{fornecedor.cnpj}</td>
                    <td className="px-5 py-4">{fornecedor.email}</td>
                    <td className="px-5 py-4">{fornecedor.telefone}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          onPress={() => abrirEdicao(fornecedor)}
                          className="h-9 rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-orange-50 hover:text-orange-600"
                        >
                          <FiEdit2 size={15} />
                          Editar
                        </Button>

                        <Button
                          onPress={() => excluirFornecedor(fornecedor.id)}
                          className="h-9 rounded-xl border border-red-200 bg-white px-3 text-sm font-semibold text-red-500 shadow-sm hover:bg-red-50 hover:text-red-600"
                        >
                          <FiTrash2 size={15} />
                          Excluir
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {fornecedoresFiltrados.length === 0 && (
            <div className="border-t border-slate-200 bg-white px-5 py-10 text-center text-sm text-slate-500">
              Nenhum fornecedor encontrado.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}