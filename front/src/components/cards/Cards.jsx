import React from 'react';
import Card from '../card/Card.jsx';

function Cards(props) {
  return (
    <div className="flex">
      {props.currentPAD.map((PAD, index) => (
        <div key={index} className="mr-4 w-40 h-70">
          {/* Aquí establecemos el ancho (w-80) y el largo (h-96) de cada Card */}
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
