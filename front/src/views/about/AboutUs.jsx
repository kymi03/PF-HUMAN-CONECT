import React from "react";
import NavBarAle from "../../components/NavBar/NavBar.ale";

function AboutUs() {
  return (
    <>
      <NavBarAle />
      <div>
        <h2>HUMAN CONET</h2>
        <p>
          Somos un colectivo franco-colombiano, constituido como asociación
          francesa, conformado por mujeres y hombres comprometidos con la
          protección y el reconocimiento de los y las defensoras de los
          territorios en la lucha contra el cambio climático.
        </p>
      </div>
      <div>
        <h2>NUESTRA MISIÓN</h2>
        <p>
          Co-crear contenido audiovisual que sirva como herramienta de
          incidencia política, académica y de presión ciudadana para generar
          acciones que protegen y reconocen la importancia de los y las
          defensoras de los territorios en la lucha contra el cambio climático.
        </p>
      </div>
      <div>
        <p>
          Desde el 2018, realizamos proyectos audiovisuales con distintas
          comunidades étnicas y campesinas de Colombia con el objetivo de dar a
          conocer las problemáticas y realidades que viven las personas en la
          ruralidad, así como sus modos de lucha, resistencias y cuidados.
        </p>
        <img
          width={500}
          src="https://humanconet.org/wp-content/uploads/2022/09/Comuna-13-43-1-min-1536x960.webp"
          alt=""
        />
      </div>

      <div>
        <p>
          Desde el 2022, ampliamos nuestro trabajo a las ciudades con el
          objetivo de brindar una mirada integral acerca de lo que significa la
          humanización de la lucha ambiental. Esta noción guía nuestro trabajo y
          justifica que para defender el medio ambiente, hay que primero
          proteger la vida de aquellas personas que viven y cuidan del
          territorio.
        </p>

        <img
          width={500}
          src="https://humanconet.org/wp-content/uploads/2022/09/making-of-min-1536x1024.webp"
          alt=""
        />
      </div>
    </>
  );
}

export default AboutUs;
