import React from 'react';
import compraweb from "./Paraquien/compraweb.svg"
import crecer from "./Paraquien/crecer.svg"
import money from "./Paraquien/money.svg"


function Paraquien() {
  return ( <div className="flex flex-wrap w-full items-center  md:flex-col">
 
  <h2 className="mb-2 flex flex-col center bg-teal-100  justify-center w-full text-3xl  text-teal-400 text-bold dark:text-white h-36 ">
   Tu app móvil es tu mejor herramienta para crecer
  </h2>
   
<div className="flex flex-row flex-wrap "> 
<div className="flex flex-col flex-wrap items-center md:flex-col justify-between p-9">
      <div className="flex center p-3">
        <img className="max-w-xs" src={compraweb} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-lg flex-0 center text-xl text-gray-500 justify-center">
         <p>Una app móvil es una herramienta poderosa que puedes usar para promocionar tu negocio y llegar a nuevos clientes.</p>
         <p>Se estima que las ventas crecen entre veinte y cincuenta porciento en el primer año</p>
      </div>
    </div>

    <div className="flex flex-col flex-wrap items-center md:flex-col justify-between p-9">
    <div className="flex center p-3">
        <img className="max-w-xs" src={crecer} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-lg flex-0 center text-xl text-gray-500 justify-center">
         <p className=''>Las apps móviles pueden ayudarte a:</p>
         <ul className='list-image-[url(checkmark.png)]'><li><p>Llegar a nuevos clientes</p></li>
         <li><p>Promocionar tus productos o servicios</p></li>
         <li><p>Crear una comunidad</p></li>
         <li><p>Mejorar la lealtad de los clientes</p></li>
         </ul>
      </div>
    </div>


    <div className="flex flex-col flex-wrap items-center md:flex-col justify-between p-9">
    <div className="flex center p-3">
        <img className="max-w-xs" src={money} alt="personas" />
      </div>
    
      <div className="flex flex-col max-w-lg flex-0 center text-xl text-gray-500 p-9">
         <p>¿Quieres que tu negocio crezca? Si no te lo tomas en serio, tu competencia sí lo hará. Contáctanos hoy mismo para obtener un presupuesto y empezar a crecer</p>
      </div>

    </div>
</div>
   
  


    </div>

  );
}

export default Paraquien;