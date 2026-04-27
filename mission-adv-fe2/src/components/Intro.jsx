import BgTextHero from "../assets/images/background-text-hero.jpg";

function Intro() {
  return (
    <section className="flex justify-center items-center p-4 md:px-8 lg:px-16 md:py-10 lg:py-12">
      <div
        className="w-full rounded-xl p-6 md:p-10 lg:p-12 text-white flex flex-col items-center text-center gap-4 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${BgTextHero})`,
          backgroundColor: "rgba(0,0,0,0.8)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-snug">
          Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video
          interaktif!
        </h1>
        <p className="px-1 md:px-12 lg:px-16 text-base">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <a
          href="#section-list-video"
          className="bg-[#3ecf4c] text-white font-bold tracking-wide md:px-4 md:py-2 lg:px-4 lg:py-2 rounded-xl transition hover:scale-105"
        >
          Temukan video course untuk dipelajari!
        </a>
      </div>
    </section>
  );
}
export default Intro;
