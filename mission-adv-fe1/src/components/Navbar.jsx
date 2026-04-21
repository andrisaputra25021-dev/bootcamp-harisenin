import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { useState } from "react";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-1000 h-20 md:h-20 lg:h-20 bg-white border-b border-black/15 flex items-center justify-between px-6 md:px-12 lg:px-16">
      <div className="">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-35 md:w-full" />
        </Link>
      </div>
      <div className="hidden md:flex md:items-center md:gap-4 cursor-pointer">
        <Link to="/category" className="text-black/50">
          Kategori
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 bg-[#3ecf4c] text-white rounded transition hover:scale-110"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-white-500 text-[#3ecf4c] rounded border border-[#3ecf4c] transition hover:scale-110"
        >
          Register
        </Link>
        <Link
          to="/admin"
          className="px-4 py-2 bg-[#ffbd3a] text-[#ffffff] font-bold rounded border border-[#ffbd3a] transition hover:scale-110"
        >
          Admin
        </Link>
      </div>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        id="menu"
        className=" text-3xl text-[#ffbd3a] md:hidden"
      >
        <i className={openMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
      {/* Hamburger menu for mobile */}
      {openMenu && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-black/10 flex flex-col items-center shadow-lg md:hidden">
          <Link
            to="/category"
            onClick={() => setOpenMenu(false)}
            className="text-black/50"
          >
            Kategori
          </Link>
          <Link
            to="/login"
            onClick={() => setOpenMenu(false)}
            className="w-full text-center px-4 py-2 bg-[#3ecf4c] text-white rounded transition hover:scale-110"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setOpenMenu(false)}
            className="w-full text-center px-4 py-2 bg-white-500 text-[#3ecf4c] rounded border border-[#3ecf4c] transition hover:scale-110"
          >
            Register
          </Link>
          <Link
            to="/admin"
            onClick={() => setOpenMenu(false)}
            className="w-full text-center px-4 py-2 bg-[#ffbd3a] text-[#ffffff] font-bold rounded border border-[#ffbd3a] transition hover:scale-110"
          >
            Admin
          </Link>
        </div>
      )}{" "}
    </nav>
  );
}
export default Navbar;
