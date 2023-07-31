import React, { useEffect } from 'react';
import Card from '../card/Card.jsx';
import { useSelector } from 'react-redux';


function Cards(props) {


  return (
    <div className="grid grid-cols-3 grid-rows-3 ">
      {props.currentPAD.map((PAD) => (

        <div key={PAD._id} className=" ml-10"> 
      

          <Card
            media={PAD.media}
            location={PAD.location}
            date={PAD.date}
            name={PAD.name}
            breaf={PAD.breaf}
            _id={PAD._id}
            PAD =  {props.PAD}
          />
         
        </div>
      ))}
    </div>
  );
}

export default Cards;
