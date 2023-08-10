

import React, { useEffect, useState } from 'react';
import NavBarAle from '../../components/NavBar/NavBarAle';
import LeftInfoUser from '../../components/leftInfo/LeftInfoUser';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';

import Donations from '../../components/useroptions/Donations';
import Coments from '../../components/useroptions/Coments';
import Publications from '../../components/useroptions/Publications';
import SavedContent from '../../components/useroptions/SavedContent';
import Settings from '../../components/useroptions/Settings';
import UserSummary from '../../components/useroptions/UserSummary';
const UserOptions = () => {




    const currentOption = useSelector(state => state.userOption)
    const User = useSelector(state => state.userAuth)


    useEffect( () => {



    } , [currentOption])

let selectedOption = <></>
 switch (currentOption) {
    case "NO OPTION": 
        selectedOption = <UserSummary/>
        break;
    case "DONACIONES": 
        selectedOption = <Donations/>
        break;
    case "COMENTARIOS": 
        selectedOption = <Coments/>
        break;
    case "CONTENIDO GUARDADO": 
        selectedOption = <Publications/>
        break;
    case "PUBLICACIONES": 
        selectedOption = <SavedContent/>
        break;
    case "CONFIGURACION DE USUARIO": 
        selectedOption = <Settings/>
        break;
 
    default:
        break;
 }



    return (
        <div className=' bg-grey h-screen'>
            <div>
                <NavBarAle />
                
                <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white font-gilroy mt-4">HOLA, {User.name}</p>
                <div className=" flex h-full bg-grey">
                    <div className=' w-1/5 h-screen  ml-11 mr-11'>
                        <LeftInfoUser />
                    </div>
                    <div>
                        {selectedOption}
                    </div>
                </div>
                <div className=' fixed bottom-0 w-full'>
                <Footer />
                </div>
            </div>


        </div>
    )
};

export default UserOptions;