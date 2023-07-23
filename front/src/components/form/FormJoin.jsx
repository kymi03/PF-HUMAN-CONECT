import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "../../redux/actions";

const FormJoin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const hdrJoinSubmit = (event) => {
    event.preventDefault();
    dispatch(postNewUser(userData));
    setUserData({
      name: "",
      lastName: "",
      email: "",
      password: "",
      phone: ""      
    });
  };

  const hdrChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    // setErrors(validation({
    //     ...userData,
    //     [event.target.name]: event.target.value
    // }))
  };

  return (
    <div className=" bg-grey pt-5 pb-1">
      <div>
        <h3>UNETE PARA INICIAR LA LUCHA</h3>
        <div className=" flex flex-row my-5 h-5/6 w-full">
          <div className=" bg-white mx-2 md:w-4/6">
            <h5 className=" pt-5 font-poppins font-semibold">
              Registrate en un nuestra red
            </h5>
            <form onSubmit={hdrJoinSubmit} className=" p-8">
              <div className=" flex flex-row">
                <input
                  type="text"
                  className=" border-2 m-1 w-1/2 h-9"
                  placeholder="Nombre"
                  name="name"
                  value={userData.name}
                  onChange={(event) => hdrChange(event)}
                />
                <input
                  type="text"
                  className=" border-2 m-1 w-1/2 h-9"
                  placeholder="Apellido"
                  name="lastName"
                  value={userData.lastName}
                  onChange={(event) => hdrChange(event)}
                />
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  className=" border-2 m-1 h-9"
                  placeholder="Correo electronico"
                  name="email"
                  value={userData.email}
                  onChange={(event) => hdrChange(event)}
                />
                <input
                  type="text"
                  className=" border-2 m-1 h-9"
                  placeholder="Teléfono"
                  name="phone"
                  value={userData.phone}
                  onChange={(event) => hdrChange(event)}
                />
              </div>
              <div className=" flex flex-row">
                <input
                  type="password"
                  className=" border-2 m-1 w-1/2 h-9"
                  placeholder="Contraseña"
                  name="password"
                  value={userData.password}
                  onChange={(event) => hdrChange(event)}
                />
                <input
                  type="text"
                  className=" border-2 m-1 w-1/2 h-9"
                  placeholder="Confirmar contraseña"
                  name="confirmPassword"
                />
              </div>
              <div className=" flex flex-col">
                {/* <select name="" id="" className="border-2 m-1 h-9">
                  <option
                    value=""
                    disabled                    
                    hidden
                    className=" font-ligth"
                  >
                    {" "}
                    Como nos conociste?
                  </option>
                </select> */}
                <div className=" text-xs">
                  <input type="checkbox" className="" /> Quiero suscribirme al
                  newsletter
                </div>
              </div>
              <button
                type="submit"
                className=" text-white font-medium bg-vividGreen w-full h-10 cursor-pointer rounded-md hover:outline outline-2 outline-offset-2"
              >
                Registrate
              </button>
              <p>
                Ya tienes una cuenta?{" "}
                <a href="#" className=" text-blue-900 underline">
                  Iniciar sesión
                </a>
              </p>
            </form>
          </div>
          <div>
            <img
              src="https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormJoin;
