import { useState } from "react";

export default function Admin({ cards, setCards }) {
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    mentorPhoto: "",
    mentorName: "",
    company: "",
    price: "",
  });

  const resetForm = () => {
    setForm({
      image: "",
      title: "",
      description: "",
      mentorPhoto: "",
      mentorName: "",
      company: "",
      price: "",
    });
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
    if (type === "mentor") {
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
}
