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

import { ARTICLES , PROJECTS , DOCUMENTARYS } from "../../redux/actions-types";



function Card(props) {
   let toActioType = ''
   switch (props.PAD) {
     
     case 'projects':
      toActioType = PROJECTS
      break;

     case 'documentaries':
      toActioType = DOCUMENTARYS
      break;

      case 'articles':
      toActioType = ARTICLES
      break;
   
    default:
      break;
   }


const dispatch = useDispatch()
  const Items = useSelector(state => state.ItemsDonation)
  const [green , setGreen] = useState(green1)
  
 
  useEffect( () => {
  
    const resultArray = Items.map(item => item.split('=')[1]);
    if ( resultArray.includes(props._id)) {
      setGreen(green2)
    } else {setGreen(green1)}

} , [ Items ])


  const handleCartButton = (event) => {

    const value = event.target.getAttribute("data-value");

    dispatch(setDonationItems([value]))
    
  };
  
  const handleSaveButton = (event) => {
    const value = event.target.getAttribute('data-value');
    // Do something with the value if needed
  };

  return (
    <div className=" 
   flex h-16 m-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 relative"
    >


<Link to={`/detail/${toActioType}=${props._id}`}>
      <div 
      className=" h-16"
      >
        <img
          className="object-cover w-full h-full"
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
      <div className="absolute top-2 right-2">
      <button onClick={handleCartButton} id="imageButton">
          <img
            data-value={[`${toActioType}=${props._id}`]}
            className="h-8 "
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
  {/* <h4>{props.date}</h4> */}
</div>

      <Link to={`/detail/${props.PAD}=${props._id}`}>
        <div 
        // href={`/detail/${props.PAD}=${props._id}`}
        >
          <h5 
          className=" h-20  break-words mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {props.name}
          </h5>
        </div>
        </Link>

        


        

      </div>
            <h4>{props.location}</h4>
            <h5>{props.breaf}   </h5>

    </div>
  );
}

export default Card;
