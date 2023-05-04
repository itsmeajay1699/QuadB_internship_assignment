import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import DescriptionPage from "./pages/descriptionPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:id" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
