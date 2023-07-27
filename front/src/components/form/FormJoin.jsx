import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postNewUser } from "../../redux/actions";
import validation from "../validations/validation";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBarAle"
import Footer from "../footer/Footer"

const FormJoin = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const hdrJoinSubmit = (event) => {
    event.preventDefault();
    if (
      userData?.name == "" ||
      userData?.lastName == "" ||
      userData?.email == "" ||
      userData?.password == "" ||
      userData?.confirmPassword == "" ||
      userData?.phone == "" 
    )
      return Swal.fire("Complete todos los campos");
    if (errors?.name) return Swal.fire(errors.name);
    if (errors?.lastName) return Swal.fire(errors.lastName);
    if (errors?.email) return Swal.fire(errors.email);
    if (errors?.password) return Swal.fire(errors.password);
    if (errors?.phone) return Swal.fire(errors.phone);
    if (errors?.confirmPassword) return Swal.fire(errors.confirmPassword);
    dispatch(postNewUser(userData));
    Swal.fire("Usuario creado exitosamente");
    setUserData({
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword:"",
      phone: ""
    });
  };

  const hdrChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div className=" ">
      <NavBar/>
      <div>
        <div className=" flex flex-row my-5 h-5/6 w-full">
          <div className=" border-2 rounded-sm border-gray-300 mx-2 md:w-3/6">
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
              {errors.name && <p>{errors.name}</p>}
              {errors.lastName && <p>{errors.lastName}</p>}
              <div className="flex flex-col">
                <input
                  type="text"
                  className=" border-2 m-1 h-9"
                  placeholder="Correo electronico"
                  name="email"
                  value={userData.email}
                  onChange={(event) => hdrChange(event)}
                />
                {errors.email && <p>{errors.email}</p>}
                <input
                  type="text"
                  className=" border-2 m-1 h-9"
                  placeholder="Teléfono"
                  name="phone"
                  value={userData.phone}
                  onChange={(event) => hdrChange(event)}
                />
                {errors.phone && <p>{errors.phone}</p>}
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
                  type="password"
                  className=" border-2 m-1 w-1/2 h-9"
                  placeholder="Confirmar contraseña"
                  name="confirmPassword"
                  value={userData.confirmPassword}
                  onChange={(event) => hdrChange(event)}
                />
              </div>
              {errors.password && <p>{errors.password}</p>}
              {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
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
                {/* <div className=" text-xs">
                  <input type="checkbox" className="" /> Quiero suscribirme al
                  newsletter
                </div> */}
              </div>
              <button
                type="submit"
                className=" text-white font-medium bg-vividGreen w-full h-10 cursor-pointer rounded-md hover:outline outline-2 outline-offset-2"
              >
                Registrate
              </button>
              <p>
                Ya tienes una cuenta?{" "}
                <a href="/formlogin" className=" text-blue-900 underline">
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
      <Footer/>
    </div>
  );
};

export default FormJoin;
