import React from "react";
import Card from "./Card";
import blogPostJson from "../data/utils";

export default function BlogPostCard() {
  return (
    <div className="container">
      <div className="row">
        {blogPostJson.map((post) => (
          <div
            className="col sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2"
            key={post.id}
          >
            <Card
              image={post.image}
              heading={post.heading}
              description={post.description}
              tag={post.tag}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
