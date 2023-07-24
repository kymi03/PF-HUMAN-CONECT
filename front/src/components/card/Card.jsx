import React from 'react';

function Card(props) {

//   console.log(props.media );
//   console.log( );

  return (


  <div class="  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
   
    <a href={`/detail/${props._id}`}>
        <img class="" src={ props.media.images[0].imageUrl ? props.media.images[0].imageUrl : 'https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp' } alt="" />
    </a>
 
    <div class="p-5">
        <a href={`/detail/${props._id}`}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.breaf  ? props.breaf :"orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor"}</p>
        
        <a href={`/detail/${props._id}`} class="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Seguir leyendo
             <svg class="w-3.5 h-5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>

    </div>
</div>
  );
}

export default Card;
