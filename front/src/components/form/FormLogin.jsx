import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const FormLogin = ({login}) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
  });
  const [password, setPassword] = useState('');
  const [userNickName, setUserNickName] = useState('')

const hdrLoginSubmit = (event) =>{
  event.preventDefault();
  login(userData);
}


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



  return (
    <div className=" bg-grey pt-5 pb-1">
      <div>
        <h3>UNETE PARA INICIAR LA LUCHA</h3>
        <div className=" flex flex-row my-5 h-5/6 w-full">
          <div className=" bg-white mx-2 md:w-4/6">
            <h5 className=" pt-5 font-poppins font-semibold">Registrate en un nuestra red</h5>
            <form onSubmit={hdrLoginSubmit} className=" p-8">
              <div className=" flex flex-row">
                <input type="text" className=" border-2 m-1 w-1/2 h-9" placeholder="Nombre" value={userData.userName} onChange={(event) => event.target.value}/>
                <input type="text" className=" border-2 m-1 w-1/2 h-9" placeholder="Apellido" value={userData.userLastName} onChange={(event) => event.target.value}/>
              </div>
              <div className="flex flex-col">
                <input type="text" className=" border-2 m-1 h-9" placeholder="Correo electronico" value={userData.userEmail} onChange={(event) => event.target.value}/>
                <input type="text" className=" border-2 m-1 h-9" placeholder="Teléfono" value={userData.userPhone} onChange={(event) => event.target.value} />
              </div>
              <div className=" flex flex-row">
                <input type="password" className=" border-2 m-1 w-1/2 h-9" placeholder="Contraseña" />
                <input type="text" className=" border-2 m-1 w-1/2 h-9" placeholder="Confirmar contraseña" />
              </div>
              <div className=" flex flex-col">
                <select name="" id="" className="border-2 m-1 h-9">
                  <option value="" disabled selected hidden className=" font-ligth"> Como nos conociste?</option>
                </select>
                <div className=" text-xs">
                  <input type="checkbox" className=""/> Quiero suscribirme al newsletter
                </div>
              </div>
              <button type="submit" className=" text-white font-medium bg-vividGreen w-full h-10 cursor-pointer rounded-md hover:outline outline-2 outline-offset-2">Registrate</button>
                <p>Ya tienes una cuenta? <a href="#" className=" text-blue-900 underline">Iniciar sesión</a></p>
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
  )
}

export default FormLogin