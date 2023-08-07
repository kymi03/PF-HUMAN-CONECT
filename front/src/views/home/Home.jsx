import React, { useEffect, useState } from 'react';
import NavBarAle from '../../components/NavBar/NavBarAle';
import LeftInfoHome from '../../components/leftInfo/LeftInfoHome';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';

const Home = () => {
    const [showBanner, setShowBanner] = useState(true);
    const authAleTest = useSelector(state => state.userAuth);
    console.log(authAleTest);

    useEffect(() => {
        const data = window.localStorage.getItem('WELCOME_BANNER');
        setShowBanner(JSON.parse(data)); // <-- cambiar para demos
    }, []);

    useEffect(() => {
        window.localStorage.setItem('WELCOME_BANNER', JSON.stringify(showBanner));
    }, [showBanner]);

    return (
        <div>
            <NavBarAle />
            {showBanner && (
                <div className="max-w-sm p-3 bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <button onClick={() => setShowBanner(false)}>❎</button>
                    <div>
                        <h2>¡Bienvenid@ a HUMAN CONET!</h2>
                        <p>Te invitamos a registrarte para que puedas comentar, guardar artículos y mucho más:</p>
                    </div>
                    <Link to={'/formjoin'}>
                        <button>Únete</button>
                    </Link>
                </div>
            )}

            <LeftInfoHome/>
            <Footer />
        </div>
    )
};

export default Home;
