import { useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button, Link } from "@heroui/react"
import { LuDoorClosed, LuDoorOpen } from "react-icons/lu"
import { FiShoppingCart } from "react-icons/fi"

interface Usuario {
  nome: string
  email: string
  telefone?: string
}

export default function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const usuarioLogado = useMemo<Usuario | null>(() => {
    try {
      const salvo = localStorage.getItem("allshop:usuario")
      return salvo ? (JSON.parse(salvo) as Usuario) : null
    } catch {
      return null
    }
  }, [location]);

  const links = [
    { name: "Início", href: "/home" },
    { name: "Pedidos", href: "/meus-pedidos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Ajuda", href: "/Ajuda" },
  ]

  const handleLogout = () => {
    localStorage.removeItem("allshop:token")
    localStorage.removeItem("allshop:usuario")
    sessionStorage.clear();
    navigate("/login")
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-orange-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/home" className="flex items-center gap-3 no-underline">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:rotate-3">
            <span className="rounded-full text-lg font-bold text-white">A</span>
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
              className="relative text-sm font-medium text-gray-700 no-underline transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:text-orange-500 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">

          {!usuarioLogado ? (
            <>
              <Button
                isIconOnly
                variant="light"
                onPress={() => navigate("/carrinho")}
                className="h-12 w-12 cursor-pointer items-center justify-center rounded-2xl text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300"
                aria-label="Carrinho"
              >
                <FiShoppingCart size={22} />
              </Button>

              <Button
                onClick={() => navigate("/login")}
                className="h-12 cursor-pointer rounded-2xl bg-orange-500 px-6 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-600 active:scale-95 flex"
              >
                Entrar
              </Button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/perfil")}
                className="items-center gap-1 flex bg-transparent border-none p-0 cursor-pointer outline-none group"
              >
                <span className="text-sm font-medium text-gray-600 transition-colors duration-200 group-hover:text-gray-900">
                  Olá,{" "}
                  <span className="font-bold text-orange-500 underline decoration-transparent group-hover:decoration-orange-500 transition-all duration-200">
                    {usuarioLogado.nome}
                  </span>
                  !
                </span>
              </button>
              <Button
                isIconOnly
                variant="light"
                onPress={() => navigate("/carrinho")}
                className="group relative h-12 w-12 cursor-pointer rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
                aria-label="Carrinho"
              >
                <FiShoppingCart size={22} />
              </Button>
              <Button
                isIconOnly
                onPress={handleLogout}
                className="group relative h-12 w-12 cursor-pointer rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
              >
                <div className="relative flex items-center justify-center">
                  <LuDoorClosed
                    size={24}
                    className="text-gray-700 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0"
                  />
                  <LuDoorOpen
                    size={24}
                    className="absolute scale-75 text-orange-500 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
