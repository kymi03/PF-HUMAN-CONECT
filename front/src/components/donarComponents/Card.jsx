import React from "react";
import {Link} from 'react-router-dom'
import green1 from "../../assets/icons/green1.png"
import green2 from "../../assets/icons/green2.png"
import green3 from "../../assets/icons/green3.gif"
import green4 from "../../assets/icons/green4.gif"
import gold1 from "../../assets/icons/gold1.png"
import gold2 from "../../assets/icons/gold2.png"




function Card(props) {
  // console.log(props);

  return (
    <div className="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">


<Link to={`/detail/${props.PAD}=${props._id}`}>
      <a 
      // href={`/detail/${props.PAD}=${props._id}`}
      >
        <img
          className=""
          src={
            props.media.images[0]
              ? props.media.images[0].imageUrl
              : "https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp"
          }
          alt=""
        />
      </a>
</Link>

      <div className="p-5">
      <div>
  <button id="imageButton">
    <img 
    className="h-8"
    src={green1}></img>
  </button>
  <button id="imageButton">
    <img 
    className="h-8"
    src={gold1}></img>
  </button>

 
</div>

      <Link to={`/detail/${props.PAD}=${props._id}`}>
        <a 
        // href={`/detail/${props.PAD}=${props._id}`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        </Link>

        

      </div>
    </div>
  );
}

export default Card;
