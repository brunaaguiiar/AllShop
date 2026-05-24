export default function PerfilUsuario() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">

      <div className="bg-white p-6 rounded-2xl shadow-lg w-[350px]">

        <h1 className="text-3xl font-bold text-center mb-2">
          Meu Perfil
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Informações da conta
        </p>

        <div className="flex flex-col gap-4">

          <div className="border rounded-xl p-3">
            <p className="text-gray-400 text-sm">Nome</p>
            <h2 className="font-semibold">
              Ana Luíza
            </h2>
          </div>

          <div className="border rounded-xl p-3">
            <p className="text-gray-400 text-sm">E-mail</p>
            <h2 className="font-semibold">
              analuiza@email.com
            </h2>
          </div>

          <button className="bg-black text-white py-2 rounded-xl">
            Editar Perfil
          </button>

          <button className="border py-2 rounded-xl">
            Meus Pedidos
          </button>

          <button className="border py-2 rounded-xl">
            Endereços
          </button>

          <button className="bg-red-500 text-white py-2 rounded-xl">
            Sair
          </button>

        </div>

      </div>

    </div>
  );
} 