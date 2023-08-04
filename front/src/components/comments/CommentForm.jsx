import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const CommentForm = ({ onCommentSubmit }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCommentSubmit({ name, comment, rating });
    setName("");
    setComment("");
    setRating(0);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setRating(newRating);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto mt-4 bg-amber-50"
    >
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nombre y Apellido:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Nombre y Apellido"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Calificación: {rating}{" "}
        </label>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Comentario:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          rows="4"
          placeholder="Escribe tu comentario aquí"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Enviar Comentario
      </button>
    </form>
  );
};

export default CommentForm;
