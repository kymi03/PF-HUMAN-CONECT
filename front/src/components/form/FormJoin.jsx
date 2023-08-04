import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { postNewGoogleUser, postNewUser } from "../../redux/actions";
import validation from "../validations/validation";
import Swal from "sweetalert2";
import NavBar from "../NavBar/NavBarAle";
import Footer from "../footer/Footer";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import image from '../../assets/icons/google-logo.png'
import { Link } from "react-router-dom";


const FormJoin = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
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
    setUserData({
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    });
  };

  const loginWithGoogle = () => (dispatch) =>{
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = auth.currentUser.accessToken;
        const user = result.user;
        const uemail = user.email;
        Swal.fire({
          title: "Complete los campos para continuar",
          html:
            '<input type="text" placeholder="Nombre" id="name" class="swal2-input">' +
            '<input type="text" placeholder="Apellido" id="lastName" class="swal2-input">' +
            '<input type="text" placeholder="Telefono" id="phone" class="swal2-input">',
          confirmButtonText: "Sign in",
          focusConfirm: false,
          preConfirm: () => {
            const name = document.getElementById("name").value;
            const lastName = document.getElementById("lastName").value;
            const phone = document.getElementById("phone").value;
            const email = uemail;
            const password = token;
            if (!name || !lastName || !phone) {
              Swal.showValidationMessage(`Debe ingresar todos los campos`);
            } else if (!/^[a-zA-Z ]*$/.test(name)) {
              Swal.showValidationMessage("Escriba sin numeros ni simbolos");
            } else if (name.length < 2 || name.length > 40) {
              Swal.showValidationMessage(
                "El nombre debe tener entre 2 y 40 caracteres"
              );
            } else if (!/^[a-zA-Z ]*$/.test(lastName)) {
              Swal.showValidationMessage("Escriba sin numeros ni simbolos");
            } else if (lastName.length < 2 || lastName.length > 40) {
              Swal.showValidationMessage(
                "El apellido debe tener entre 2 y 40 caracteres"
              );
            } else if (!/^([0-9])*$/.test(phone)) {
              Swal.showValidationMessage(
                "Ingresar un número de teléfono de 13 digitos, sin espacios ni simbolos"
              );
            } else if (phone.length != 13) {
              Swal.showValidationMessage("El número debe ser de 13 digitos");
            } else {
              setUserData({
                name: name,
                lastName: lastName,
                password: password,
                uemail: email,
                phone: phone,
                token: token,
              });
            }
            dispatch(
              postNewGoogleUser({
                name,
                lastName,
                password,
                email,
                phone,
                token,
              })
            );
            setUserData({
              name: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              phone: "",
            });
          },
        });
      })
      .then(() => { })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const hdrJoinGoogleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginWithGoogle());
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
      <NavBar />
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
              {errors.name && <p className=" text-red-600">{errors.name}</p>}
              {errors.lastName && <p className=" text-red-600">{errors.lastName}</p>}
              <div className="flex flex-col">
                <input
                  type="text"
                  className=" border-2 m-1 h-9"
                  placeholder="Correo electronico"
                  name="email"
                  value={userData.email}
                  onChange={(event) => hdrChange(event)}
                />
                {errors.email && <p className=" text-red-600">{errors.email}</p>}
                <input
                  type="text"
                  className=" border-2 m-1 h-9"
                  placeholder="Teléfono"
                  name="phone"
                  value={userData.phone}
                  onChange={(event) => hdrChange(event)}
                />
                {errors.phone && <p className=" text-red-600">{errors.phone}</p>}
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
              {errors.password && <p className=" text-red-600">{errors.password}</p>}
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
                className=" text-white font-medium bg-vividGreen w-full text-lg py-2 cursor-pointer rounded-xl hover:outline outline-2 outline-offset-2"
              >
                Registrate
              </button>
              <div className="inline-flex items-center justify-center ">
                <hr className=" h-1 my-8 w-20 bg-gray-400 rounded-lg " />
                <span className="px-1 font-normal text-gray-900 mx-4">or</span>
                <hr className=" h-1 my-8 w-20 bg-gray-400 rounded-lg " />
              </div>
              <button onClick={hdrJoinGoogleSubmit} className=" bg-white mb-3 border py-2 w-full rounded-xl flex justify-center items-center text-lg" > <img src={image} className=" h-6 w-6" /> Registrarse con Google
              </button>
              <p>
                Ya tienes una cuenta?{" "}
                <Link to={"/formlogin"}>
                <button 
                // href="/formlogin" 
                className=" text-blue-900 underline">
                  Iniciar sesión
                </button>
                </Link>
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
      <Footer />
    </div>
  );
};

export default FormJoin;
