import React, { useState } from 'react';
import CommentForm from './CommentForm';
import CommentDisplay from './CommentDisplay';

const Comments = (PAD) => {
  const [comments, setComments] = useState([]);
  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Comentarios</h1>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/3">
          <CommentForm onCommentSubmit={handleCommentSubmit} />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0 overflow-hidden whitespace-normal">
          <CommentDisplay comments={comments} onDeleteComment={handleDeleteComment} />
        </div>
      </div>
    </div>
  );
};

export default Comments;