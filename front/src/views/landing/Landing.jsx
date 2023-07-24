import { Link } from "react-router-dom";
import humanbg from "../../assets/humanbg.png"

export default function Landing() {
  return (
    <div className="flex flex-col h-screen">
      <div style={{
        backgroundImage: `url(${humanbg})`,
        height: "99vh",
        objectFit: "cover",
        backgroundSize: "cover"
      }}
        className="">
        <h1 className=" font-poppins text-zinc-950 font-semibold  mr-4 mt-2 text-5xl text-right text">HUMAN CONET</h1>
      </div>
      <div className="bottom-0 ">
        <Link to="/home" className=" flex flex-row bg-black pt-2 w-screen justify-evenly">
          <img src="https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-1024x1022.png" className="h-16" alt="" />
          <button className=" bg-black text-white h-16 cursor-pointer justify-center font-poppins text-5xl">HAZ CLICK PARA EMPEZAR</button>
          <img src="https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-1024x1022.png" className="h-16" alt="" />
        </Link>
      </div>
    </div>
  );
}