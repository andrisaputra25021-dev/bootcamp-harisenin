import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useCourses from "../hooks/useCourses";

export default function Admin() {
  // ambil data dari hooks
  const { courses, loading, error, createCourse, editCourse, removeCourse } =
    useCourses();

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

  const [editingId, setEditingId] = useState(null);

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

  const handleText = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // tambah card
  const addCard = async () => {
    if (!form.title || !form.description || !form.mentorName || !form.price) {
      alert("Mohon Isi Data Penting!");
      return;
    }
    await createCourse({ ...form, rating: 5 });
    resetForm();
  };

  // update card
  const updateCard = async () => {
    await editCourse(editingId, form);
    resetForm();
  };

  // delete card
  const deleteCard = async (id) => {
    await removeCourse(id);
  };

  // edit card
  const editCard = (card) => {
    setEditingId(card.id);
    setForm({
      title: card.title,
      description: card.description,
      mentorName: card.mentorName,
      company: card.company,
      price: card.price,
      mentorPhoto: card.mentorPhoto,
      image: card.image,
    });
  };

  return (
    <div className="min-h-screen bg-[#ffbd3a]">
      <Navbar />

      <main className="max-w-[1440px] mx-auto">
        <h1 className="text-center text-white text-2xl md:text-5xl pt-4 md:pt-6">
          <strong>Admin Panel</strong>
        </h1>

        <div className="flex flex-col gap-6 p-4 md:flex-row md:gap-10 md:px-16 md:py-8">
          {/* Form */}
          <div className="flex flex-col max-w-xl bg-white px-8 py-2 rounded-xl shadow-xl gap-1">
            <label htmlFor="title">
              <strong>Judul Course :</strong>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={form.title}
              onChange={handleText}
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label htmlFor="description">
              <strong>Deskripsi :</strong>
            </label>
            <textarea
              name="description"
              id="description"
              value={form.description}
              onChange={handleText}
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {/* Ganti file upload jadi URL input */}
            <label htmlFor="image">
              <strong>URL Thumbnail :</strong>
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={form.image}
              onChange={handleText}
              placeholder="https://..."
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <label htmlFor="mentorPhoto">
              <strong>URL Foto Pengajar :</strong>
            </label>
            <input
              type="text"
              name="mentorPhoto"
              id="mentorPhoto"
              value={form.mentorPhoto}
              onChange={handleText}
              placeholder="https://..."
              className="border p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

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

          {/* List courses */}
          <div className="bg-black/25 p-4 rounded-xl max-h-[550px] overflow-y-auto flex flex-col gap-4 w-full">
            {loading && <p className="text-white text-center">Loading...</p>}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {courses.map((card, index) => (
              <div
                key={card.id ?? index}
                className="bg-white p-2 md:p-4 rounded-xl shadow flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
              >
                <p className="font-bold text-md text-center">{card.title}</p>
                <p className="text-sm text-center text-gray-500">
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
