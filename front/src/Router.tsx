import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NavBar from "./components/navbar/Navbar";
import Login from "./screens/login/Login";
import Cadastro from "./screens/cadastro/Cadastro";
import RecuperarSenha from "./screens/recuperarSenha/RecuperarSenha";
import PerfilUsuario from "./screens/PerfilUsuario/PerfilUsuario";
import Ajuda from "./screens/ajuda/Ajuda";
import Sobre from "./screens/sobre/Sobre";
import EditarPerfil from "./screens/PerfilUsuario/EditarPerfil";
import PaginaPerfilAcao from "./screens/PerfilUsuario/PaginaPerfilAcao";
import ProdutoDetalhe from "./screens/produto/ProdutoDetalhe";
import MeusPedidos from "./screens/MeusPedidos/meusPedidos";
import Fornecedor from "./screens/fornecedor/fornecedor";
import Favoritos from "./screens/favoritos/Favoritos";

const ProtectedLayout = () => {
  return (
    <div className="min-h-screen w-full relative">
      <NavBar />
      <main className="w-full min-h-screen pt-20">
        <Outlet />
      </main>
    </div>
  );
};

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />

      <Route path="/recuperar-senha" element={<RecuperarSenha />} />

      <Route
        path="/recuperarsenha"
        element={<Navigate to="/recuperar-senha" replace />}
      />
      <Route
        path="/recuperar"
        element={<Navigate to="/recuperar-senha" replace />}
      />
      <Route path="/Cadastro" element={<Cadastro />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/editar-perfil" element={<EditarPerfil />} />
        <Route path="/meusPedidos" element={<MeusPedidos />} />
        <Route path="/meus-pedidos" element={<MeusPedidos />} />
        <Route path="/pedidos" element={<MeusPedidos />} />
        <Route path="/fornecedor" element={<Fornecedor />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route
          path="/enderecos"
          element={<PaginaPerfilAcao tipo="enderecos" />}
        />
        <Route
          path="/minha-carteira"
          element={<PaginaPerfilAcao tipo="carteira" />}
        />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="/perfil" element={<PerfilUsuario />} />
      </Route>

      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  )
}
