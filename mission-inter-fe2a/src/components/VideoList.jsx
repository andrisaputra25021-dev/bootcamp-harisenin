import VideoCard from "./VideoCard";
import Thumbnail1 from "../assets/images/thumbnail-reactjs.jpg";
import Mentor1 from "../assets/images/mentor1.png";
import Thumbnail2 from "../assets/images/thumbnail-digitalmarketing.jpg";
import Mentor2 from "../assets/images/mentor2.png";
import Thumbnail3 from "../assets/images/thumbnail-uiux.jpg";
import Mentor3 from "../assets/images/mentor3.png";
import Thumbnail4 from "../assets/images/thumbnail-publicspeaking.jpg";
import Mentor4 from "../assets/images/mentor4.png";
import Thumbnail5 from "../assets/images/thumbnail-bisnisonline.jpg";
import Mentor5 from "../assets/images/mentor5.png";
import Thumbnail6 from "../assets/images/thumbnail-nodejs.jpg";
import Mentor6 from "../assets/images/mentor6.png";
import Thumbnail7 from "../assets/images/thumbnail-dataanalis.jpg";
import Mentor7 from "../assets/images/mentor7.png";
import Thumbnail8 from "../assets/images/thumbnail-cysec.jpg";
import Mentor8 from "../assets/images/mentor8.png";
import Thumbnail9 from "../assets/images/thumbnail-webdev.jpg";
import Mentor9 from "../assets/images/mentor9.png";

const categories = [
  "Semua Kelas",
  "Pemasaran",
  "Desain",
  "Pengembangan Diri",
  "Bisnis",
];

const Cards = [
  {
    image: Thumbnail1,
    title: "Belajar React dari Nol",
    description: "Pelajari dasar React hingga bisa bikin project sendiri.",
    mentorPhoto: Mentor1,
    mentorName: "Suharya Santoso",
    company: "Tokomedia.com",
    rating: 5,
    price: "Rp 300K",
  },
  {
    image: Thumbnail2,
    title: "Digital Marketing Fundamental",
    description: "Strategi marketing digital untuk pemula.",
    mentorPhoto: Mentor2,
    mentorName: "Saiful Fajar",
    company: "Shopping.id",
    rating: 5,
    price: "Rp 250K",
  },
  {
    image: Thumbnail3,
    title: "UI/UX Design",
    description: "Belajar desain interface yang user-friendly.",
    mentorPhoto: Mentor3,
    mentorName: "Maulana Firdaus",
    company: "BantuDeal",
    rating: 5,
    price: "Rp 250K",
  },
  {
    image: Thumbnail4,
    title: "Public Speaking Mastery",
    description: "Tingkatkan kepercayaan diri saat berbicara.",
    mentorPhoto: Mentor4,
    mentorName: "Dewi Lestari",
    company: "RuangSuara",
    rating: 5,
    price: "Rp 250K",
  },
  {
    image: Thumbnail5,
    title: "Bisnis Online untuk Pemula",
    description: "Mulai bisnis dari nol hingga menghasilkan.",
    mentorPhoto: Mentor5,
    mentorName: "Rizkya Utami",
    company: "Bukawarung.com",
    rating: 5,
    price: "Rp 250K",
  },
  {
    image: Thumbnail6,
    title: "NodeJS Backend Development",
    description: "Bangun API menggunakan Node.js dan Express.",
    mentorPhoto: Mentor6,
    mentorName: "Gurindo Sekti Perdana",
    company: "PickUpNow",
    rating: 5,
    price: "Rp 300K",
  },
  {
    image: Thumbnail7,
    title: "Data Analyst dengan Excel",
    description: "Analisis data praktis pakai Excel.",
    mentorPhoto: Mentor7,
    mentorName: "Indra Hardiansyah",
    company: "Bank BJG",
    rating: 5,
    price: "Rp 250K",
  },
  {
    image: Thumbnail8,
    title: "Cyber Security Fundamental",
    description: "Memahami keamanan digital dan celah keamanannya.",
    mentorPhoto: Mentor8,
    mentorName: "Edo Apriyadi Chefie",
    company: "Telekia",
    rating: 5,
    price: "Rp 200K",
  },
  {
    image: Thumbnail9,
    title: "Website Development",
    description: "Membuat website dengan langkah yg terstruktur.",
    mentorPhoto: Mentor9,
    mentorName: "Kinan Hartini",
    company: "Startup M",
    rating: 5,
    price: "Rp 300K",
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
