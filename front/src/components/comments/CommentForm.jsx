import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { postComment } from "../../redux/actions";

const CommentForm = ({ onCommentSubmit, PAD }) => {
  const User = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [name, setName] = useState(User.name);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const userID = User._id || User.id
  const reference = PAD._id

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("formComent");
    dispatch(postComment({comment, userID, reference}));
    onCommentSubmit({ name, comment, rating });
    setComment("");
    setRating(0);
  };

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  return User.active ? (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto mt-4 bg-amber-50"
    >
      <Link
        // to={`/ContentDetail/${PAD}=${_id}`}
        className="block text-gray-800 hover:text-blue-700"
      ></Link>

      <div className="block text-gray-700 text-m font-bold mb-4">
        {User.name}
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
  ) : <div className=" w-24 h-24 bg-slate-100"> 
        <h2> Para comentar debes estar Registrado e Iniciar Sesión </h2>
     </div>;
};

export default CommentForm;
