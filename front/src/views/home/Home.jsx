import React, { useEffect, useState } from 'react';
import NavBarAle from '../../components/NavBar/NavBarAle';
import LeftInfoHome from '../../components/leftInfo/LeftInfoHome';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';

const Home = () => {

    const [showBanner , setShowBanner ] = useState(true);

    useEffect( () => {
        const data = window.localStorage.getItem('WELCOME_BANNER')
        // console.log('data:' , data);
        setShowBanner(JSON.parse(data))//<-- cambiar para demos
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
                </div>
                <Footer />
            </div>


        </div>
    )
};

export default Home;
