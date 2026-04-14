import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";
import CardsData from "./data/Cards";
import Admin from "./pages/Admin";

function App() {
  // init State dari localStorage dan sinkronkan tiap ada perubahan
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem("cards");
    return saved ? JSON.parse(saved) : CardsData;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <Routes>
      <Route path="/" element={<Home cards={cards} />} />
      <Route
        path="/admin"
        element={<Admin cards={cards} setCards={setCards} />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
