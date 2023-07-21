import React from 'react';
import Card from '../card/Card.jsx';

function Cards(props) {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      {props.currentPAD.map((PAD, index) => (
        <div key={index} className="mr-10 w-60 "> 
          <Card
            media={PAD.media}
            location={PAD.location}
            date={PAD.date}
            name={PAD.name}
            breaf={PAD.breaf}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
