import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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
    resetForm();
  };

  // update data videocard
  const updateCard = () => {
    setCards((prev) =>
      prev.map((card) => (card.id === editingId ? { ...card, ...form } : card)),
    );
    resetForm();
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
      <Navbar />

      <main className="max-w-[1440px] mx-auto">
        <h1 className="text-center text-white text-2xl md:text-5xl pt-4 md:pt-6">
          <strong>Admin Panel</strong>
        </h1>
        {/* form styling */}
        <div className="flex flex-col gap-6 p-4 md:flex-row md:gap-10 md:px-16 md:py-8">
          <div className="flex flex-col max-w-xl bg-white px-8 py-2 rounded-xl shadow-xl">
            <label htmlFor="title">
              <strong>Judul Course :</strong>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={handleText}
              required
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label htmlFor="description">
              <strong>Deskripsi :</strong>
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={form.description}
              onChange={handleText}
              required
              className=" border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label htmlFor="mentorName">
              <strong>Nama Pengajar :</strong>
            </label>
            <input
              type="text"
              name="mentorName"
              id="mentorName"
              value={form.mentorName}
              onChange={handleText}
              required
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label htmlFor="company">
              <strong>Nama Perusahaan :</strong>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={form.company}
              onChange={handleText}
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label htmlFor="price">
              <strong>Harga :</strong>
            </label>
            <input
              type="text"
              name="price"
              id="price"
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
          <div className="bg-black/25 p-4 rounded-xl max-h-[480px] overflow-y-auto flex flex-col gap-4 w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-white p-2 md:p-4 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <p className="font-bold text-md text-center">{card.title}</p>
                <p className="text-sm text-center text-gray-500 md:text-center md:truncate md:max-w-[100px]">
                  {card.mentorName}
                </p>

                <div className="flex flex-col md:flex-row gap-2 md:gap-4">
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
      </main>
    </div>
  );
}
