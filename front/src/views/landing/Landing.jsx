import { Link } from "react-router-dom";
import SliderLanding from "../../components/sliders/SliderLanding";

export default function Landing() {
  return (
    <div className=" bg-cover bg-center overflow-hidden bg-amber-200">
      
      <div className="absolute top-4 left-4 text-black text-7xl font-bold">HUMAN CONET</div>

      
    
      <div className="absolute bottom-32 right-4 text-black">
        <p className="text-7xl font-bold">JUNTOS SOMOS</p>
      </div>
      <footer className="absolute bottom-0 left-0 w-full text-center py-5 bg-gray-800 text-white flex justify-between items-center">
        <div>
          <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14" />
        </div>
        <Link to="/home" className="no-underline text-3xl">CLICK AQUÍ PARA COMENZAR YA</Link>
        <div>
          <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14" />
        </div>
      </footer>
    </div>
  );
}