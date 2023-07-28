import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from "../NavBar/NavBar.ale"
import Footer from "../footer/Footer"
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { getEmailAuth } from '../../redux/actions';

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [password, setPassword] = useState('');
  const [userNickName, setUserNickName] = useState('')
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()


  // const hdrLoginSubmit = (event) => {
  //   event.preventDefault();
  //   (userData);
  // }


  const hdrChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
    setErrors(validation({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }  

  const loginWithGoogle = ()=>{
    signInWithPopup(auth, googleProvider)
    .then((result)=>{
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
      console.log(user)
      dispatch(getEmailAuth({email, accessToken}))      
    })
    .then(()=>{

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    })
  }

// <====== AlejoC137







// ======> AlejoC137

  return (
    <div className="">
      <NavBar />
      <div className=" flex flex-row my-5 h-5/6 w-full">
        <div className=" border-2 rounded-sm bg-white mx-2 md:w-3/6">
          <h5 className=" pt-5 font-poppins font-semibold">Registrate en un nuestra red</h5>
          <form  className=" p-8 flex flex-col">
            <input type="text" className=" border-2 m-1 h-9" placeholder="Correo electronico" value={userData.userEmail} onChange={(event) => event.target.value} />
            <input type="password" className=" border-2 m-1 h-9" placeholder="Contraseña" />
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