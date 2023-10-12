import React, { useState, useEffect } from 'react';
import NavigationBar from './NavigationBar';
import card from "./jumbotron/card-svgrepo-com.svg"
import microphone from "./jumbotron/microphone1-broadcasting-svgrepo-com.svg"
import clock from "./jumbotron/clock-svgrepo-com.svg"
import setting from "./jumbotron/setting-setting-svgrepo-com.svg"

const Jumbotron = () => {
  const [gradient, setGradient] = useState('linear-gradient(to right, #91D5D3, rgba(0, 128, 128, 0.8))'); // Color sepia en lugar de blanco

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calcula los valores de los colores del degradado en función de la posición del puntero
      const x = (e.clientX / window.innerWidth) * 100;
      // Calcula los colores con transparencia
      const color1 = `#91D5D3 ${x}%`;
      const color2 = `rgba(0, 128, 128, 0.8)`;
      const color = `#91D5D3`;
      const color2trans = `rgba(0, 128, 128, 0.0)`;

      // Actualiza el estado con el nuevo degradado
      setGradient(`linear-gradient(to right, ${color1}, ${color2})`);
      setGradient(`linear-gradient(to bottom, ${color}, ${color2trans})`)
    };

    // Agrega un evento para escuchar los movimientos del mouse
    window.addEventListener('mousemove', handleMouseMove);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className="bg-center bg-no-repeat bg-cover bg-blend-multiply"
      style={{
        background: gradient, // Aplica el degradado actual como fondo
      }} >
        <NavigationBar />
 <div className="px-4 text-blue-300	mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-bold tracking-tight p-4 leading-none text-gray-50	 md:text-5xl lg:text-6xl">IP  Web Solutions</h1>
  
        <p className="mb-8 text-2xl font-normal text-blue-300 lg:text-2xl sm:px-16 lg:px-48">
Automatiza tus procesos y crece tus negociost        </p>
<div className='mb-8 mt-8 rounded-lg flex flex-col justify-center justify-items-center'>   <p className="mb-8 text-lg font-normal text-blue-300  p-4 lg:text-2xl sm:px-16 lg:px-48">
Creamos apps y páginas web que te ayudarán a:</p>

        <ul className='text-gray-50 flex flex-col justify-center items-justify-center text-2xl'>
          <li className="mb-4 flex flex-row justify-center"><img src={microphone} alt="visibility" className="w-8 " /> <p>Aumentar tu visibilidad online</p></li>
          <li className="mb-4 flex flex-row justify-center"><img src={card} alt="visibility" className="w-8 " /> <p>Generar más leads y ventas</p></li>
          <li className="mb-4 flex flex-row justify-center"><img src={setting} alt="visibility" className="w-8 " /> <p>Automatizar tareas repetitivas</p></li>
          <li className="mb-4 flex flex-row justify-center"><img src={clock} alt="visibility" className="w-8 " /> <p>Ahorrar tiempo y dinero</p></li>
        </ul>

        <p className="mb-8 text-lg font-normal text-gray-50 lg:text-2xl sm:px-16 lg:px-48">
         Te ayudaremos a crear una solución digital personalizada que se adapte a las necesidades de tu negocio
        </p></div>
     

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 p-9">
          <a href="#Contacto" className="inline-flex justify-center text-2xl items-center py-3 px-5  font-medium text-gray-200 
          rounded-lg border-2 border-teal-700 bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800 m-8">
            Solicita una cotización gratis
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
        </div>
      </div>    </section>
  );
};



export default Jumbotron;

