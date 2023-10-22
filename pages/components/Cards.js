import React from "react";

function Cards({ title, views, answers }) {
  return (
    <div className=" bg-gray-800 rounded-lg  p-4 max-w-md mx-auto my-3 ">
      <h3 className=" font-semibold border-b pb-2">{title}</h3>
      <span className="text-gray-600 mt-2">
        Views: {views} | Answers: {answers}
      </span>
    </div>
  );
}

export default Cards;
