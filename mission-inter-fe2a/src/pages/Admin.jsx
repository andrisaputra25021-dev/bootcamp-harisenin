import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Footer from "../components/Footer";

export default function Admin({ cards, setCards }) {
  // state form
  const [form, setForm] = useState({
    title: "",
    description: "",
    mentorName: "",
    company: "",
    price: "",
    mentorPhoto: "",
    image: "",
  });

  // state edit form
  const [editingId, setEditingId] = useState(null);

  // reset form
  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      mentorName: "",
      company: "",
      price: "",
      mentorPhoto: "",
      image: "",
    });
    setEditingId(null);
  };

  // handle Input text
  const handleText = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // convert file gambar ke base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  //   handle upload image
  const handleImage = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    const base64 = await fileToBase64(file);
    if (type === "image") {
      setForm((prev) => ({ ...prev, image: base64 }));
    }
    if (type === "mentorPhoto") {
      setForm((prev) => ({ ...prev, mentorPhoto: base64 }));
    }
  };

  //   tamabah VideoCard
  const addCard = () => {
    if (!form.title || !form.description || !form.mentorName || !form.price) {
      alert("Mohon Isi Data Penting!");
      return;
    }

    const newCard = {
      id: Date.now(),
      rating: 5,
      ...form,
    };

    setCards((prev) => [...prev, newCard]);
  };

  // update data videocard
  const updateCard = () => {
    setCards((prev) =>
      prev.map((card) => (card.id === editingId ? { ...card, ...form } : card)),
    );
  };

  // delete card
  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  // edit card
  const editCard = (card) => {
    setEditingId(card.id);
    setForm(card);
  };

  return (
    <div className="min-h-screen bg-[#ffbd3a]">
      <nav className="fixed top-0 w-full z-1000 h-16 md:h-20 lg:h-20 bg-white border-b border-black/15 flex items-center justify-between px-6 md:px-12 lg:px-16">
        <div className="">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-35 md:w-full" />
          </Link>
        </div>

        <h1 className="text-3xl text-[#ffbd3a]">
          <strong>Admin Panel</strong>
        </h1>
        <button id="menu" className=" text-[#ffbd3a] text-3xl md:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>

      {/* form styling */}
      <div className="flex justify-between px-10 py-8">
        <div className="flex flex-col max-w-xl bg-white px-8 py-2 rounded-xl shadow-xl">
          <label htmlFor="">
            <strong>Judul Course :</strong>
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleText}
            required
            className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="">
            <strong>Deskripsi :</strong>
          </label>
          <textarea
            type="text"
            name="description"
            value={form.description}
            onChange={handleText}
            required
            className=" border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="">
            <strong>Nama Pengajar :</strong>
          </label>
          <input
            type="text"
            name="mentorName"
            value={form.mentorName}
            onChange={handleText}
            required
            className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="">
            <strong>Nama Perusahaan :</strong>
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleText}
            className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <label htmlFor="">
            <strong>Harga :</strong>
          </label>
          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleText}
            required
            className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="grid grid-cols-2 gap-4 mt-2">
            {/* Thumbnail */}
            <label className="border-1 border-dashed rounded-xl p-3 text-center cursor-pointer hover:bg-black/15">
              <p className="font-bold text-sm">Masukkan Thumbnail Video</p>
              <input
                type="file"
                onChange={(e) => handleImage(e, "image")}
                className="text-sm text-gray-700 truncate max-w-full"
              />
            </label>

            {/* Foto Pengajar */}
            <label className="border-1 border-dashed rounded-xl p-4 text-center cursor-pointer hover:bg-black/15">
              <p className="font-bold text-sm">Masukkan Poto Pengajar</p>
              <input
                type="file"
                onChange={(e) => handleImage(e, "mentorPhoto")}
                className="text-sm text-gray-700 truncate truncate max-w-full"
              />
            </label>
          </div>

          <button
            onClick={editingId ? updateCard : addCard}
            className={`mt-2 py-2 rounded-lg font-semibold text-white transition ${
              editingId
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-[#3ecf4c] hover:bg-green-700"
            }`}
          >
            {editingId ? "Update" : "Tambah"}
          </button>
        </div>

        {/* List data / list Videocard */}
        <div className="bg-black/25 p-4 rounded-xl h-[470px] overflow-y-auto pr-2 flex flex-col gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-4 rounded-xl shadow flex justify-between items-center gap-4"
            >
              <p className="font-bold text-md">{card.title}</p>
              <p className="text-sm text-gray-500 truncate max-w-[100px]">
                {card.mentorName}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => editCard(card)}
                  className="px-3 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCard(card.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
