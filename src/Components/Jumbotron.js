import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import NavigationBar from './NavigationBar';
import card from './jumbotron/card-svgrepo-com.svg';
import microphone from './jumbotron/microphone1-broadcasting-svgrepo-com.svg';
import clock from './jumbotron/clock-svgrepo-com.svg';
import setting from './jumbotron/setting-setting-svgrepo-com.svg';

const Jumbotron = () => {
  const [gradient, setGradient] = useState(
    'linear-gradient(to right, #91D5D3, rgba(0, 128, 128, 0.8))'
  );



  useEffect(() => {
    const handleMouseMove = (e) => {
      const color1 = `#91D5D3 `;
      const color2 = `rgba(0, 128, 128, 0.8)`;
      const color = `#91D5D3`;
      const color2trans = `rgba(0, 128, 128, 0.0)`;

      setGradient(`linear-gradient(to right, ${color1}, ${color2})`);
      setGradient(`linear-gradient(to bottom, ${color}, ${color2trans})`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className={`bg-center bg-no-repeat bg-cover bg-blend-multiply `}
      style={{
        background: gradient,
      }}
    >
      <NavigationBar />
      <div className="px-4 text-blue-300 mx-auto max-w-screen-xl text-center  lg:py-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight p-4 leading-none text-gray-50 md:text-5xl lg:text-6xl">
          IP Web Solutions
        </h1>

				<div className="mb-8 mt-8 rounded-lg flex flex-col justify-center justify-items-center">
					{' '}
					<p className="mb-8 text-lg font-normal text-blue-300  p-4 lg:text-2xl sm:px-16 lg:px-48">
						Creamos apps y páginas web que te ayudarán a:
					</p>
					<ul className="text-gray-50 flex flex-col justify-center items-justify-center text-2xl">
						<li className="mb-4 flex flex-row justify-center">
							<img src={microphone} alt="visibility" className="w-8 " />{' '}
							<p>Aumentar tu visibilidad online</p>
						</li>
						<li className="mb-4 flex flex-row justify-center">
							<img src={card} alt="visibility" className="w-8 " /> <p>Generar más leads y ventas</p>
						</li>
						<li className="mb-4 flex flex-row justify-center">
							<img src={setting} alt="visibility" className="w-8 " />{' '}
							<p>Automatizar tareas repetitivas</p>
						</li>
						<li className="mb-4 flex flex-row justify-center">
							<img src={clock} alt="visibility" className="w-8 " /> <p>Ahorrar tiempo y dineros</p>
						</li>
					</ul>
					<p className="mb-8 text-lg font-normal text-gray-50 lg:text-2xl sm:px-16 lg:px-48">
						Te ayudo a crear una solución digital personalizada que se adapte a las necesidades de tu
						negocio
					</p>
				</div>

				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 p-9">
          {/* Utiliza Link para navegar hacia la página "Comprando" */}
          <Link
            to="/comprando"
            className="inline-flex justify-center text-xl items-center py-3 px-5 font-medium text-gray-200 rounded-lg border-2 border-teal-700 bg-teal-500 hover:bg-teal-800 hover:text-2xl hover:ring-4 hover:ring-teal-300 dark:focus:ring-teal-800 m-8"
          >
            Quiero mi Pagina Web
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
