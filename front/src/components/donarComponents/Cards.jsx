import React from 'react';
import Card from './Card';


function Cards(props) {
  // console.log(props.currentPAD);

  return (
    <div 
    className="  py-2.5 px-5 mr-10 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      <h2
      className="py-2.5 px-5  mb-4 mr-2.5 ml-2.5 mt-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      > 🌱 ESTÁS A UN PASO DE APOYAR LAS SIGUIENTES CAUSAS 🌱:</h2>
      {/* <div>{props}</div> */}
      {props.currentPAD.map((PAD) => (

        <div key={PAD._id} className=" align-middle "> 
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
