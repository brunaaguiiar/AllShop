import React from "react";

import { Button } from "@heroui/react";

import {
  IoHome,
  IoSearch,
  IoCart,
  IoPerson,
} from "react-icons/io5";

export default function Home() {

  const produtos = [
    {
      id: 1,
      nome: "Headphone Gamer",
      preco: "R$ 299,90",
      imagem:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      nome: "Teclado RGB",
      preco: "R$ 199,90",
      imagem:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 3,
      nome: "Mouse Gamer",
      preco: "R$ 149,90",
      imagem:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}
      <header className="bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <div className="h-10 w-10 rounded-xl bg-orange-500 flex items-center justify-center">

              <span className="text-white font-bold text-lg">
                A
              </span>

            </div>

            <h1 className="text-2xl font-bold text-gray-800">
              AllShop
            </h1>

          </div>

          {/* MENU */}
          <div className="flex items-center gap-6 text-gray-600">

            <IoHome
              size={24}
              className="cursor-pointer hover:text-orange-500 transition-all"
            />

            <IoSearch
              size={24}
              className="cursor-pointer hover:text-orange-500 transition-all"
            />

            <IoCart
              size={24}
              className="cursor-pointer hover:text-orange-500 transition-all"
            />

            <IoPerson
              size={24}
              className="cursor-pointer hover:text-orange-500 transition-all"
            />

          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* TEXTO */}
          <div>

            <p className="text-orange-500 font-semibold mb-3">
              NOVA COLEÇÃO
            </p>

            <h2 className="text-5xl font-bold text-gray-800 leading-tight max-w-xl">

              Os melhores produtos para você

            </h2>

            <p className="text-gray-500 mt-5 max-w-lg">

              Produtos modernos, bonitos e com ótima qualidade
              para deixar seu setup mais profissional.

            </p>

            <Button
              color="warning"
              className="mt-6 text-white font-semibold"
            >
              Comprar Agora
            </Button>

          </div>

          {/* IMAGEM */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop"
              alt="Banner"
              className="w-[400px] rounded-3xl shadow-lg"
            />

          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Produtos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {produtos.map((produto) => (

            <div
              key={produto.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:scale-[1.02] transition-all"
            >

              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold text-gray-800">
                  {produto.nome}
                </h3>

                <p className="text-orange-500 font-bold text-lg mt-2">
                  {produto.preco}
                </p>

                <Button
                  color="warning"
                  className="w-full mt-5 text-white font-semibold"
                >
                  Comprar
                </Button>

              </div>
            </div>

          ))}
        </div>
      </section>
    </div>
  );
}