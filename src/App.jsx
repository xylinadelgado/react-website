import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("APP searchQuery:", searchQuery);

  const handleSearch = (queryText) => {
    setSearchQuery(queryText);
  };

  return (
    <>
      <NavBar onSearch={handleSearch} />

      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
