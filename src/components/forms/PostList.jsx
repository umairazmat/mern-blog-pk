import React from "react";
// import blogData from "../../data/blogData.json";
import Card from "../cards/Card";
import { useBlogs } from "../../context/PostsContext";

export default function PostList() {
  const blogs = useBlogs();
  return (
    <div>
      {blogs.map((post) => (
        <div className="" key={post.id}>
          <Card
            image={post.image}
            title={post.title}
            description={post.description}
            tags={post.tags}
          />
        </div>
      ))}
    </div>
  );
}
