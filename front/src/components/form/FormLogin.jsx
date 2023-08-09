import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import NavBar from "../NavBar/NavBarAle"
import Footer from "../footer/Footer"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { getEmailAuth, getGoogleAuth } from '../../redux/actions';
import image from '../../assets/icons/google-logo.png'


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

  const hdrJoinSubmit = async (event) => {
    event.preventDefault();
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
  };


  useEffect(() => {
    if(localUser.name!=undefined)navigate("/home")
  }, [localUser.name!=undefined]);

  const hdrChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })    
  }  
  // // useEffect(() => {
  // //   if(localUser.name!=undefined)navigate("/home")
  // // }, [localUser.name!=undefined]);

  // useEffect(() => {
  //   if (localUser.name !== undefined) {
  //     // navigate("/home");
  //   }
  // }, [localUser.name]);

  // const hdrChange = (event) => {
  //   setUserData({
  //     ...userData,
  //     [event.target.name]: event.target.value,
  //   })    
  // }  

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
          <h5 className=" pt-5 font-gobold text-lg font-semibold text-center">Registrate en un nuestra red</h5>
          <form  className=" p-8 flex flex-col" 
          onSubmit={hdrJoinSubmit}
          >
            <input 
            type="text" 
            className=" border-2 mb-4 py-2 px-3 w-full rounded placeholder:font-gilroy" 
            placeholder="Correo electronico"
            name='email'
            value={userData.email} 
            onChange={(event) => hdrChange(event)} />
            <input 
            type="password" 
            className=" border-2 mb-4 py-2 px-3 w-full rounded placeholder:font-gilroy" 
            placeholder="Contraseña"
            name='password'
            value={userData.password}
            onChange={(event) => hdrChange(event)}/>
            <button type="submit" 
              className="bg-vividGreen text-white py-2 px-4 rounded-lg hover:bg-green-600"
              onSubmit={ hdrJoinSubmit }
           >
              Iniciar sesión
            </button>
            <p className=' text-center'>No tienes una cuenta? <a href="/formjoin" className=" text-blue-900 underline">Registrate</a></p>
          </form>
            <button
              onClick={loginWithGoogle}  className=" bg-white mb-3 border border-gray-400 py-2 w-96 ml-4 mr-4 rounded-xl flex justify-center items-center text-lg"        
            >  <img src={image} className=" h-6 w-6" />
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