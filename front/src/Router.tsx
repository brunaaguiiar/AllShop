import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./screens/home/Home";
import NavBar from "./components/navbar/Navbar";
import Login from "./screens/login/Login";
import Cadastro from "./screens/cadastro/Cadastro";

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
    <Route path="/Cadastro" element={<Cadastro />} />
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}