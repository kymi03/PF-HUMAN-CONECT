import React from 'react';
import NavBarAle from '../../components/NavBar/NavBar.ale';
import LeftInfoHome from '../../components/leftInfo/LeftInfoHome';
import Footer from '../../components/footer/Footer';

import { Carousel } from 'flowbite-react';

const Home = () => {
  return (
<div>  

<div>
      <NavBarAle/>
        <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">JUNTOS SOMOS</p>
      <div classNameName="flex ">
        <div classNameName=' w-1/5 h-3/5  ml-11'>
          <LeftInfoHome />
        </div>

        <div id="default-carousel" class="relative  h-3/5 w-3/5" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative  h-56 overflow-auto rounded-lg md:h-96 bg-slate-900">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out bg-red-600" data-carousel-item>
            <img src="https://i.imgur.com/b6P3qNs.png" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out  bg-red-600" data-carousel-item>
            <img src="https://www.geekmi.news/__export/1667862071723/sites/debate/img/2022/11/07/tanjiro.jpg_1902800913.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 bg-slate-900">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
 
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


      </div>
      <Footer />
    </div>


</div>
  )
};

export default Home;
// import React from 'react';
// import NavBarAle from '../../components/NavBar/NavBar.ale';
// import LeftInfo from '../../components/leftInfo/LeftInfo';
// import { Carousel, Dropdown } from 'flowbite-react';
// import Footer from '../../components/footer/Footer';

// Dropdown
// const Home = () => {
//   return (
    // <div>
    //   <NavBarAle/>
    //     <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">JUNTOS SOMOS</p>
    //   <div classNameName="flex">
    //     <div classNameName=' w-1/5 h-3/5  ml-11'>
    //       <LeftInfo />
    //     </div>
    //     <div >
    //     <Carousel>
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
    //   />
    //   <img
    //     alt="..."
    //     src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
    //   />
    // </Carousel>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
//   );
// };

// export default Home;


