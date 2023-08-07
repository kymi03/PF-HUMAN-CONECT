// import { Link } from "react-router-dom";
// import VideoPlayer from "../../components/video/VideoPlayer";


// export default function Landing() {
//   return (
//     <div className=" bg-cover bg-center overflow-hidden bg-grey">
      
//       <div className="absolute top-4 left-4 text-black text-7xl font-bold">
//         <h2 className="text-9xl font-extrabold font-poppins text-teal-600">HUMAN <span className="text-9xl font-light text-amber-300">CONET</span></h2>
//       </div>

//       <VideoPlayer/>
    
//       <div className="absolute bottom-2 right-4 text-black">
//         <p className="text-8xl font-bold font-poppins">JUNTOS SOMOS</p>
//       </div>

//       <footer className="bottom-0 left-0 w-full text-center py-5 bg-gray-800 text-white flex justify-between items-center hover:bg-slate-600">
//         <div>
//           <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14" />
//         </div>
//         <Link to="/home" className="no-underline text-3xl hover:text-blue-700">CLICK AQUÍ PARA COMENZAR YA</Link>
//         <div>
//           <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14" />
//         </div>
//       </footer>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import image from '../../assets/titulo-landing.png'


export default function Landing() {
  return (
    <div className=" bg-cover bg-center overflow-hidden bg-black h-screen flex flex-col justify-center items-center">
      <div className=" flex justify-center items-center">
        <img src={image} alt="Logo Superior Izquierdo" className="  w-60 h-18 m-0" crossOrigin="anonymous"/>
      </div>
    
      <div className=" flex justify-center mb-28 w-2/3 mt-10">
        <iframe 
        width="80%"
        height="350"
        src="https://www.youtube.com/embed/t7pmJ43FN5E?autoplay=1"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        />
      </div>
    
      <footer className=" fixed bottom-0 left-0 w-full text-center py-2 bg-gray-800 flex justify-between items-center hover:bg-slate-600 transform hover:scale-105 transition-all shadow-md">
        <div>
          <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14 mx-12" />
        </div>
        <Link to="/home" className="no-underline text-3xl font-gobold inline-block px-6 py-3 rounded-lg text-blue-500 hover:text-white transition-colors duration-300 mt-0">CLICK AQUÍ PARA COMENZAR YA</Link>
        <div>
          <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14 mx-12" />
        </div>
      </footer>
    </div>
  );
} 