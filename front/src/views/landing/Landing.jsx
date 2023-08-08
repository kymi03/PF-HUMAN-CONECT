
// import { Link } from "react-router-dom";
// import image from '../../assets/titulo-landing.png'


// export default function Landing() {
//   return (
//     <div className="bg-cover bg-center overflow-hidden h-screen bg-grey">
      
//       <div className="absolute top-6 left-4 text-black text-7xl font-bold">
//         <h2 className="text-9xl font-extrabold font-poppins text-teal-600">HUMAN <span className="text-9xl font-light text-amber-300">CONET</span></h2>
//       </div>
    
//       <div className="absolute bottom-24 right-4 text-black">
//         <p className="text-8xl font-bold font-poppins">JUNTOS SOMOS</p>
//       </div>

//       <footer className="fixed left-0 bottom-0 w-full text-center py-5 bg-black text-white flex justify-between items-center hover:bg-slate-600">
//         <div>
//           <img src={turtleIcon} alt="turtle icon" className="w-14 h-14 ml-12" />
//         </div>
//         <Link to="/home" className="no-underline text-3xl font-gobold inline-block px-6 py-3 rounded-lg text-blue-500 hover:text-white transition-colors duration-300 mt-0">CLICK AQUÍ PARA COMENZAR YA</Link>
//         <div>
//           <img src={turtleIcon} alt="turtle icon" className="w-14 h-14 mr-12" />
//         </div>
//       </footer>
//     </div>
//   );
// } 

import { Link } from "react-router-dom";
import image from '../../assets/titulo-landing.png'
import turtleIcon from '../../assets/icons/turtle-yellow.png'


export default function Landing() {
  return (
    <div className=" bg-cover bg-center overflow-hidden bg-black h-screen flex flex-col items-center">
      <div className=" flex justify-center items-center">
        <img src={image} alt="Logo Human" className="  w-96 h-36 m-0 mb-4 mt-4" crossOrigin="anonymous"/>
      </div>
    
      <div className=" flex justify-center mb-0 w-2/3 mt-0">
        <iframe 
        width="60%"
        height="280"
        src="https://www.youtube.com/embed/t7pmJ43FN5E?autoplay=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        />
      </div>
    
      <footer className=" fixed bottom-0 left-0 w-full text-center py-1 bg-keppel600 flex justify-between items-center hover:bg-keppel700 transform hover:scale-105 transition-all shadow-md">
        <div>
          <img src={turtleIcon} alt="turtle icon" className="w-14 h-14 mx-12" />
        </div>
        <Link to="/home" className="no-underline text-3xl font-gobold inline-block px-6 py-3 rounded-lg text-corn hover:text-white transition-colors duration-300 mt-0">CLICK AQUÍ PARA COMENZAR YA</Link>
        <div>
          <img src={turtleIcon} alt="turtle icon" className="w-14 h-14 mx-12" />
        </div>
      </footer>
    </div>
  );
}