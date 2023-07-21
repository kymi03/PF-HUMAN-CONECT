import React from 'react';

function Card(props) {
  return (
    <div className='w-500 h-500 bg-yellow-300 shadow flex flex-col items-center space-y-4'>
      <img src={props.media.images[0].imageUrl} alt="" className="w-100 h-100 object-cover" />
      <div className="text-lg font-bold">{props.name}</div>
      <div>{props.location}</div>
      <div>{props.date}</div>
      <div>{props.breaf}</div>
    </div>
  );
}

export default Card;
