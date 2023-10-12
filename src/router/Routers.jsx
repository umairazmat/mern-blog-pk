import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import About from "../pages/About";
import Users from "../pages/Users";
import PageNotFound from "../pages/PageNotFound";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Routers() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
