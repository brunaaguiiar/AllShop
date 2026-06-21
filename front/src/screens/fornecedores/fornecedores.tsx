import { Button } from "@heroui/react";
import { useEffect, useMemo, useState } from "react";
import { FiEdit2, FiPlus, FiRefreshCw, FiSave, FiTrash2 } from "react-icons/fi";
import api from "../../services/api";

type Fornecedor = {
  fornecedor_id: number;
  razao_social: string;
  cnpj: string;
  email: string;
  telefone: string;
};

export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([]);
  const [busca, setBusca] = useState("");
  const [formAberto, setFormAberto] = useState(false);
  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [form, setForm] = useState({
    razao_social: "",
    cnpj: "",
    email: "",
    telefone: "",
  });

  const getErrorMessage = (error: unknown) => {
    if (error instanceof Error) return error.message;
    return String(error);
  };

  const carregarFornecedores = async () => {
    try {
      const response = await api.get<Fornecedor[]>("/fornecedores");
      setFornecedores(response.data);
    } catch (error) {
      console.error("Erro ao buscar fornecedores:", error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    api
      .get<Fornecedor[]>("/fornecedores")
      .then((response) => {
        if (isMounted) {
          setFornecedores(response.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar fornecedores:", error);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const salvarFornecedor = async () => {
    try {
      if (editandoId) {
        await api.put(`/fornecedores/${editandoId}`, form);
      } else {
        await api.post("/fornecedores", form);
      }

      fecharFormulario();
      carregarFornecedores();
    } catch (error) {
      alert(getErrorMessage(error));
    }
  };

  const excluirFornecedor = async (id: number) => {
    if (!confirm("Deseja realmente excluir este fornecedor?")) return;
    try {
      await api.delete(`/fornecedores/${id}`);
      carregarFornecedores();
    } catch (error) {
      alert(getErrorMessage(error));
    }
  };

  const abrirEdicao = (f: Fornecedor) => {
    setEditandoId(f.fornecedor_id);
    setForm({
      razao_social: f.razao_social,
      cnpj: f.cnpj,
      email: f.email,
      telefone: f.telefone,
    });
    setFormAberto(true);
  };

  const fecharFormulario = () => {
    setFormAberto(false);
    setEditandoId(null);
    setForm({ razao_social: "", cnpj: "", email: "", telefone: "" });
  };

  const fornecedoresFiltrados = useMemo(() => {
    const termo = busca.toLowerCase();
    return fornecedores.filter(
      (f) =>
        f.razao_social.toLowerCase().includes(termo) || f.cnpj.includes(termo)
    );
  }, [busca, fornecedores]);

  return (
    <section className="min-h-[calc(100vh-5rem)] bg-slate-50 px-6 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-950">Fornecedores</h1>
            <p className="text-sm text-slate-700">
              Gerencie os fornecedores integrados ao banco de dados.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <input
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar fornecedor"
              className="border p-3 rounded-xl w-full sm:w-72"
            />
            <Button
              onPress={carregarFornecedores}
              className="bg-white border rounded-xl"
            >
              <FiRefreshCw /> Atualizar
            </Button>
            <Button
              onPress={() => setFormAberto(true)}
              className="bg-orange-500 text-white rounded-xl"
            >
              <FiPlus /> Novo
            </Button>
          </div>
        </div>

        {formAberto && (
          <div className="mb-5 p-6 bg-white border rounded-2xl shadow-sm">
            <h2 className="text-lg font-bold mb-4">
              {editandoId ? "Editar" : "Novo"} Fornecedor
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                className="border p-3 rounded-lg"
                placeholder="Razão Social"
                value={form.razao_social}
                onChange={(e) =>
                  setForm({ ...form, razao_social: e.target.value })
                }
              />
              <input
                className="border p-3 rounded-lg"
                placeholder="CNPJ"
                value={form.cnpj}
                onChange={(e) => setForm({ ...form, cnpj: e.target.value })}
              />
              <input
                className="border p-3 rounded-lg"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                className="border p-3 rounded-lg"
                placeholder="Telefone"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
              />
            </div>
            <div className="mt-4 flex gap-2 justify-end">
              <Button onPress={fecharFormulario}>Cancelar</Button>
              <Button
                onPress={salvarFornecedor}
                className="bg-orange-500 text-white"
              >
                <FiSave /> Salvar
              </Button>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl border overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 text-left">Razão Social</th>
                <th className="p-4 text-left">CNPJ</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {fornecedoresFiltrados.map((f) => (
                <tr key={f.fornecedor_id} className="border-t">
                  <td className="p-4">{f.razao_social}</td>
                  <td className="p-4">{f.cnpj}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <Button
                      isIconOnly
                      variant="light"
                      onPress={() => abrirEdicao(f)}
                    >
                      <FiEdit2 />
                    </Button>
                    <Button
                      isIconOnly
                      variant="light"
                      className="text-red-500"
                      onPress={() => excluirFornecedor(f.fornecedor_id)}
                    >
                      <FiTrash2 />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
