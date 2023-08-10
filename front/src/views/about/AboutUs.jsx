import React from "react";
import { Link } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBarAle";
import Footer from '../../components/footer/Footer'
import image1 from '../../assets/icons/Tigre-Azul.png'
import image2 from '../../assets/icons/Mono-Gris.png'
import image3 from '../../assets/icons/turtle-yellow.png'
import image4 from "../../assets/Human-conet-b-y.png"

function AboutUs() {
  return (
    <div className=" bg-grey">

      <NavBarAle />
      <div className="pt-10 pb-10"></div>
      <div className="h-screen" >
        <div className="flex flex-col">
          <h3 className=" text-6xl pt-10 pb-10 text-vividGreen font-gobold tracking-widest">¿Quiénes somos?</h3>
        </div>
        <div>
          <img className=" px-32" src={image4} alt="image4" />
          <p className=" py-12 px-5 flex flex-col text-3xl text-center font-gilroy">Somos un colectivo franco-colombiano, constituido como asociación francesa, conformado por mujeres y hombres comprometidos con la protección y el reconocimiento de los y las defensoras de los territorios en la lucha contra el cambio climático.</p>
        </div>

        <div className="flex bg-amber-400 pt-16 rounded-t-lg">
          <h2 className="flex justify-start text-6xl text-white items-center font-gobold font-bold tracking-wide pl-4">Desde los territorios</h2>
          <img src={image1} alt="imagen1" className="flex justify-end h-52 object-contain mx-auto" />
        </div>
        <div className="flex bg-blue-800">
          <img src={image2} alt="imagen2" className="flex justify-start h-60 object-contain mx-auto" />
          <h2 className="flex justify-end text-6xl pr-4 text-white items-center font-gobold font-bold tracking-wide">Hasta las ciudades</h2>
        </div>
        <div className="flex bg-red-600 rounded-b-lg">
          <h2 className="flex justify-start text-6xl pl-20 text-white items-center font-bold font-gobold tracking-wide">Juntos somos</h2>
          <img src={image3} alt="imagen3" className="flex justify-end h-56 object-contain mx-auto" />
        </div>
        <div className="flex bg-black h-48">
          <div className=" flex items-center flex-row w-2/5 ml-10">
            <hr className="h-0.5 my-8 w-20 bg-corn border-none flex-row" />
            <span className="px-2 font-normal text-red-700 text-2xl font-gobold">Nuestra mision</span>
            <hr className="h-0.5 my-8 w-20 bg-corn border-none" />
          </div>
          <div className=" flex flex-col w-1/2 mt-5 mb-5">
            <h3 className="text-white font-gobold text-3xl text-left">Co-crear contenido audiovisual</h3>
            <p className="text-xl text-white text-left font-gilroy">que sirva como herramienta de incidencia política, 
            académica y de presión ciudadana para generar acciones que protegen y reconocen la importancia de los y
             las defensoras de los territorios en la lucha contra el cambio climático.</p>
          </div>
        </div>

        <div className="pt-10 pb-10 bg-grey" />
        {/* <section className="pt-70 pb-70 border-lime-400 border-4 bg-black rounded-lg"> */}
        {/* <h3 className="text-4xl relative font-bold text-lime-400 underline font-gobold">
            NUESTRA MISION
          </h3> */}
        {/* <br />
        {/* </section> */}
        {/* <div className="pt-20 pb-20"></div> */}
        {/* <section className="flex flex-col clear-both bg-grey"> */}
        <div className="flex flex-row bg-grey">
          <img className="w-1/2 h-70 object-contain rounded-md shadow-2xl shadow-blue-500/50" src="https://humanconet.org/wp-content/uploads/2022/09/making-of-min-scaled.webp" alt="imagen-bote" />
          <p className="w-1/2 text-2xl px-5 py-20 font-gilroy text-center">
            Desde el 2018, realizamos proyectos audiovisuales con distintas comunidades étnicas y campesinas de Colombia con el objetivo de dar a conocer las problemáticas y realidades que viven las personas en la ruralidad, así como sus modos de lucha, resistencias y cuidados.
          </p>
        </div>
        {/* <div className="pt-20 pb-20 "></div> */}
        {/* <div className="flex flex-col clear-both bg-grey"> */}
          <div className="flex flex-row bg-grey">
            <p className="w-1/2 text-2xl px-5 py-20 font-gilroy text-center">
              Desde el 2022, ampliamos nuestro trabajo a las ciudades con el objetivo de brindar una mirada integral acerca de lo que significa la humanización de la lucha ambiental. <span className="text-rose-800">Esta noción guía nuestro trabajo y justifica que para defender el medio ambiente, hay que primero proteger la vida de aquellas personas que viven y cuidan del territorio.</span>
            </p>
            <img className="w-1/2 h-70 object-contain rounded-md shadow-2xl shadow-blue-500/50" src="https://humanconet.org/wp-content/uploads/2022/09/Comuna-13-43-1-min-scaled.webp" alt="image-hands" />
          </div>
        {/* </div> */}
        {/* </section> */}
        {/* <div className="pt-20 pb-20"></div> */}
        <div className="flex flex-col justify-center bg-grey h-48">
          <Link to="/FormJoin">
            <button className="bg-black font-gobold font-semibold tracking-wider rounded-xl px-6 py-3 text-corn border-4 border-red-800 text-lg hover:bg-red-800 hover:text-white transition duration-300">
            Únete al Colectivo
            </button>
          </Link>
        </div>
        {/* </section> */}
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
