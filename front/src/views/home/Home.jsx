import React, { useEffect, useState } from 'react';
import NavBarAle from '../../components/NavBar/NavBar.ale';
import LeftInfoHome from '../../components/leftInfo/LeftInfoHome';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';

const Home = () => {
    const [showBanner , setShowBanner ] = useState(true);

    useEffect( () => {
        const data = window.localStorage.getItem('WELCOME_BANNER')
        console.log('data:' , data);
        // setShowBanner(JSON.parse(data))
    } , [])



    useEffect( () => {

        window.localStorage.setItem('WELCOME_BANNER' , JSON.stringify(showBanner))


    } , [showBanner])


    return (
        <div>
            <div>
                <NavBarAle />
                

{showBanner && (


<div className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" >
<button onClick={()=>setShowBanner(false)} >❎</button>
    <div>
        <h2> bienvenid@ a HUMAN CONET </h2>
        <p> te invitamos a regristrate para que puedas comentar, guardar articulos y mucho mas !: </p>
    </div>
    <Link to={'/formjoin'}>
<button >Unete</button>
</Link>
</div>

)}

                <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">JUNTOS SOMOS</p>
                <div className=" flex ">
                    <div className=' w-1/5 h-3/5  ml-11 mr-11'>
                        <LeftInfoHome />
                    </div>
                    <div>
                        <img
                            src="https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp"
                            alt=""
                            width={"90%"}
                        />
                    </div>

                    {/* <div id="default-carousel" className="relative  h-3/5 w-3/5" data-carousel="slide">
                        <!-- Carousel wrapper -->
                        <div className="relative  h-56 overflow-auto rounded-lg md:h-96 bg-slate-900">
                            <!-- Item 1 -->
                            <div className="hidden duration-700 ease-in-out bg-red-600" data-carousel-item>
                                <img src="https://i.imgur.com/b6P3qNs.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>
                            <!-- Item 2 -->
                            <div className="hidden duration-700 ease-in-out  bg-red-600" data-carousel-item>
                                <img src="https://www.geekmi.news/__export/1667862071723/sites/debate/img/2022/11/07/tanjiro.jpg_1902800913.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                            </div>

                        </div>
                        <!-- Slider indicators -->
                        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 bg-slate-900">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>

                        </div>
                        <!-- Slider controls -->
                        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div> */}


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
    //   <div className="flex">
    //     <div className=' w-1/5 h-3/5  ml-11'>
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


