import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function AddBlogBtn({ btnText }) {
  return (
    <Link to="add-blog">
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {btnText}
      </button>
    </Link>
  );
}

AddBlogBtn.propTypes = {
  btnText: PropTypes.string.isRequired,
};
