import React from "react";
// import blogData from "../../data/blogData.json";
import Card from "../cards/Card";
import { useBlogs } from "../../context/PostsContext";

export default function PostList() {
  const blogs = useBlogs();
  return (
    <div className="container mx-auto">
      <div className="grid gap-x-0 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((post) => (
          <div className="" key={post.id}>
            <Card
              image={post.file}
              title={post.title}
              description={post.description}
              tags={post.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
