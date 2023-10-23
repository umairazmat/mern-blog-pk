import React from "react";
import AddPost from "../../components/forms/AddPost";
import PostList from "../../components/forms/PostList";

export default function AddBlog() {
  return (
    <>
      <h1>Add Blog</h1>
      <AddPost />
      <hr />
      <h2>Post List</h2>
      <PostList />
    </>
  );
}
