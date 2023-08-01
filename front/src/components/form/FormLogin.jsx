import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from "../NavBar/NavBar.ale"
import Footer from "../footer/Footer"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { getEmailAuth, getGoogleAuth, setUserState } from '../../redux/actions';

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const localUser = useSelector((state) => state.userAuth);
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()

  const hdrJoinSubmit = (event) => {
    event.preventDefault();
    console.log('nuevo clg');
    if (
      userData?.email == "" ||
      userData?.password == ""
    )
    return Swal.fire("Complete todos los campos");
    dispatch(getEmailAuth({email:userData.email, password:userData.password}))
    setUserData({
      email: "",
      password: "",
    });
   dispatch(setUserState(true))//<----AlejoC137: MALA MIA ! 
  };

  // useEffect(() => {
  //   if(localUser.name!=undefined)navigate("/home")
  // }, [localUser.name!=undefined]);

  useEffect(() => {
    if (localUser.name !== undefined) {
      // navigate("/home");
    }
  }, [localUser.name]);

  const hdrChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })    
  }  

  const loginWithGoogle = ()=>{
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = auth.currentUser.accessToken
      const user = result.user
      const uemail = user.email
      dispatch(getGoogleAuth({uemail , token}))      
      navigate('/home')      
    })
    .then(()=>{
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  }

  return (
    <div className="">
      <NavBar />
      <div className=" flex flex-row my-5 h-5/6 w-full">
        <div className=" border-2 rounded-sm bg-white mx-2 md:w-3/6">
          <h5 className=" pt-5 font-poppins font-semibold">Registrate en un nuestra red</h5>
          <form  className=" p-8 flex flex-col" onSubmit={hdrJoinSubmit}>
            <input 
            type="text" 
            className=" border-2 m-1 h-9" 
            placeholder="Correo electronico"
            name='email'
            value={userData.email} 
            onChange={(event) => hdrChange(event)} />
            <input 
            type="password" 
            className=" border-2 m-1 h-9" 
            placeholder="Contraseña"
            name='password'
            value={userData.password}
            onChange={(event) => hdrChange(event)}/>
            <button type="submit" 
              className=" text-white font-medium bg-vividGreen w-full h-10 cursor-pointer rounded-md hover:outline outline-2 outline-offset-2"
            >
              Iniciar sesión
            </button>
            <p>No tienes una cuenta? <a href="/formjoin" className=" text-blue-900 underline">Registrate</a></p>
          </form>
            <button
              onClick={loginWithGoogle}            
            > 
              Iniciar sesión con Google
            </button>
        </div>
        <div>
          <img
            src="https://humanconet.org/wp-content/uploads/2022/09/Cover-Home-Human-Conet-01-1-1536x780.webp"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FormLogin