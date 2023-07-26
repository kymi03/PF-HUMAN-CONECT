function PADValidation(padData) {
    const errors = {};
    if (!padData.name) {
      errors.name = "Escriba un titulo"
    }
    else if (!/^[a-zA-Z ]*$/.test(padData.name)) {
      errors.name = "Escriba sin numeros ni simbolos"
    }
    else if (padData.name.length < 5 || padData.name.length > 80) {
      errors.name = "El nombre debe tener entre 2 y 40 caracteres"
    }
    else if (!padData.author) {
      errors.author = "Escriba el nombre del autor"
    }
    else if (!/^[a-zA-Z ]*$/.test(padData.author)) {
      errors.author = "Escriba sin numeros ni simbolos"
    }
    else if (padData.author.length < 2 || padData.author.length > 40) {
      errors.author = "El nombre del autor debe tener entre 2 y 40 caracteres"
    }
    else if (!padData.date) {
      errors.date = "Ingrese una fecha"
    }
    // else if (!/^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,3}$/i.test(padData.date)) {
    //   errors.date = 'Debes ingresar una fecha válida'
    // }
    // else if (padData.date.length < 7 || padData.date.length > 50) {
    //   errors.date = "La Fecha debe tener al menos 7 letras y menos de 40"
    // }    
    else if (padData.location.length < 4 || padData.location.length >80) {
      errors.location = "Introduzca una ubicacion válida 'Ciudad-País'"
    }
    else if (padData.breaf.length < 10 || padData.breaf.length > 200 ) {
      errors.breaf = "La descripción debe tener entre 10 y 200 caracteres"
    }
    else if(padData.body.length < 500 || padData.body.length > 5000){
      errors.body = "El artículo debe tener entre 500 y 5000 caracteres"
    }
    return errors
  }
  
  export default PADValidation