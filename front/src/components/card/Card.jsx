import React from 'react';

function Card(props) {


  return (
    // <div className='w-500 h-500 bg-yellow-300 shadow flex flex-col items-center space-y-4'>
    //   <img src={props.media.images[0].imageUrl} alt="" className="w-100 h-100 object-cover" />
    //   <div className="text-lg font-bold">{props.name}</div>
    //   <div>{props.location}</div>
    //   <div>{props.date}</div>
    //   <div>{props.breaf}</div>
    // </div>

  <div class="max-w-sm bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="" src={props.media.images[0].imageUrl} alt="" />
    </a>
 
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.breaf}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Seguir leyendo
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
  );
}

export default Card;
