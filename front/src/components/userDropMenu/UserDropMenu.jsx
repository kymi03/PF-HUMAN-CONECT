import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUserAuth } from "../../redux/actions";

const UserDropManu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState();
  const User = useSelector((state) => state.userAuth);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const userInfo = window.localStorage.getItem("userInfo");
    setUserData(userInfo);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when clicking outside
  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleButtonClick = () => {
    window.localStorage.removeItem("userInfo", navigate('/home'));
    dispatch(logOutUserAuth())
    window.location.reload()
  };

  return (
    < div className=" z-50" >
      <div className=" flex items-center justify-self-center" ref={dropdownRef}>

        <button onClick={toggleMenu} type="select"

          className=" h-10 px-5 text-sm font-gobold font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-keppel600 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
          {User?.name ? `Hola, ${User.name.split(" ")[0]}!` : "Hola, user name!"}
        </button>

        {/* <img
          src="https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp"
          alt="Dropdown Menu"
          className="w-16 h-16 rounded-full"
        /> */}

<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center overflow-hidden">
  <h1 className="text-orange-500 font-bold text-7xl mb-4 overflow-hidden whitespace-nowrap">
    {User.name[0]}
  </h1>
</div>

      </div>

      {isOpen && (
        <div className="absolute px-2 flex-col mt-2 py-2 bg-white border border-gray-300 rounded-xl shadow">
          <Link
            to="/useroptions"
            className="block   text-gray-800 hover:text-blue-700 font-gilroy"
            onClick={toggleMenu}
          >
            Opciones de usuario
          </Link>

          {User.admin === true ? <Link
            to="/adminoptions"
            className="block   text-gray-800 hover:text-blue-700 font-gilroy"
            onClick={toggleMenu}
          >
            Opciones de Administrador
          </Link> : <></>}

          <br></br>
          <button
            onClick={handleButtonClick}
            className="block  text-gray-800 hover:text-blue-700 w-full text-left font-gilroy"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropManu;
