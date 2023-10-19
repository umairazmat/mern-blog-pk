import React from "react";
import blogData from "../../data/blogData.json";
import Card from "../cards/Card";

export default function DisplayData() {
  // eslint-disable-next-line
  console.log(blogData);
  return (
    <div>
      {blogData.map((post) => (
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
