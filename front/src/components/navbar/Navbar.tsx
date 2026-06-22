import { ReactNode, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Button, Link } from "@heroui/react"
import { LuDoorClosed, LuDoorOpen, LuHeart } from "react-icons/lu"
import { FiShoppingCart } from "react-icons/fi"

interface Usuario {
  nome: string;
  email: string;
  telefone?: string;
  role?: string;
}

interface NavIconBtnProps {
  children: ReactNode
  onPress: () => void
  ariaLabel: string
}

function NavIconBtn({ children, onPress, ariaLabel }: NavIconBtnProps) {
  return (
    <Button
      isIconOnly
      variant="light"
      onPress={onPress}
      aria-label={ariaLabel}
      className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:border-orange-200 hover:bg-orange-50 hover:shadow-md"
    >
      {children}
    </Button>
  )
}

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const usuarioLogado = useMemo<Usuario | null>(() => {
    try {
      const salvo = localStorage.getItem("allshop:usuario")
      return salvo ? (JSON.parse(salvo) as Usuario) : null
    } catch {
      return null;
    }
  }, [location]);

  const links = [
    { name: "Início", href: "/home" },
    { name: "Meus Pedidos", href: "/meus-pedidos" },
    { name: "Sobre", href: "/sobre" },
    { name: "Ajuda", href: "/Ajuda" },
  ]

  if (usuarioLogado?.role === "ADMIN") {
    links.push({ name: "Fornecedor", href: "/fornecedor" });
  }

  const handleLogout = () => {
    localStorage.removeItem("allshop:token");
    localStorage.removeItem("allshop:usuario");
    sessionStorage.clear();
    navigate("/login");
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-orange-100 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 bg-transparent">
        <Link href="/home" className="flex items-center gap-3 no-underline">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 shadow-lg shadow-orange-500/30">
            <span className="text-lg font-bold text-white">A</span>
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
              className="text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {!usuarioLogado ? (
            <>
              <NavIconBtn
                onPress={() => navigate("/carrinho")}
                ariaLabel="Carrinho"
              >
                <FiShoppingCart size={22} />
              </NavIconBtn>
              <Button
                onPress={() => navigate("/login")}
                className="h-12 rounded-2xl bg-orange-500 px-6 font-semibold text-white"
              >
                Entrar
              </Button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/perfil")}
                className="flex cursor-pointer items-center gap-1 border-none bg-transparent p-0 outline-none"
              >
                <span className="text-sm font-medium text-gray-600">
                  Olá,{" "}
                  <span className="font-bold text-orange-500">
                    {usuarioLogado.nome}
                  </span>
                  !
                </span>
              </button>

              <NavIconBtn
                onPress={() => navigate("/favoritos")}
                ariaLabel="Favoritos"
              >
                <LuHeart size={22} className="text-gray-700" />
              </NavIconBtn>

              <NavIconBtn
                onPress={() => navigate("/carrinho")}
                ariaLabel="Carrinho"
              >
                <FiShoppingCart size={22} className="text-gray-700" />
              </NavIconBtn>

              <NavIconBtn onPress={handleLogout} ariaLabel="Sair">
                <div className="relative flex items-center justify-center">
                  <LuDoorClosed
                    size={22}
                    className="text-gray-700 transition-all duration-300 group-hover:scale-75 group-hover:opacity-0"
                  />
                  <LuDoorOpen
                    size={22}
                    className="absolute scale-75 text-orange-500 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  />
                </div>
              </NavIconBtn>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
