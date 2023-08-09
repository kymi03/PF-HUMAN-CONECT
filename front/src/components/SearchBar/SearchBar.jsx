import React from 'react';

function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Buscar..."
        className="px-3 py-2 bg-gray-800 text-white placeholder-gray-400 placeholder:font-gilroy placeholder:italic rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
      <button className="ml-2 px-4 py-2 bg-blue-600 rounded-md text-white">Buscar</button>
    </div>
  );
}

export default SearchBar;