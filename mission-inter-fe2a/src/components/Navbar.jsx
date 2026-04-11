import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-1000 h-16 md:h-20 lg:h-20 bg-white border-b border-black/15 flex items-center justify-between px-6 md:px-12 lg:px-16">
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
      </div>

      <button id="menu" className=" text-3xl md:hidden">
        <i className="fa-solid fa-bars"></i>
      </button>
    </nav>
  );
}
export default Navbar;
