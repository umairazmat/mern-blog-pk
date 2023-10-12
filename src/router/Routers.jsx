import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AddBlog from "../pages/blogs/AddBlog";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function Routers() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}
