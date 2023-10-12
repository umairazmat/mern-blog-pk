import React from "react";
import PropTypes from "prop-types";

export default function Button({ btnText }) {
  return (
    <div className="mt-14 text-center">
      <button
        type="button"
        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {btnText}
      </button>
    </div>
  );
}

Button.propTypes = {
  btnText: PropTypes.string.isRequired,
};
