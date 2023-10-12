import React from "react";
import BlogPostCard from "../components/BlogPostCard";

export default function Blogs() {
  return (
    <>
      <hr />
      <div className="md:container sm:mx-auto">
        <h2>This is Blog Home Page</h2>
        <BlogPostCard />
      </div>
    </>
  );
}
