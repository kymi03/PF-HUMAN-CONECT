import { Link } from "react-router-dom";
import VideoPlayer from "../../components/video/VideoPlayer";


export default function Landing() {
  return (
    <div className="bg-cover bg-center overflow-hidden h-screen bg-grey">
      
      <div className="absolute top-6 left-4 text-black text-7xl font-bold">
        <h2 className="text-9xl font-extrabold font-poppins text-teal-600">HUMAN <span className="text-9xl font-light text-amber-300">CONET</span></h2>
      </div>

      <VideoPlayer/>
    
      <div className="absolute bottom-24 right-4 text-black">
        <p className="text-8xl font-bold font-poppins">JUNTOS SOMOS</p>
      </div>

      <footer className="fixed left-0 bottom-0 w-full text-center py-5 bg-black text-white flex justify-between items-center hover:bg-slate-600">
        <div>
          <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14 ml-12" />
        </div>
        <Link to="/home" className="no-underline text-3xl hover:text-blue-700">CLICK AQUÍ PARA COMENZAR YA</Link>
        <div>
          <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14 mr-12" />
        </div>
      </footer>
    </div>
  );
}