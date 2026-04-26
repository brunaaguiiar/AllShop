import { CiShoppingCart } from "react-icons/ci";
import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="w-full bg-white border-b">
      <nav className="w-full flex items-center justify-between px-6 py-3">
        <Link to="/home" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="text-lg font-bold">
            All<span className="text-orange-500">Shop</span>
          </span>
        </Link>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center border rounded-lg px-3 py-1 w-[350px] bg-gray-100">
            <IoSearchOutline size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="bg-transparent outline-none px-2 w-full"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold 
            hover:bg-orange-600 transition-all duration-200 
            hover:scale-105 active:scale-95 
            shadow-md hover:shadow-lg cursor-pointer"
          >
            Entrar na sua conta
          </button>
          <button className="p-2 border rounded-lg cursor-pointer group hover:bg-gray-100">
            <CiShoppingCart
              size={22}
              className="text-gray-700 group-hover:text-orange-500 transition"
            />
          </button>
          <button className="p-2 border rounded-lg hover:bg-gray-100 cursor-pointer group ">
            <IoMenuOutline
              className="text-gray-700 group-hover:text-orange-500 transition"
              size={22}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
