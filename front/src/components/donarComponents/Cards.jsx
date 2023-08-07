import React from 'react';
import Card from './Card';


function Cards(props) {
  // console.log(props.currentPAD);

  return (
    <div className=" flex-col ">
      <h2>Esta a un paso de apoyar las siguiente causas:</h2>
      {/* <div>{props}</div> */}
      {props.currentPAD.map((PAD) => (

        <div key={PAD._id} className=" ml-10"> 
<h1>{PAD.sourceOf}</h1>
          <Card
            media={PAD.media}
            location={PAD.location}
            date={PAD.date}
            name={PAD.name}
            breaf={PAD.breaf}
            _id={PAD._id}
            PAD =  {PAD.sourceOf
            }
          />
     
        </div>
      ))}
    </div>
  );
}

export default Cards;
