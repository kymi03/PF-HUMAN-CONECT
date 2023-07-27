import React from 'react';
import { Link } from 'react-router-dom';


export default function NavBarAle() {
  return (

    <div>
      <Link to='/articles'>
        <h1>
          Articles
        </h1>
      </Link>
    </div>


  );
}