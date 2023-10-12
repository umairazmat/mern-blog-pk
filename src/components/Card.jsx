import React from "react";
import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";
import Button from "./Button";

export default function Card({ image, heading, description, tag }) {
  return (
    <div className="w-[300px] rounded-md border">
      <img
        src={image}
        alt={heading}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {heading} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            {tag}
          </span>
        </div>
        <Button btnText="Read" />
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
