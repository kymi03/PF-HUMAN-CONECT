import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UserDropManu = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState();
  const User = useSelector(state => state.userAuth)

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
    window.localStorage.removeItem("userInfo");
    window.location.reload();
  };





  return (
    < div  >
      <div className="fixed flex items-center justify-self-center" ref={dropdownRef}>

        <button onClick={toggleMenu} type="select"

          className=" h-10 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" >
          {  User.name? User.name : 'user name' }
        </button> 

        <img
          src="https://humanconet.org/wp-content/uploads/2022/09/Anchincaya-Resiste-HC-01-1024x1024.webp"
          alt="Dropdown Menu"
          className="w-16 h-16 rounded-full"
        />
      </div>

      {isOpen && (
        <div
          className="absolute  px-2  flex-col mt-2 py-2 bg-white border border-gray-300 rounded shadow"
        >
          <Link
            to="/useroptions"
            className="block   text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            Opciones de usuario
          </Link>

{   User.admin === true ?       <Link
            to="/adminoptions"
            className="block   text-gray-800 hover:text-blue-700"
            onClick={toggleMenu}
          >
            Opciones de Administrador
          </Link> : <></>}

          <br></br>
          <button
            onClick={handleButtonClick}
            className="block  text-gray-800 hover:text-blue-700 w-full text-left"
          >
            Cerrar sesión
          </button>

        </div>
      )}
    </div>
  );
};


export default UserDropManu;