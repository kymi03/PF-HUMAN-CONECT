import React from "react";
import { Link } from "react-router-dom";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import Footer from '../../components/footer/Footer'
import image1 from '../../assets/icons/Tigre-Azul.png'
import image2 from '../../assets/icons/Mono-Gris.png'
import image3 from '../../assets/icons/turtle-yellow.png'
import image4 from "../../assets/Human-conet-b-y.png"

function AboutUs() {
  return (
  <>

    <NavBarAle />
    <div className="pt-10 pb-10 bg-white"></div>
    <div className=" h-screen" >
      <div className="flex flex-col">
        <h3 className="text-4xl pt-10 pb-10  text-white font-bold relative"><span className="bg-black inline-block rounded-md p-2">QUIÉNES SOMOS</span></h3>
      </div>
      <section className="pt-10 pb-10 bg-white">
        <img src={image4} alt="image4" />
        <div className="pt-14 pb-14"></div>
        <p className="flex flex-col text-4xl">Somos un colectivo franco-colombiano, constituido como asociación francesa, conformado por mujeres y hombres comprometidos con la protección y el reconocimiento de los y las defensoras de los territorios en la lucha contra el cambio climático.</p>
        <div className="pt-14 pb-14"></div>
      <section/>

      <div className="flex bg-amber-400 pt-16 rounded-t-lg">
        <h2 className="flex justify-start text-6xl text-white items-center font-bold font-mono pl-4">DESDE LOS TERRITORIOS</h2>
        <img src={image1} alt="imagen1" className="flex justify-end h-52 object-contain mx-auto"/>
      </div>
      <div className="flex bg-blue-800">
        <img src={image2} alt="imagen2" className="flex justify-start h-60 object-contain mx-auto" />
        <h2 className="flex justify-end text-6xl pr-4 text-white items-center font-bold font-mono">HASTA LAS CIUDADES</h2>
      </div>
      <div className="flex bg-red-600 rounded-b-lg">
        <h2 className="flex justify-start text-6xl pl-20 text-white items-center font-bold font-mono">JUNTOS SOMOS</h2>
        <img src={image3} alt="imagen3" className="flex justify-end h-56 object-contain mx-auto" />
      </div>
         
        <div className="pt-10 pb-10"/>
        <section className="pt-70 pb-70 border-lime-400 border-4 bg-black rounded-lg">
          <h3 className="text-4xl relative font-bold text-lime-400 underline">
            NUESTRA MISION
          </h3>
          <br />
          <h3 className="text-white text-3xl">Co-crear contenido audiovisual</h3>
          <p className="text-2xl text-white flex  flex-col">que sirva como herramienta de incidencia política, académica y de presión ciudadana para generar acciones que protegen y reconocen la importancia de los y las defensoras de los territorios en la lucha contra el cambio climático.</p>
        </section>
        <div className="pt-20 pb-20"></div>
        <section className="flex flex-col clear-both">
          <div className="flex flex-wrap">
            <img className="w-1/2 h-70 object-contain rounded-full shadow-2xl shadow-blue-500/50" src="https://humanconet.org/wp-content/uploads/2022/09/making-of-min-scaled.webp" alt="imagen-bote" />
            <p className="w-1/2 text-3xl">
              Desde el 2018, realizamos proyectos audiovisuales con distintas comunidades étnicas y campesinas de Colombia con el objetivo de dar a conocer las problemáticas y realidades que viven las personas en la ruralidad, así como sus modos de lucha, resistencias y cuidados.
            </p>
          </div>
          <div className="pt-20 pb-20 "></div>
          <div className="flex flex-col clear-both">
            <div className="flex flex-wrap">
              <p className="w-1/2 text-3xl">
                Desde el 2022, ampliamos nuestro trabajo a las ciudades con el objetivo de brindar una mirada integral acerca de lo que significa la humanización de la lucha ambiental. <span className="text-rose-800">Esta noción guía nuestro trabajo y justifica que para defender el medio ambiente, hay que primero proteger la vida de aquellas personas que viven y cuidan del territorio.</span>
              </p>
              <img className="w-1/2 h-70 object-contain rounded-full shadow-2xl shadow-blue-500/50" src="https://humanconet.org/wp-content/uploads/2022/09/Comuna-13-43-1-min-scaled.webp" alt="image-hands" />
            </div>
          </div>
        </section>
        <div className="pt-20 pb-20"></div>
        <div className="flex justify-center">
          <Link to="/FormJoin" className="bg-sky-700 shadow-lg shadow-cyan-500/50 hover:animate-bounce hover:bg-amber-200 rounded-full px-6 py-3 text-white text-lg font-semibold transition-colors duration-300">
            Únete al Colectivo
          </Link>
        </div>
      </section>
    <Footer />
    </div>
  </>
  );
}

export default AboutUs;
