import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@heroui/react";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";

export default function NavBar() {
  const links = [
    { name: "Início", href: "/home" },
    { name: "Pedidos", href: "/pedidos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Ajuda", href: "/Ajuda" },
  ];

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-orange-100 bg-white shadow-sm backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/home" className="flex items-center gap-3 no-underline">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:rotate-3">
            <span className="text-lg font-bold text-white">
              A
            </span>
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-800">
            All<span className="text-orange-500">Shop</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-orange-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("/login")}
            className="hidden h-12 rounded-2xl bg-orange-500 px-6 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 active:scale-95 cursor-pointer md:flex"
          >
            Entrar
          </Button>

          <Button
            isIconOnly
            variant="shadow"
            onPress={() => navigate("/carrinho")}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white p-0 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md cursor-pointer"
          >
            <CiShoppingCart
              size={24}
              className="text-gray-700 transition-all duration-300 hover:scale-110 hover:text-orange-500"
            />
          </Button>

          <Button
            isIconOnly
            onPress={() => navigate("/login")}
            className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md cursor-pointer"
          >
            <LuDoorClosed
              size={24}
              className="text-gray-700 transition-all duration-300 group-hover:opacity-0 group-hover:scale-75"
            />

            <LuDoorOpen
              size={24}
              className="absolute text-orange-500 opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
            />
          </Button>
        </div>
      </nav>
    </header>
  );
}