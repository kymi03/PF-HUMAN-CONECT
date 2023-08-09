import React, { useEffect, useState } from 'react';
import NavBarAle from '../../components/NavBar/NavBarAle';
import LeftInfoDonate from '../../components/leftInfo/LeftInfoDonate';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { Carousel } from 'flowbite-react';
import { useSelector } from 'react-redux';
import Cards from '../../components/donarComponents/Cards';
import axios from "axios";

const Donar = () => {
    
    const [unitPrice, setUnitPrice] = useState(500);
    const [chart, setChart] = useState([]);

    const sendChart = async (chart) => {
      if (unitPrice < 500) return;
      try {
        const data = await axios
          .post("/payments", { items: chart })
          .then((res) => {
            return res.data;
          });
        const URL = data.result.body.sandbox_init_point;
        window.open(URL, "_blank");
      } catch (error) {
        alert(`No se pudo generar el link de pago. Error: ${error.message}`);
      }
    };

    //<----

    const [showBanner , setShowBanner ] = useState(true);

    useEffect( () => {
        const data = window.localStorage.getItem('WELCOME_BANNER')
        // console.log('data:' , data);
        setShowBanner(JSON.parse(data))//<-- cambiar para demos
    } , [])

    useEffect( () => {

        window.localStorage.setItem('WELCOME_BANNER' , JSON.stringify(showBanner))

    } , [showBanner])

    //<----

    const [items, setItems] = useState([]);

    const donerItems = useSelector(state => state.ItemsDonation )

    function splitString(inputString) {
    const [key, value] = inputString.split("=");
    return { key, value };
    }

    async function fetchData(array) {
    const resultArray = [];

    for (const item of array) {
        const { key, value } = splitString(item);
        let source = "";

        switch (key) {
        case "PROJECTS":
            source = "projects";
            break;
        case "ARTICLES":
            source = "articles";
            break;
        case "DOCUMENTARYS":
            source = "documentaries";
            break;
        default:
            break;
        }

        try {
        const response = await axios.get(`/${source}?id=${value}`);
        response.data.sourceOf = source
    
        // console.log(response.data);
        resultArray.push(response.data);

        } catch (error) {
        console.error(`Error fetching data for ${item}:`, error);
        }
    }

    return resultArray;
    }

    
  

    useEffect( () => {

        fetchData(donerItems)
        .then((result) => {
    
        setItems(result)
        
        })
        .catch((error) => {
        console.error("Error fetching data:", error);
        });

    } , [donerItems])


    //<----



 

    return (
        <div>
            <div>
                <NavBarAle />
                {showBanner && (
                <div 
                className="max-w-sm p-3  bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700" 
                >
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

                <p className="ml-11 mb-5 text-justify text-5xl font-semibold text-gray-900 dark:text-white">DONACIONES</p>
                <div className=" flex ">
                    <div className=' w-1/5 h-3/5  ml-11 mr-11'>
                        <LeftInfoDonate currentPAD={items} />
                    </div>
                    <div 
                    className='h-3/5 w-4/5   dark:bg-gray-800 dark:border-gray-700'
                    >
                        <Cards currentPAD={items} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default Donar;
