import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../cards/Card";
// import blogData from "../../data/blogData.json";
// import { useBlogs } from "../../context/PostsContext";

export default function PostList() {
  const [blogs, setBlogs] = useState([]);
  // eslint-disable-next-line
  console.log(blogs);
  useEffect(() => {
    // Retrieve blogs from localStorage on component mount
    const storedBlogs = localStorage.getItem("blogData");
    if (storedBlogs) {
      const parsedBlogs = JSON.parse(storedBlogs);
      setBlogs(parsedBlogs);
    }
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid gap-x-0 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <div className="" key={post.id}>
            <Link to={`blog-details/${post.title.replaceAll(" ", "-")}`}>
              <Card
                image={post.file}
                title={post.title}
                description={post.description}
                tags={post.tags}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
