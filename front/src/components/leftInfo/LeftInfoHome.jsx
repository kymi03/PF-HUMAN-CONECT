import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import SliderHome from '../../components/sliders/SliderHome';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLocations, getSearchPADByQuery, orderByDate } from '../../redux/actions';
import { PROJECTS } from '../../redux/actions-types'; //agregar GET_ALL_PROJECTS, GET_ALL_LOCATION, ORDER_BY_DATE
import humanLogo from '../../assets/icons/HumanLogoRojo.png'


function LeftInfoHome() {
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
    <div className=' h-screen mb-4'>
      <div className="grid grid-cols-10 gap-5 bg-grey h-full pb-48 pt-5"> 
        <div className="col-span-3 bg-white rounded-2xl shadow-xl mr-4 ml-4"> 
          {/* <h2 className="text-6xl text-left px-4 pt-4 font-gilroy font-bold mb-4">Somos </h2> */}
          <img src={humanLogo} className='h-16 mx-auto my-8'/>
          <br />
          <p className=' text-ellipsis text-2xl pb-12 pt-0 px-4 border-none font-gilroy'>
            De los territorios a las ciudades, visibilizamos las luchas y acompañamos los procesos que protegen la vida en todas sus formas.
            Conoce nuestras acciones contadas por las comunidades
          </p>
          <div className=''></div>
          <div className="flex flex-col mr-10 ml-10 rounded bg-white justify-center items-center">
            <div className='flex justify-center space-x-8 items-center'>
              <Link to={`/formjoin`} className='w-full'>
                <button type="button" className="py-3 px-5 mb-2 text-sm font-gobold font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-300 hover:text-red-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center mx-auto">UNETE</button>
             </Link>

              <Link to={`/donar`} className='w-full'>
                <button type="button" className="py-3 px-5 mb-2 text-sm font-gobold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-300 hover:text-red-700 focus:z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center mx-auto">DONA</button>
              </Link>
            </div>
          </div>
          <div className="flex space-x-5 pt-5 justify-center">
            <Link to="https://www.instagram.com/humanconet.es/?hl=fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-700 dark:hover:text-white">
              <AiFillInstagram className="w-7 h-7" />
              <span className="sr-only">Instagram page</span>
            </Link>

            <Link to="https://twitter.com/Human_Conet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-700 dark:hover:text-white">
              <BsTwitter className="w-7 h-7" />
              <span className="sr-only">Twitter page</span>
           </Link>

           <Link to="https://www.youtube.com/channel/UCUSeWaaZ5-T3NIEIFBiccwA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-700 dark:hover:text-white">
              <AiFillYoutube className="w-8 h-8" />
              <span className="sr-only">YouTube page</span>
           </Link>
          </div>
        </div>
        <div className="col-span-7 bg-grey mr-20"><SliderHome/></div> 
      </div>
    </div>
  );
};

export default LeftInfoHome;