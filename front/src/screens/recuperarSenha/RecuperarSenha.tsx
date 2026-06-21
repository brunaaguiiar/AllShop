import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function RecuperarSenha() {
  const emailId = useId();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [erro, setErro] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErro("");

    try {
      await axios.post("http://localhost:3333/recuperar-senha", {
        email,
      });

      setSent(true);
    } catch (error: unknown) {
      console.error(error);

      function getErrorMessage(err: unknown) {
        if (typeof err === "object" && err !== null) {
          const response = (err as { response?: unknown }).response;
          if (typeof response === "object" && response !== null) {
            const data = (response as { data?: unknown }).data;
            if (typeof data === "object" && data !== null) {
              const mensagem =
                (data as { error?: unknown }).error ||
                (data as { mensagem?: unknown }).mensagem;
              if (typeof mensagem === "string") return mensagem;
            }
          }
          if (err instanceof Error) return err.message;
        }
        if (typeof err === "string") return err;
        return "Erro ao tentar processar a recuperação de senha.";
      }

      setErro(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto flex min-h-screen max-w-md items-center px-4 py-12 font-sans">
      <div className="w-full rounded-3xl border border-gray-100 p-8 bg-white text-black shadow-2xl space-y-6">
        {/* Cabeçalho do Card */}
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-white font-bold text-xl shadow-lg shadow-orange-500/20">
            A
          </div>
          <h1 className="mt-4 text-2xl font-bold text-gray-800 tracking-tight">
            Recuperar senha
          </h1>
          <p className="mt-1 text-xs text-gray-400">
            {sent ? "Sucesso!" : "Digite seu email abaixo."}
          </p>
        </div>

        {erro && (
          <div className="bg-red-50 text-red-600 p-3 rounded-xl text-xs font-medium border border-red-200">
            {erro}
          </div>
        )}

        {sent ? (
          <div className="space-y-5 text-center">
            <div className="text-sm text-green-600 bg-green-50/70 p-4 rounded-xl border border-green-200 font-medium">
              E-mail enviado para <span className="font-bold">{email}</span> com
              as instruções de acesso!
            </div>
            <button
              onClick={() => navigate("/login")}
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] text-sm cursor-pointer"
            >
              Voltar para o login
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-1">
              <label
                htmlFor={emailId}
                className="text-[11px] font-bold text-gray-400 tracking-wider block"
              >
                EMAIL CADASTRADO *
              </label>
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 text-sm text-gray-800 outline-none focus:border-orange-400 focus:bg-white transition-all duration-200 placeholder:text-gray-300"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] text-sm tracking-wide disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Enviando..." : "ENVIAR LINK"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="block w-full text-center text-sm font-bold text-gray-400 hover:text-orange-500 transition-colors duration-200"
            >
              Voltar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
