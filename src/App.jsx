import React from "react";
import "./App.css";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <BlogCard />
      <BlogCard />
    </>
  );
}

export default App;
