import React from "react";
import BlogPostCard from "../../components/cards/BlogPostCard";
import Pagination from "../../components/pagination/Pagination";

export default function Blogs() {
  return (
    <>
      <hr />
      <div className="md:container sm:mx-auto items-center">
        <BlogPostCard />
        <Pagination />
      </div>
    </>
  );
}
