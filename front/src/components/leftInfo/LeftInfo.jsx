import React, { useEffect, useState } from 'react'
import { getSearchPADByQuery, getAllLocations, orderByDate  } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'flowbite-react';
import {
  // GET_ALL_PROJECTS , GET_ALL_LOCATION ,  ORDER_BY_DATE,
  PROJECTS , DOCUMENTARYS , ARTICLES
  } from "../../redux/actions-types";
  import { Link } from 'react-router-dom';
function LeftInfo(props) {


    const dispatch = useDispatch()

    const [location, setLocation ] = useState('');
    const [name, setName ] = useState('');
    const [ aux, setAux] = useState(false)



   
    useEffect(() => {
      dispatch(getAllLocations(props.PAD));
      dispatch(getSearchPADByQuery(name, location, props.PAD)); // Fetch articles on initial mount
    }, [name, location, props.PAD]);


    const locations = useSelector(state => state.allLocations)
    

 
    
    
    const handleSelectLocation = (event) => {

    if (event.target.value !== 'Todas') {
      setLocation(`location=${event.target.value}`);
    } else {
      setLocation('');
    }
      dispatch(getSearchPADByQuery(name, location, props.PAD));

    }

    const handleSearchName = (event) => {
  
    if (event.target.value !== '') {
      setName(`name=${event.target.value}`);
    } else {
      setName('');
    }
      dispatch(getSearchPADByQuery(name, location, props.PAD));

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

    <div className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">

        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Esto es Human Conet:</h5>
        </a>


        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">De los territorios a las ciudades, visibilizamos las luchas y acompañamos los procesos que protegen la vida en todas sus formas.
        Conoce nuestras acciones contadas por las comunidade </p>


      <Link to={"/PAD/post"} >
      <button className=' rounded-md bg-blue-600'>Publica un nuevo artículo</button>
      </Link>

<form>   
<label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Buscar</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>

        <input 
        filter='name'
        onInput={handleSearchName} 
        type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca por nombre..." required ></input>


        </div>
</form>

    <select name="sort" onChange={handleSelectLocation}>
        {options}
    </select>

        <select name="sort" onChange={handleOrder} >
          <option value="dateAll">Todos</option>
          <option value="dateAsc">Más Reciente</option>
          <option value="dateDes">Más Antiguo</option>
        </select>
    <a href="#">
        <img className="" src={''} alt="" />
    </a>

    <div className="flex p-5">

    <a href={`/formjoin`} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">UNETE</a>
    
    <a href={`/formjoin`} type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">DONA</a>

    </div>


   


        <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
       </div>
    
</div>

  )
}

export default LeftInfo