import React from "react";
import AddPost from "../../components/forms/AddPost";
import PostList from "../../components/forms/PostList";
import BlogProvider from "../../context/PostsContext";

export default function AddBlog() {
  return (
    <BlogProvider>
      <h1>Add Blog</h1>
      <AddPost />
      <hr />
      <h2>Post List</h2>
      <PostList />
    </BlogProvider>
  );
}
