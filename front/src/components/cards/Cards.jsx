import React from 'react';
import Card from '../card/Card.jsx';

function Cards(props) {
  const activePADs = props.currentPAD.filter((PAD) => PAD.active === true);

  return (
    <div className="grid grid-cols-3 grid-rows-3 ">
      {activePADs.map((PAD) => (
        <div key={PAD._id} className="ml-10">
          <Card
            media={PAD.media}
            location={PAD.location}
            date={PAD.date}
            name={PAD.name}
            breaf={PAD.breaf}
            _id={PAD._id}
            PAD={props.PAD}
            active={props.active}
          />
        </div>
      ))}
    </div>
  );
}

export default Cards;
