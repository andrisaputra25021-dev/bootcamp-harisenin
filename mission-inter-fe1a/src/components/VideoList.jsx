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

const Cards = Array(9).fill({
  image: Thumbnail,
  title: "Big 4 Auditor Financial Analyst",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae suscipit.",
  mentorPhoto: Avatar,
  mentorName: "Jenna Ortega",
  company: "Gojek",
  rating: 5,
  price: "Rp 300K",
});

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
