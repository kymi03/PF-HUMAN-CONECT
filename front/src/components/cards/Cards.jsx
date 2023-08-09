import React from 'react';
import Card from '../card/Card.jsx';

function Cards(props) {
  const activePADs = props.currentPAD.filter((PAD) => PAD.active === true);

  return (
    <div className="overflow-y-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-4 ">
        {activePADs.map((PAD) => (
          <Card
            key={PAD?._id}
            media={PAD?.media}
            location={PAD?.location}
            date={PAD?.date}
            name={PAD?.name}
            breaf={PAD?.breaf}
            _id={PAD?._id}
            PAD={props?.PAD}
            active={props?.active}
          />
        ))}
      </div>
      
    </div>
  );
}

export default Cards;
