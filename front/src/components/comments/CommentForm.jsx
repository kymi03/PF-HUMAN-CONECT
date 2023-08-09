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
    dispatch(postComment({ comment, userID, reference }));
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
      className="w-full max-w-sm mx-auto mt-4 bg-white rounded-md"
    >
      <Link
        // to={`/ContentDetail/${PAD}=${_id}`}
        className=" text-gray-800 hover:text-blue-700"
      ></Link>

      <div className=" text-gray-700 text-m font-bold mb-4 font-gilroy py-2">
        {User.name}
      </div>

      <div className="mb-4 text-center">
        <label
          htmlFor="comment"
          className=" text-gray-700 text-sm font-bold mb-2 font-gilroy"
        >
          Calificación: {rating}{" "}
        </label>
        <ReactStars
          className=" mx-auto"
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2 font-gilroy"
        >
          Comentario:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={handleCommentChange}
          className=" placeholder:font-gilroy placeholder:italic w-80 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          rows="4"
          placeholder="Escribe tu comentario aquí.."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className=" px-24 py-2 mb-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 font-gilroy font-bold"
      >
        Enviar Comentario
      </button>
    </form>
  ) : null;
};

export default CommentForm;
