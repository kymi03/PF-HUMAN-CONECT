import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom'
import green1 from "../../assets/icons/green1.png"
import green2 from "../../assets/icons/green2.png"
import green3 from "../../assets/icons/green3.gif"
import green4 from "../../assets/icons/green4.gif"
import gold1 from "../../assets/icons/gold1.png"
import gold2 from "../../assets/icons/gold2.png"
import { useDispatch, useSelector } from "react-redux";
import { setDonationItems } from "../../redux/actions";




function Card(props) {
  // console.log(props);

const dispatch = useDispatch()
  const Items = useSelector(state => state.ItemsDonation)
  const [green , setGreen] = useState(green1)
  useEffect( () => {

      const data = window.localStorage.getItem('DONATION_CART')

      dispatch(setDonationItems(JSON.parse(data)))

  } , [])

  useEffect( () => {
   
      window.localStorage.setItem("DONATION_CART", JSON.stringify(Items));
   
  } , [ Items ])

 



  const handleCartButton = (event) => {

    const value = event.target.getAttribute("data-value");

    dispatch(setDonationItems([value]))


    
    if(  Items.indexOf(value) !== -1 ) {  setGreen(green1) } else {  setGreen(green2) }

  };

  const handleSaveButton = (event) => {
    const value = event.target.getAttribute('data-value');
    // Do something with the value if needed
  };

  return (
    <div className="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">


<Link to={`/detail/${props.PAD}=${props._id}`}>
      <div 
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
      </div>
</Link>

      <div className="p-5">
      <div>
      <button onClick={handleCartButton} id="imageButton">
          <img
            data-value={[`${props.PAD}=${props._id}`]}
            className="h-8"
            src={green}
            alt="Add to Cart"
          />
        </button>

        {/* <button onClick={handleSaveButton} id="imageButton">
          <img
            data-value={`${props.PAD}=${props._id}`}
            className="h-8"
            src={gold1}
            alt="Save"
          />
        </button> */}
  <h4>{props.location}</h4>
  {/* <h4>{props.date}</h4> */}
</div>

      <Link to={`/detail/${props.PAD}=${props._id}`}>
        <div 
        // href={`/detail/${props.PAD}=${props._id}`}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </div>
        </Link>

        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.breaf
            ? props.breaf
            : "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"}
        </p>

        <Link to={`/detail/${props.PAD}=${props._id}`}>
        <div
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
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
        </Link>

      </div>
    </div>
  );
}

export default Card;
