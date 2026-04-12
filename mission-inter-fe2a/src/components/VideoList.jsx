import VideoCard from "./VideoCard";
import Thumbnail from "../assets/images/background-text-hero.jpg";
import Avatar from "../assets/images/Avatar.png";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const Cards = [
  {
    image: Thumbnail,
    title: "Belajar React dari Nol",
    description: "Pelajari dasar React hingga bisa bikin project sendiri.",
    mentorPhoto: Avatar,
    mentorName: "Andi Wijaya",
    company: "Tokopedia",
    rating: 5,
    price: "Rp 300K",
  },
  {
    image: Thumbnail,
    title: "Digital Marketing Fundamental",
    description: "Strategi marketing digital untuk pemula.",
    mentorPhoto: Avatar,
    mentorName: "Siti Rahma",
    company: "Shopee",
    rating: 4.8,
    price: "Rp 250K",
  },
  {
    image: Thumbnail,
    title: "UI/UX Design Basic",
    description: "Belajar desain interface yang user-friendly.",
    mentorPhoto: Avatar,
    mentorName: "Budi Santoso",
    company: "Traveloka",
    rating: 4.7,
    price: "Rp 280K",
  },
  {
    image: Thumbnail,
    title: "Public Speaking Mastery",
    description: "Tingkatkan kepercayaan diri saat berbicara.",
    mentorPhoto: Avatar,
    mentorName: "Dewi Lestari",
    company: "Ruangguru",
    rating: 4.9,
    price: "Rp 200K",
  },
  {
    image: Thumbnail,
    title: "Bisnis Online untuk Pemula",
    description: "Mulai bisnis dari nol hingga menghasilkan.",
    mentorPhoto: Avatar,
    mentorName: "Rizky Pratama",
    company: "Bukalapak",
    rating: 4.6,
    price: "Rp 320K",
  },
  {
    image: Thumbnail,
    title: "Node.js Backend Development",
    description: "Bangun API menggunakan Node.js dan Express.",
    mentorPhoto: Avatar,
    mentorName: "Fajar Nugroho",
    company: "Gojek",
    rating: 4.8,
    price: "Rp 350K",
  },
  {
    image: Thumbnail,
    title: "Data Analyst dengan Excel",
    description: "Analisis data praktis pakai Excel.",
    mentorPhoto: Avatar,
    mentorName: "Nina Putri",
    company: "Bank BCA",
    rating: 4.7,
    price: "Rp 270K",
  },
  {
    image: Thumbnail,
    title: "Manajemen Waktu Produktif",
    description: "Atur waktu agar lebih efektif dan fokus.",
    mentorPhoto: Avatar,
    mentorName: "Agus Salim",
    company: "Telkom Indonesia",
    rating: 4.5,
    price: "Rp 180K",
  },
  {
    image: Thumbnail,
    title: "Frontend Advanced (React + Tailwind)",
    description: "Upgrade skill frontend ke level profesional.",
    mentorPhoto: Avatar,
    mentorName: "Kevin Hartono",
    company: "Startup X",
    rating: 5,
    price: "Rp 400K",
  },
];

function VideoList() {
  return (
    <section
      id="section-list-video"
      className="flex flex-col justify-center px-4 md:px-8 lg:px-16 gap-4"
    >
      <div className="inline-block">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold">
          Koleksi Video Pembelajaran Unggulan
        </h1>
        <p className="text-base font-medium text-gray-700 pt-4">
          Jelajahi dunia melalui pengetahuan kami!
        </p>
      </div>

      <div>
        <ul className="flex gap-6 py-2 overflow-x-auto md:overflow-visible whitespace-nowrap">
          {categories.map((category, index) => (
            <li key={index}>
              <a className="text-gray-500 font-bold tracking-wide pb-2 border-b-3 border-transparent transition hover:text-[#f64920] hover:border-[#f64920] ">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Cards.map((Card, index) => (
          <VideoCard key={index} {...Card} />
        ))}
      </div>
    </section>
  );
}
export default VideoList;
