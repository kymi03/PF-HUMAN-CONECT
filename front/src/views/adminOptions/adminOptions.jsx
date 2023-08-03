

import React, { useEffect, useState } from 'react';
import NavBarAle from '../../components/NavBar/NavBar.ale';
import LeftInfoAdmin from '../../components/leftInfo/LeftInfoAdmin';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';

import Donations from '../../components/useroptions/Donations';
import Coments from '../../components/useroptions/Coments';
import Publications from '../../components/useroptions/Publications';
import SavedContent from '../../components/useroptions/SavedContent';
import Settings from '../../components/useroptions/Settings';
import UserPanel from '../../components/adminoptions/UserPanel';
import AdminSummary from '../../components/adminoptions/AdminSummary';
const UserOptions = () => {

    const currentOption = useSelector(state => state.userOption)

        console.log(currentOption);

    useEffect( () => {

    } , [currentOption])

let selectedOption = <></>
 switch (currentOption) {
    case "VER USUARIOS": 
        selectedOption = <UserPanel/>
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
    case "NO OPTION": 
        selectedOption = <AdminSummary/>
        break;
 
    default:
        break;
 }



    return (
        <div>
            <div>
                <NavBarAle />
                
                <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">HOLA, MAKARENA</p>
                <div className=" flex ">
                    <div className=' w-1/5 h-3/5  ml-11 mr-11'>
                        <LeftInfoAdmin />
                    </div>
                    <div>
                        {selectedOption}
                    </div>
                </div>
                <Footer />
            </div>


        </div>
    )
};

export default UserOptions;