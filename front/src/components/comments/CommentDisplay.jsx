import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { getCommentById, getCommentByReference, getUserList } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const CommentDisplay = ({ comments, onDeleteComment, PAD }) => {
  const dispatch = useDispatch();
  const commentsOfPAD = useSelector(state => state.PADComment)
  const userComment = useSelector((state) => state.userComment);
  const allAuthors = useSelector(state => state.userList)
  const postedComment = useSelector(state => state.postedComment)
  const user = JSON.parse(window.localStorage.getItem("userInfo"))

  // const user = useSelector(state => state.userAuth)
  const reference = PAD._id
  // const user = useSelector((state) => state.userAuth)
  // console.log(user);

  // let userID = ''
  // if (user._id) {
  //    userID = user._id
  // }
  // else if (user.id) {
  //    userID = user.id
  // }
  
  // if (user._id) {
  //  var  userID = user._id
  // }
  // else if (user.id) {
  //   var userID = user.id
  // }

  // const googleUserID = user.id

  // const handleDeleteComment = (index) => {
  //  onDeleteComment(index);

  useEffect(() => {
    // dispatch(getCommentById(userID));
    dispatch(getCommentByReference(reference))
    dispatch(getUserList())
  }, [reference ,postedComment ]);
  //console.log("aquicomentarios", allComments);

  let findAuthors = []
  const userCommentsList = commentsOfPAD.map((comment) => findAuthors.push({ author: allAuthors.find(author => author._id  === comment.author).name, comment: comment.body }))
  // console.log('AQUI', findAuthors, userCommentsList);

  return (
    <div 
      className="max-w-md mx-auto mt-2 overflow-auto"
      style={{ maxHeight: "400px" }}
    >
      {findAuthors.map((author , index) => (
        <div
          className="border mb-4 p-4 rounded-md bg-blue-200"
          key={index}
        >
          <p className="text-lg font-semibold font-gilroy">{author.author}</p>
          <p className="text-gray-700 font-gilroy">{author.comment}</p>
          {/* <ReactStars
            count={5}
            value={comment.rating}
            size={24}
            edit={false} // Asegúrate de que las estrellas sean solo de lectura
            activeColor="#ffd700"
          /> */}
          {/*           <button
              onClick={() => handleDeleteComment(index)}
              className="mt-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >
              Borrar
        </button> */}
        </div>
      ))}
    </div>
  );
};

export default CommentDisplay;