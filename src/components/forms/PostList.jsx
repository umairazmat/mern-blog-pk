import React from "react";
import { useBlogs } from "../../context/PostsContext";
// import blogData from "../../data/blogData.json";
import Card from "../cards/Card";

export default function PostList() {
  // eslint-disable-next-line
  // console.log(blogData);
  const blogs = useBlogs();
  if (!blogs) {
    return <div>Loading...</div>;
  }

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
