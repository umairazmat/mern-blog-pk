import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Ensure id is defined before attempting to retrieve data
    if (id) {
      const storedBlogs = localStorage.getItem("blogData");
      if (storedBlogs) {
        const parsedBlogs = JSON.parse(storedBlogs);
        const foundPost = parsedBlogs.find(
          (blog) => blog.id === id.split(":")[0],
        );

        if (foundPost) {
          setPost(foundPost);
        }
      }
    }
  }, [id]);

  // eslint-disable-next-line
  console.log(post);

  if (!post) {
    return <div>Loading...</div>; // Optionally, you can add a loading state.
  }

  return (
    <main className="mt-10">
      <div
        className="container mx-auto mb-4 md:mx-auto md:mb-0 w-full max-w-screen-md mx-auto relative"
        style={{ height: "24em" }}
      >
        <div className="absolute left-0 top-0 w-full h-full z-0">
          <img
            src={post?.file}
            className="w-full h-full object-cover"
            alt="cover"
          />
        </div>
        <div
          className="w-full h-full absolute top-0 left-0 bg-black opacity-50 z-10"
          style={{
            backgroundImage:
              "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
          }}
        />
        <div className="flex flex-col justify-center absolute bottom-0 left-0 z-20 w-full h-full text-center">
          <h2 className="text-4xl font-semibold text-white leading-tight">
            {post?.title}
          </h2>
          <div className="mt-4 text-white">User Details</div>
        </div>
      </div>
      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p className="pb-6">{parse(post?.description)}</p>

        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
          {post?.tags &&
            post.tags.map((tag) => (
              <div
                key={tag} // Use the tag string as the key
                className="px-4 py-1 mx-2 mb-2 bg-black text-white inline-flex items-center justify-center"
              >
                {tag}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
