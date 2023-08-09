import React, { useEffect, useState } from 'react'
import {AiFillYoutube, AiFillInstagram } from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import humanLogo from '../../assets/icons/HumanLogoRojo.png'
import { getSearchPADByQuery, getAllLocations, orderByDate  } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'flowbite-react';
import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types";
  import { Link } from 'react-router-dom';
function LeftInfo(props) {
    const User = useSelector(state => state.userAuth)


    const dispatch = useDispatch()

    const [location, setLocation ] = useState(``);
    const [name, setName ] = useState(``);
    const [ aux, setAux] = useState(false)



    
    useEffect(() => {
       dispatch(getSearchPADByQuery(name, location, props.PAD)); // Fetch articles on initial mount
      dispatch(getAllLocations(props.PAD));
    }, [name, location, props.PAD ,]);
    // useEffect(() => {
    //   dispatch(getAllLocations(props.PAD));
    // }, []);


    const locations = useSelector(state => state.allLocations)
    

 let testLocation =   ``
 let testname =   ``
    
    
    const handleSelectLocation = (event) => {
    //   if (event.target.value !== 'Todas') {
    //     testLocation = `location=${event.target.value}`;
    //     console.log('location: ' , event.target.value);
    // } else {
    //   testLocation = ``;
    // }
    //   dispatch(getSearchPADByQuery(testname, testLocation, props.PAD));
      aux ? setAux(false) : setAux(true)  
      if (event.target.value !== 'Todas') {
        setLocation(`location=${event.target.value}`);
        console.log('location: ' , event.target.value);
    } else {
      setLocation('');
    }
      // dispatch(getSearchPADByQuery(name, location, props.PAD));
      // aux ? setAux(false) : setAux(true)  

    }

    const handleSearchName = (event) => {
  
    // if (event.target.value !== '') {
    //   testname=`name=${event.target.value}`;
    // } else {
    //   testname=``;
    // }
    //   dispatch(getSearchPADByQuery(testname, testLocation, props.PAD));
    if (event.target.value !== '') {
      setName(`name=${event.target.value}`);
    } else {
      setName('');
    }
      // dispatch(getSearchPADByQuery(name, location, props.PAD));

    }

    const handleOrder = (event) => {
    
    dispatch(orderByDate(event.target.value , props.PAD ))
    aux ? setAux(false) : setAux(true)  
  
    }

// Function to generate the <option> elements from the locations array
const generateOptions = (options) => {
  return options.map((option , index ) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));
};

// Usage in the JSX component

  const options = generateOptions(locations)
    
  return (

    <div className="max-w-sm p-3 bg-white rounded-xl shadow-xl">

        <img src={humanLogo} className='h-16 mx-auto my-8'/>


        <p className="mb-3 font-normal font-gilroy text-gray-700 dark:text-gray-400">De los territorios a las ciudades, visibilizamos las luchas y acompañamos los procesos que protegen la vida en todas sus formas.
        Conoce nuestras acciones contadas por las comunidade </p>


{  User.admin === true ?       <Link to={"/PAD/post"} >
      <button 
       type="select" className=" mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none 
       bg-white rounded-lg 
       border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      
      >Publica nuevo contenido</button>
      </Link> : <></>}

<form>   
<label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">

                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>

            </svg>
        </div>

        <input 
        filter='name'
        onInput={handleSearchName} 
        type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:font-gilroy placeholder:italic dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por nombre..." required ></input>


        </div>
</form>

    <select name="sort" onInput={handleSelectLocation}  type="select" className="w-44 mt-3 py-2.5 px-5 text-sm font-medium font-gilroy text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
        {options}
    </select>

        <select name="sort" onInput={handleOrder} type="select" className=" w-44 mt-3 py-2.5 px-5 text-sm font-medium font-gilroy text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          {/* <option value="dateAll">Todos</option> */}
          <option value="dateAsc">Más Reciente</option>
          <option value="dateDes">Más Antiguo</option>
        </select>
    <button href="#">
        <img className="" src={''} alt="" />
    </button>

    <div className="flex justify-center p-5">
    <Link to={`/formjoin`}>
    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium font-gobold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">UNETE</button>
    </Link>

    <Link to={`/donar`}>
    <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium font-gobold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">DONA</button>
    </Link>
    </div>

        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">


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

  )
}

export default LeftInfo