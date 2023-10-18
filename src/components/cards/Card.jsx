import React from "react";
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

export default function Card({ image, heading, description, tags }) {
  return (
    <div className="w-[420px] rounded-md border shadow-2xl p-3">
      <img
        src={image}
        alt={heading}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-bold">
          {heading} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <div className="mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="mb-2 mr-2 p-2 inline-block rounded-full bg-gray-100   text-[10px] font-semibold text-gray-900"
            >
              {tag}
            </span>
          ))}

          <p className="mt-3 text-sm text-gray-900 font-semibold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
