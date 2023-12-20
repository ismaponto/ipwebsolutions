import React from 'react';
import lupa from './Servicios/lupa.svg';import ojo from './Servicios/ojo.svg';
import pc from './Servicios/pc.svg';
import smart from './Servicios/smart.svg';
import ux from './Servicios/ux.svg';
import animation from './Servicios/animation.svg';
const Servicios = () => {
	return (
		<div className="contenedor-servicios flex flex-row flex-wrap w-full m-4 items-center max-w-7xl shadow-md justify-items-center self-center w-full ">
			<h2 className="mb-2 flex bg-red-200 flex-col text-center center justify-center w-full text-xl text-vanilla dark:text-vanilla h-36">
				No es solo una pagina web...
			</h2>{' '}
		
			<TarjetaServicio
				titulo="Desarrollo"
				descripcion="Un sitio bien codificado, optimizado para un rendimiento y accesibilidad máximos."
				image={pc}
			/>
			<TarjetaServicio
				titulo="Diseño UI/UX"
				descripcion="Para mejorar la experiencia global del usuario y ayudar a los visitantes a navegar fácilmente por tu sitio web."
				image={ux}
			/>
			<TarjetaServicio
				titulo="Identidad Visual"
				descripcion="Te acompañamos para definir la identidad visual de tu sitio o empresa, fortaleciendo tu imagen de marca y destacándote ante clientes y socios."
				image={ojo}
			/>
			<TarjetaServicio
				titulo="Optimización SEO/SEA"
				descripcion="Optimizamos la estructura, contenido, palabras clave y etiquetas de tu sitio web para mejorar su clasificación en los resultados de los motores de búsqueda."
				image={lupa}
			/>
			<TarjetaServicio
				titulo="Responsive"
				descripcion="Creación de sitios web que se adaptan a diferentes tipos de dispositivos y tamaños de pantalla, para una experiencia de usuario óptima en todos los dispositivos."
				image={smart}
			/>
			<TarjetaServicio
				titulo="Animaciones"
				descripcion="Integración de contenido textual, visual y multimedia en el sitio web para crear una experiencia de usuario coherente y atractiva."
				image={animation}
			/>  
		</div>
	);
};

const TarjetaServicio = ({ titulo, descripcion, image }) => {
	return (
		<div className="tarjeta-servicio flex flex-col m-4 max-w-sm">
			<img src={image} alt={titulo} className=' self-center'/> <h3 className='justify-start'> {titulo} </h3> <p> {descripcion} </p>{' '}
		</div>
	);
};

export default Servicios;
