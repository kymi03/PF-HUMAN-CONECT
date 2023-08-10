import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import SliderHome from '../../components/sliders/SliderHome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLocations, getSearchPADByQuery, orderByDate } from '../../redux/actions';
import { PROJECTS } from '../../redux/actions-types'; //agregar GET_ALL_PROJECTS, GET_ALL_LOCATION, ORDER_BY_DATE


function HomeMain() {
    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(getSearchPADByQuery("Todas"));
        dispatch(getAllLocations());
    }, []);

    const [aux, setAux] = useState(false)
    const [date, setDate] = useState('Filtra Por Fecha');

    const locations = useSelector(state => state.allLocations)

    const handleSelectLocation = (event) => {
        dispatch(getSearchPADByQuery(event.target.value, "Location"))
        aux ? setAux(false) : setAux(true)
    }

    const handleSearchName = (event) => {
        if(event.target.value) {dispatch(getSearchPADByQuery(event.target.value, "name"))}
        if(event.target.value === ""){dispatch(getSearchPADByQuery())}

        //aux ? setAux(false) : setAux(true)
    }

    const handleOrder = (event) => {
        dispatch(orderByDate(event.target.value, PROJECTS))
        aux ? setAux(false) : setAux(true)
    }

    //Function to generate the <option> elements from the locations array
    const generateOptions = (options) => {
        return options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))
    }

    //Usage in the JSX component
    const options = generateOptions(locations)
  return (
    <div>
      <div className="grid grid-cols-10 gap-5 bg-amber-50 h-screen pt-8"> {/* Añadimos un padding-top para el NavBar */}
        <div className="col-span-3 bg-teal-100 rounded"> 
          <h2 className="text-6xl text-center font-bold mb-4">Esto es Human Conet:</h2>
          <br />
          <p className='text-center text-2xl pb-16 pt-16 bg-teal-100 border-none hover:bg-amber-50 font-poppins'>
            De los territorios a las ciudades, visibilizamos las luchas y acompañamos los procesos que protegen la vida en todas sus formas.
            Conoce nuestras acciones contadas por las comunidades
          </p>
          <div className='pt-32 pb-32'></div>
          <div className="flex flex-col pt-4 pb-4 mr-10 ml-10 rounded bg-white justify-center items-center">
            <div className='flex justify-center space-x-8 items-center'>
              <Link to={`/formjoin`} className='w-full'>
                <button type="button" className="py-3 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center mx-auto">UNETE</button>
             </Link>

              <Link to={`/donar`} className='w-full'>
                <button type="button" className="py-3 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center mx-auto">DONA</button>
              </Link>
            </div>
          </div>
          <div className="flex mt-4 space-x-5 justify-center">
            <Link to="https://www.instagram.com/humanconet.es/?hl=fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <AiFillInstagram className="w-7 h-7" />
              <span className="sr-only">Instagram page</span>
            </Link>

            <Link to="https://twitter.com/Human_Conet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <BsTwitter className="w-7 h-7" />
              <span className="sr-only">Twitter page</span>
           </Link>

           <Link to="https://www.youtube.com/channel/UCUSeWaaZ5-T3NIEIFBiccwA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <AiFillYoutube className="w-8 h-8" />
              <span className="sr-only">YouTube page</span>
           </Link>
          </div>
        </div>
        <div className="col-span-7 bg-amber-50"><SliderHome/></div> 
      </div>
    </div>
  );
};

export default HomeMain;