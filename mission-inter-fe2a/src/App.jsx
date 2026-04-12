import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";
import VideoCards from "./data/Cards";

function App() {
  const [cards, setCards] = useState(VideoCards);

  return (
    <Routes>
      <Route path="/" element={<Home cards={cards} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
