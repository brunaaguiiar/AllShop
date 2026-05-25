import React from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { IoShieldCheckmark, IoHeadset, IoCarOutline } from "react-icons/io5";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner Coleção 2025 */}
      <section
        className="text-white text-center py-24 px-6 bg-cover bg-center relative"
        style={{ backgroundImage: "https://i.pinimg.com/736x/cd/f2/0e/cdf20ed302160bf411880caca9081dfa.jpg" }}
      >
        <div className="bg-black/50 absolute inset-0"></div> {/* overlay para contraste */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">COLEÇÃO 2025</h2>
          <p className="text-lg mb-6">Tecnologia que eleva o seu dia.</p>
          <p className="mb-6">
            Áudio premium, periféricos gamer e acessórios urbanos com até 40% OFF e frete grátis.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-orange-500 text-white rounded-full px-6">Comprar agora</Button>
            <Button className="bg-white text-orange-600 rounded-full px-6">Saiba mais</Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-gray-800 text-white py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <IoCarOutline size={32} className="text-orange-400" />
          <h3 className="font-semibold">Frete grátis</h3>
          <p className="text-sm">Em compras acima de R$ 199</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoShieldCheckmark size={32} className="text-orange-400" />
          <h3 className="font-semibold">Garantia 12 meses</h3>
          <p className="text-sm">Direto com o fabricante</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <IoHeadset size={32} className="text-orange-400" />
          <h3 className="font-semibold">Suporte 24/7</h3>
          <p className="text-sm">Estamos aqui para ajudar</p>
        </div>
      </section>

      {/* Mais vendidos */}
      <section className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Mais vendidos</h2>
        <p className="text-gray-600 mb-6">Os favoritos da nossa comunidade.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Produto 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img src="https://m.media-amazon.com/images/I/61UAFRru23L._AC_SL1500_.jpg" alt="Headphone Pro X" className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">Headphone Pro X</h3>
            <p className="text-gray-500">R$ 899,90</p>
            <Button
              className="mt-4 w-full bg-orange-500 text-white rounded-full"
              onClick={() => navigate("/produto/headphone")}
            >
              Ver mais
            </Button>
          </div>

          {/* Produto 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img src="https://m.media-amazon.com/images/I/61N+FZw5gxL._AC_SL1500_.jpg" alt="AllWatch Active" className="w-40 h-40 object-contain mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">AllWatch Active</h3>
            <p className="text-gray-500">R$ 649,00</p>
            <Button className="mt-4 w-full bg-orange-500 text-white rounded-full">Ver mais</Button>
          </div>

          {/* Produto 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img src="https://i.pinimg.com/736x/cd/f2/0e/cdf20ed302160bf411880caca9081dfa.jpg" />
            <h3 className="text-lg font-semibold text-gray-800">Teclado Mecânico RGB</h3>
            <p className="text-gray-500">R$ 459,90</p>
            <Button className="mt-4 w-full bg-orange-500 text-white rounded-full">Ver mais</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 text-center py-4 text-sm text-gray-600">
        © 2025 AllShop - Todos os direitos reservados
      </footer>
    </div>
  );
}