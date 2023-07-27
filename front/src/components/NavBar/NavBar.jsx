import React from 'react';

export default function NavBar() {
  return (
    <nav className="p-4 md:p-6 bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
            <div>
              <img src='https://humanconet.org/wp-content/uploads/2022/03/Turtle-Turquoise-1-2048x2044.png' alt="turtle icon" className="w-14 h-14" />
            </div>
        </div>

        
        <div className="flex-grow flex justify-center">
          <a href="/about" className="text-white text-lg block md:inline-block mt-2 md:mt-0 mx-4">
            Quienes somos
          </a>
          <a href="/articles" className="text-white text-lg block md:inline-block mt-2 md:mt-0 mx-4">
            Articulos
          </a>
          <a href="/projects" className="text-white text-lg block md:inline-block mt-2 md:mt-0 mx-4">
            Proyectos
          </a>
          <a
            href="/documentaries"
            className="text-white text-lg block md:inline-block mt-2 md:mt-0 mx-4"
          >
            Documentales
          </a>
          <a href="/join" className="text-white text-lg block md:inline-block mt-2 md:mt-0 mx-4">
            Unete
          </a>
          <a href="/donate" className="text-white text-lg block md:inline-block mt-2 md:mt-0 mx-4">
            Donar
          </a>
        </div>
      </div>
    </nav>
  );
}