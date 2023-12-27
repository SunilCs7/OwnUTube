import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-200 px-3 py-1 m-2 rounded-lg hover:bg-gray-400">
        {name}
      </button>
    </div>
  );
};

export default Button;
