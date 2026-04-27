import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecuperarSenha() {
  const emailId = useId();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section className="mx-auto flex min-h-screen max-w-md items-center px-4 py-12">
      <div className="w-full rounded-2xl border p-8 bg-white text-black shadow-lg">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold">
            A
          </div>
          <h1 className="mt-4 text-2xl font-bold">Recuperar senha</h1>
          <p className="mt-1 text-sm text-gray-500">
            {sent ? "Sucesso!" : "Digite seu email abaixo."}
          </p>
        </div>

        {sent ? (
          <div className="space-y-5 text-center">
            <p className="text-sm text-green-600 bg-green-50 p-3 rounded-lg border border-green-200">
              Email enviado para {email}!
            </p>
            <button
              onClick={() => navigate("/login")}
              className="w-full py-2 bg-orange-500 text-white rounded-lg font-bold"
            >
              Voltar para o login
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor={emailId} className="text-xs font-semibold">Email cadastrado *</label>
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@email.com"
                className="mt-1 h-12 w-full rounded-md border px-4 outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white w-full rounded-full py-2.5 mt-2 font-semibold shadow-md active:scale-[0.98] transition-all"
            >
              {loading ? "Enviando..." : "Enviar link"}
            </button>
            <button 
              type="button"
              onClick={() => navigate("/login")}
              className="block w-full text-center text-sm text-gray-500 hover:underline"
            >
              Voltar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}