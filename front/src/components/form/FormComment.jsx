import React from 'react'
import NavBarAle from '../NavBar/NavBar.ale'

function FormComent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <NavBarAle/>
      <form className="bg-amber-50 rounded-lg shadow-lg p-20 mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nombre y Apellido:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full py-2 px-20 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Tu nombre y apellido"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
            Comentario:
          </label>
          <textarea
            id="comment"
            name="comment"
            rows="6"  // Increased the number of rows to make it taller
            className="w-full resize-none border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Escribe tu comentario aquí..."
          ></textarea>
        </div>

        <div className="flex justify-between">
          
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormComent