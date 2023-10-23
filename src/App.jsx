import "./App.css";
import React from "react";
import Routers from "./router/Routers";
import BlogProvider from "./context/PostsContext";

function App() {
  return (
    <BlogProvider>
      <Routers />
    </BlogProvider>
  );
}

export default App;
