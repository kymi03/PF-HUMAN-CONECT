import React from "react";
import {Link} from 'react-router-dom'

function Card(props) {
  // console.log(props);

  return (
    <div className="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={`/detail/${props.PAD}=${props._id}`}>
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

      <div className="p-5">
      <Link to={`/detail/${props.PAD}=${props._id}`}>
        <a 
        // href={`/detail/${props.PAD}=${props._id}`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </a>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.breaf
            ? props.breaf
            : "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"}
        </p>
        <Link to={`/detail/${props.PAD}=${props._id}`}>

        <a
          // href={`/detail/${props.PAD}=${props._id}`}
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Seguir leyendo
          <svg
            className="w-3.5 h-5 ml-2"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
