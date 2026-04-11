import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import GoogleIcon from "../assets/images/logos_google-icon.png";

function Login() {
  return (
    <>
      <nav className="fixed top-0 w-full h-20 bg-white border-b border-black/15 z-50 flex items-center justify-between px-20 z-1000">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-full" />
          </Link>
        </div>

        <button id="menu" className="hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      <section className="max-w-[1440px] mx-auto">
        <form className="gap-2 mx-4 my-8 px-4 py-4 flex flex-col rounded-lg border-2 border-black/15 md:mx-20 lg:mx-80 md:px-10 lg:px-16 md:py-8 lg:py-12">
          <div className="inline-block justify-center text-center">
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl font-semibold">
              Masuk ke Akun
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl font-semibold text-black/50">
              Yuk, lanjutin belajarmu di videobelajar.
            </p>
          </div>

          <div className="form-input">
            <label
              htmlFor="email"
              className="text-md md:text-md lg:text-xl flex text-black/75"
            >
              Email<span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full p-2 border-2 border-black/25 rounded-lg"
            />
            <label
              htmlFor="password"
              className="text-md md:text-md lg:text-xl flex text-black/75"
            >
              Kata Sandi<span className="text-orange-500">*</span>
            </label>
            <div className="password-field relative">
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full p-2 border-2 border-black/25 rounded-lg"
              />
              <i
                className="fa-solid fa-eye
                cursor-pointer absolute text-black/50 absolute right-3 top-3 hover:text-orange-500"
              />
            </div>
            <div className="text-base text-right text-md md:text-md lg:text-xl font-semibold text-black/50 hover:text-orange-500">
              <Link to="#">Lupa Password?</Link>
            </div>

            <div className="flex flex-col justify-center items-center mt-4 gap-4">
              <button
                id="button-sign-up"
                className="w-full text-white bg-[#3ecf4c] p-3 text-md md:text-md lg:text-xl rounded-lg cursor-pointer"
              >
                Daftar
              </button>
              <button
                id="button-login"
                className="w-full text-[#3ecf4c] bg-[#e2fcd9] p-3 text-md md:text-md lg:text-xl rounded-lg cursor-pointer"
              >
                Masuk
              </button>
              <p className="text-black/50">atau</p>
              <button
                id="button-sso-google"
                className="border-2 border-black/25 bg-gray-100 flex justify-center items-center gap-4 w-full text-black/75 p-3 text-md md:text-md lg:text-xl rounded-lg cursor-pointer"
              >
                <div className="w-4 h-4">
                  <img src={GoogleIcon} alt="google-icon" />
                </div>
                <span>Daftar dengan Google</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
