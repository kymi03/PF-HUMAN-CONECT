function articleValidation(artData) {
    const errors = {};
    if (!artData.name) {
      errors.name = "Escriba un titulo"
    }
    else if (!/^[a-zA-Z ]*$/.test(artData.name)) {
      errors.name = "Escriba sin numeros ni simbolos"
    }
    else if (artData.name.length < 5 || artData.name.length > 80) {
      errors.name = "El nombre debe tener entre 2 y 40 caracteres"
    }
    else if (!artData.author) {
      errors.author = "Escriba el nombre del autor"
    }
    else if (!/^[a-zA-Z ]*$/.test(artData.author)) {
      errors.author = "Escriba sin numeros ni simbolos"
    }
    else if (artData.author.length < 2 || artData.author.length > 40) {
      errors.author = "El nombre del autor debe tener entre 2 y 40 caracteres"
    }
    else if (!artData.date) {
      errors.date = "Ingrese una fecha"
    }
    // else if (!/^[a-z0-9._%+-]+@[A-Z0-9.-]+\.[a-z]{2,3}$/i.test(artData.date)) {
    //   errors.date = 'Debes ingresar una fecha válida'
    // }
    // else if (artData.date.length < 7 || artData.date.length > 50) {
    //   errors.date = "La Fecha debe tener al menos 7 letras y menos de 40"
    // }    
    else if (artData.location.length < 4 || artData.location.length >80) {
      errors.location = "Introduzca una ubicacion válida 'Ciudad-País'"
    }
    else if (artData.breaf.length < 10 || artData.breaf.length > 200 ) {
      errors.breaf = "La descripción debe tener entre 10 y 200 caracteres"
    }
    else if(artData.body.length < 500 || artData.body.length > 5000){
      errors.body = "El artículo debe tener entre 500 y 5000 caracteres"
    }
    return errors
  }
  
  export default articleValidation