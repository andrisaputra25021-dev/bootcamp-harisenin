import BgTextCTA from "../assets/images/backgorund-text-cta.png";

function CTA() {
  return (
    <section className="flex justify-center items-center p-4 md:px-8 lg:px-16 md:py-10 lg:py-12">
      <div
        className="w-full rounded-xl p-12 text-white flex flex-col items-center text-center gap-4 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${BgTextCTA})`,
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundBlendMode: "multiply",
        }}
      >
        <p className="px-16 text-base">NEWSLETTER</p>
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-snug">
          Mau Belajar Lebih Banyak?
        </h1>
        <p className="px-1 md:px-12 lg:px-16 text-base">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik <strong>videobelajar.id</strong>
        </p>

        <div className="flex flex-col gap-2 lg:relative lg:w-xl">
          <input
            type="email"
            placeholder="Masukkan Emailmu"
            className="w-full bg-white/25 px-4 py-3 rounded-lg border"
          />

          <button className="w-full lg:w-auto lg:absolute lg:right-1 lg:top-1/2 lg:-translate-y-1/2 bg-yellow-400 px-4 py-2 rounded-lg font-semibold transition hover:bg-[#3ecf4c] hover:scale-105">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
export default CTA;
