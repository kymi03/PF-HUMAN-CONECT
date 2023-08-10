import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import green2 from "../../assets/icons/green2.png"
import gold2 from "../../assets/icons/gold2.png"
import donationIcon from '../../assets/icons/donationIcon.png'
import { Link } from 'react-router-dom';
const CartCount = () => {


  const Items = useSelector(state => state.ItemsDonation)

  return (
  < div  
  className='flex bg-green-500  rounded-full border p-2'
  >
      <Link to= {'/donar'}>
       <img
            className="h-12"
            src={donationIcon}
            alt="Add to Cart"
          />
      </Link>    
   <h1
   className=' text-white bg-green-500 rounded-3xl p-3'
   >{Items.length}</h1>
  </div>
  );
};

export default CartCount;
