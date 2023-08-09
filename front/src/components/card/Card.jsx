import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setDonationItems } from "../../redux/actions";
import green1 from "../../assets/icons/green1.png";
import green2 from "../../assets/icons/green2.png";
import donationIcon from '../../assets/icons/donationIcon.png'

function Card(props) {
  const dispatch = useDispatch();
  const Items = useSelector(state => state.ItemsDonation);
  const User = useSelector(state => state.userAuth);
  const [green, setGreen] = useState(green1);

  useEffect(() => {
    const resultArray = Items.map(item => item?.split('=')[1]);

    if (resultArray.includes(props._id)) {
      setGreen(green2);
    } else {
      setGreen(green1);
    }
    
  }, [Items]);

  const handleCartButton = (event) => {
    // const value = event.target.value
    const value = event.target.getAttribute("data-value");
    dispatch(setDonationItems([value]));
  };

  return (
    <div className="bg-white rounded-xl shadow-2xl hover:shadow-gray-600 p-4 md:w-80">
      <Link to={`/detail/${props.PAD}=${props._id}`}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            className="object-cover shadow-lg rounded-2xl"
            src={
              props.media.images[0]
                ? props.media.images[0].imageUrl
                : "https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp"
            }
            alt=""
          />
        </div>
      </Link>
        {/* <div className="
        flex
        justify-center   
        bg-green-700 
        
        h-12
      
        
        ">
            <img 
            
            onClick={handleCartButton} 
          data-value={`${props.PAD}=${props._id}`}

            className="h-8 cursor-pointer 
            m-2
            " src={donationIcon} alt="¡Dona a esta causa!" title="¡Dona a esta causa!" />

        </div> */}

      <div className="pt-4">
        <div className="flex justify-end">
          <button className=" transition duration-0 ease-in-out hover:bg-vividGreen hover:duration-700 hover:w-full" onClick={handleCartButton} data-value={`${props.PAD}=${props._id}`}>
            <img className="h-8 cursor-pointer" src={donationIcon} alt="¡Dona a esta causa!" title="¡Dona a esta causa!" />
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
          <h5 className="h-14 mt-2 text-xl font-bold font-gobold tracking-tight text-gray-900 dark:text-white">
            {props.name}
          </h5>
        </Link>

        <p className="h-20 mt-2 overflow-auto font-normal font-gilroy text-gray-700 dark:text-gray-400">
          {props.breaf
            ? props.breaf
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"}
        </p>
        <h4 className="font-gobold">{props.location}</h4>

        <Link to={`/detail/${props.PAD}=${props._id}`}>
          <div className="flex justify-center items-center mt-4 text-sm font-bold font-gilroy text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-4 py-2 ml-16 mr-16">
            Seguir leyendo
            <svg className="w-4 h-5 ml-2" viewBox="0 0 14 10">
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

        {User.admin === true ? 
          <Link
            to={`/ContentDetail/${props.PAD}=${props._id}`}
            className="block mt-4 text-gray-800 hover:text-blue-700"
          >
            🛠
          </Link>
         : <></> }
      </div>
    </div>
  );
}

export default Card;