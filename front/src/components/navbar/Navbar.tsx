import { CiShoppingCart } from "react-icons/ci";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Button, Link } from "@heroui/react";
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu";

export default function NavBar() {
  const links = [
    { name: "Início", href: "/home" },
    { name: "Produtos", href: "/produtos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Contato", href: "/contato" },
  ];

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/80backdrop-blur-xltransition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/home" className="flex items-center gap-3 no-underline">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:rotate-3">
            <span className="text-lg font-bold rounded-full text-white ">A</span>
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
              className="relative text-sm font-medium text-gray-700 no-underline transition-colors duration-300 hover:text-orange-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0  after:bg-orange-500 after:transition-all after:duration-300  hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("/login")}
            className="hidden md:flex rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5  hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40 active:scale-95 cursor-pointer"
          >
            Entrar
          </Button>
          <Button className="group rounded-2xl border border-gray-20  bg-white p-3 transition-all duration-300 hover:border-orange-200  hover:bg-orange-50  hover:shadow-md cursor-pointer">
            <CiShoppingCart
              size={28}
              className="text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500"
            />
          </Button>
          <Button className=" group rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md cursor-pointer">
            <IoMenuOutline
              size={28}
              className=" text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500"
            />
          </Button>
           <Button
              isIconOnly
              onClick={() => navigate("/login")}
              className="group rounded-2xl border border-gray-200 bg-white p-3 transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md cursor-pointer"
            >
              <LuDoorClosed
                size={28}
                className="text-gray-700 transition-all duration-300 group-hover:scale-110 group-hover:text-orange-500"
              />
              <LuDoorOpen
                size={28}
                className="absolute opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
              />
            </Button>
        </div>
      </nav>
    </header>
  );
}
