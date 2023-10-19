import React from "react";
import Card from "./Card";
import blogPostJson from "../../data/utils";

export default function BlogPostCard() {
  return (
    <div className="container">
      <div className="grid gap-x-0 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPostJson.map((post) => (
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
    </div>
  );
}
