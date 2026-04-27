import Logo from "../assets/images/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white border-t border-black/15">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:px-6 py-10">
        <div className="flex flex-col gap-2 px-6">
          <img src={Logo} alt="Logo" className="w-40" />
          <p>
            <strong>
              Gali Potensi Anda Melalui Pembelajaran Video di videobelajar.id
            </strong>
          </p>
          <p className="text-gray-500">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-gray-500">+62-877-7123-1234</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:ml-auto gap-6 px-6">
          <div className="cursor-pointer">
            <h3>
              <strong>Kategori</strong>
            </h3>
            <ul className="hidden lg:block text-gray-500 pt-2 space-y-1 cursor-pointer">
              <li>Digital & Teknologi</li>
              <li>Pemasaran</li>
              <li>Manajemen Bisnis</li>
              <li>Pengembangan Diri</li>
              <li>Desain</li>
            </ul>
          </div>
          <div>
            <h3>
              <strong>Perusahaan</strong>
            </h3>
            <ul className="hidden lg:block text-gray-500 pt-2 space-y-1 cursor-pointer">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Kebijakan Privasi</li>
              <li>Ketentuan Layanan</li>
              <li>Bantuan</li>
            </ul>
          </div>
          <div>
            <h3>
              <strong>Komunitas</strong>
            </h3>
            <ul className="hidden lg:block text-gray-500 pt-2 space-y-1 cursor-pointer">
              <li>Tips Sukses</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse border-t border-black/15 p-4 lg:p-6 md:pt-4 md:flex-row justify-between items-start md:items-center gap-4 text-black/50">
        <p>
          @2025 | <span className="font-semibold">videobelajar.id</span> | All
          Right Reserved.
        </p>

        <div className="flex gap-4 text-2xl">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hover:text-[#ffbd3a] transition cursor-pointer hover:scale-110"
          />

          <FontAwesomeIcon
            icon={faInstagram}
            className="hover:text-[#ffbd3a] transition cursor-pointer hover:scale-110"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="hover:text-[#ffbd3a] transition cursor-pointer hover:scale-110"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="hover:text-[#ffbd3a] transition cursor-pointer hover:scale-110"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
