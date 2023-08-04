import React from "react";
import ReactStars from "react-rating-stars-component";

const CommentDisplay = ({ comments, onDeleteComment }) => {
  const handleDeleteComment = (index) => {
    onDeleteComment(index);
  };

  return (
    <div
      className="max-w-md mx-auto mt-8 overflow-auto"
      style={{ maxHeight: "400px" }}
    >
      {comments.map((commentObj, index) => (
        <div key={index} className="border mb-4 p-4 rounded-md bg-blue-200">
          <p className="text-lg font-semibold">{commentObj.name}</p>
          <p className="text-gray-700">{commentObj.comment}</p>
          <ReactStars
            count={5}
            value={commentObj.rating}
            size={24}
            edit={false} // Asegúrate de que las estrellas sean solo de lectura
            activeColor="#ffd700"
          />
          <button
            onClick={() => handleDeleteComment(index)}
            className="mt-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Borrar
          </button>
        </div>
      ))}
    </div>
  );
};

export default CommentDisplay;
