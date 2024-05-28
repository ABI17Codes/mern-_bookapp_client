import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Books from "./Pages/Books";
import Bookdetails from "./Pages/Bookdetails";
import CreateBook from "./Pages/Createbook";
import Editbook from "./Pages/Editbook";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path='/books/:slug' element={<Bookdetails/>} />
        <Route path='/createbook' element={<CreateBook/>} />
        <Route path="/editbook/:slug" element={ <Editbook/> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
