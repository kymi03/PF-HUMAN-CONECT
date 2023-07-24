function validation(userData) {
  const errors = {};
  if (!userData.name) {
    errors.name = "Escriba un nombre"
  }
  else if (!/^[a-zA-Z ]*$/.test(userData.name)) {
    errors.name = "Escriba sin numeros ni simbolos"
  }
  else if (userData.name.length < 2 || userData.name.length > 40) {
    errors.name = "El nombre debe tener entre 2 y 40 caracteres"
  }
  else if (!userData.lastName) {
    errors.lastName = "Escriba un apellido"
  }
  else if (!/^[a-zA-Z ]*$/.test(userData.lastName)) {
    errors.lastName = "Escriba sin numeros ni simbolos"
  }
  else if (userData.lastName.length < 2 || userData.lastName.length > 40) {
    errors.lastName = "El apellido debe tener entre 2 y 40 caracteres"
  }
  else if (!userData.email) {
    errors.email = "Escriba un email"
  }
  else if (!/^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,3}$/i.test(userData.email)) {
    errors.email = 'Debes ingresar una dirección de email válida'
  }
  else if (userData.email.length < 7 || userData.email.length > 50) {
    errors.email = "El email debe tener entre 7 y 50 caracteres"
  }
  else if (!/^([0-9])*$/.test(userData.phone)) {
    errors.phone = 'Debes ingresar una número de teléfono válido'
  }
  else if (userData.phone.length != 13) {
    errors.phone = "El número debe ser de 13 digitos"
  }
  else if (!/.\d+.*/.test(userData.password)) {
    errors.password = 'La contraseña debe tener al menos un número'
  }
  else if (userData.password.length < 7 || userData.password.length > 13 ) {
    errors.password = "La contraseña debe tener entre 8 y 12 caracteres"
  }
  else if(userData.password !== userData.confirmPassword){
    errors.confirmPassword = "Las contraseñas deben ser iguales"
  }
  return errors
}

export default validation