import React from 'react';

const Comprando = () => {
  return (
    <section className="flex min-h-full max-w-7xl flex-col text-center items-center ">
      <div className="bg-white bg-opacity-50 w-full  rounded-lg">
        <h2 className="mb-4 text-2xl w-full tracking-tight p-4 bolded leading-none text-gray-50">
            Desbloquea el éxito para tu empresa con nuestro exclusivo servicio:
          </h2>
          <ul className="text-gray-50 flex flex-col justify-center items-center text-xl">
            <li className="mb-4">
              <p className="text-gray-50">¿Tu empresa carece de una presencia online impactante?</p>
            </li>
            <li className="mb-4">
              <p className="text-gray-50">¿Tus canales de difusión no generan los resultados deseados?</p>
            </li>
            <li className="mb-4">
              <p className="text-gray-50">¿Pierdes tiempo valioso organizando datos en lugar de hacer crecer tu negocio?</p>
            </li>
            <li className="mb-4">
              <p className="text-gray-50">No te preocupes, en solo un mes transformaremos tu situación.</p>
            </li>
          </ul>
      </div>
      <div className="mb-8 mt-8 bg-white bg-opacity-50 hadow w-full rounded-lg flex flex-col justify-center items-center">
        <h3 className="mb-8 text-lg font-normal text-blue-300 p-4 lg:text-xl sm:px-16 lg:px-48">
              Este es el plan que tenemos:
            </h3>
          <ul className="text-gray-50 flex flex-col justify-center items-center text-xl">
            <li className="mb-4">
              <p className="text-gray-50">En una primera reunion definiremos el alcance del servicio que tu empresa necesita.</p>
            </li>
            <li className="mb-4">
              <p className="text-gray-50">En solo 2 semanas, tendrás una maqueta de tu nueva página web</p>
            </li>
            <li className="mb-4">
              <p className="text-gray-50">
                Al final del mes, tu página estará online. ¡Ya no perderas tiempo y podras enfocarte en hacer crecer tu negocio!
              </p>
            </li>
          </ul>
          <p className="mb-8 text-lg font-normal text-blue-300 p-4 lg:text-2xl sm:px-16 lg:px-48">
              Una landing page con formulario de contacto, y sincronizacion con redes por solo 950 Euros
            </p>
<p> ¡Pero apúrate! Los primeros 10 clientes lo obtendrán por solo 650 euros./</p>           

      </div>

      <button
        className="flex justify-center text-xl items-center py-3 px-5 font-medium text-gray-200 rounded-lg border-2 border-teal-700 bg-teal-500 bm-5"
      >
            ¡Potencia tu empresa ahora!{' '}
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
          </button>
    </section>
  );
};

export default Comprando;