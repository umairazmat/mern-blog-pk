import React from "react";
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";
import parse from "html-react-parser";

export default function Card({ image, title, description, tags }) {
  return (
    <div className="w-[420px] rounded-md border shadow-2xl p-3">
      <img
        src={image}
        alt={title}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-bold">
          {title} &nbsp; <ArrowUpRight className="h-4 w-4" />
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
            {/* Display only few words description  in card properly but all data to detail  */}
            {parse(description.substring(0, 100))}
          </p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
