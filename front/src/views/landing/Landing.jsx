import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-[url('../src/assets/Cover-Home.jpg')] bg-cover bg-center h-full w-full mt-auto mb-auto">
      <div className="flex justify-center items-center mt-15% ml-50% flex-col">
        <div className="">
          <h1>Bienvenidos!</h1>
        </div>
        <div>
          <Link to="/home">
            <button className="">Click para entrar!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}