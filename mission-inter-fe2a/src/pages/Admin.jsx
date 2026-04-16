import { useState } from "react";

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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      {/* form styling */}
      <div className="flex flex-col gap-2 mb-6">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleText}
          placeholder="Masukkan judul Course."
          required
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleText}
          placeholder="Penjelasan singkat tentang Course."
          required
        />
        <input
          type="text"
          name="mentorName"
          value={form.mentorName}
          onChange={handleText}
          placeholder="Nama Pengajar"
          required
        />
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleText}
        />
        <input
          type="text"
          name="price"
          value={form.price}
          onChange={handleText}
          required
        />
        <input
          type="file"
          onChange={(e) => handleImage(e, "image")}
          placeholder="Masukkan poster atau ilustrasi"
        />
        <input
          type="file"
          onChange={(e) => handleImage(e, "mentorPhoto")}
          placeholder="Masukkan foto pengajar"
        />

        <button onClick={editingId ? updateCard : addCard}>
          {editingId ? "Update" : "Tambah"}
        </button>
      </div>

      {/* List data / list Videocard */}
      <div className="flex flex-col gap-3">
        {cards.map((card) => (
          <div key={card.id} className="border p-3 rounded">
            <p className="font-bold">{card.title}</p>
            <p>{card.mentorName}</p>

            <div className="flex gap-2 mt-2">
              <button onClick={() => editCard(card)}>Edit</button>
              <button onClick={() => deleteCard(card.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
