export default function VideoCard({
  image,
  title,
  description,
  mentorPhoto,
  mentorName,
  company,
  rating,
  price,
}) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 flex flex-col gap-2 cursor-pointer transition hover:border-[#ffbd3a] hover:scale-105 hover:bg-yellow-100">
      <div className="w-full h-32 overflow-hidden rounded-xl">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-md md:text-xl font-bold">{title}</h2>
        <p className="hidden lg:text-gray-500 md:text-sm md:line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={mentorPhoto}
          alt={mentorName}
          className="w-10 h-10 rounded object-cover"
        />
        <div>
          <p className="font-semibold">{mentorName}</p>
          <p className="text-gray-500 text-sm">
            Senior di <span className="font-semibold">{company}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-1 text-[#ffbd3a] text-sm">
        <div>
          {[...Array(rating)].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
          <span className="text-gray-500 ml-2">(100)</span>
        </div>
        <div
          className="text-[#3ecf4c] text-xl md:text-2xl lg:text-3xl
         font-bold"
        >
          {price}
        </div>
      </div>
    </div>
  );
}
