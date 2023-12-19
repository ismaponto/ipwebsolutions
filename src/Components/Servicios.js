import React from 'react';

const Servicios = () => {
	return (
		<div className="contenedor-servicios flex flex-row flex-wrap m-4 items-center max-w-7xl justify-items-center self-center w-full ">
			<TarjetaServicio
				titulo="Desarrollo"
				descripcion="Un sitio bien codificado, optimizado para un rendimiento y accesibilidad máximos."
				imagenSrc="url_de_tu_imagen1"
			/>
			<TarjetaServicio
				titulo="Diseño UI/UX"
				descripcion="Para mejorar la experiencia global del usuario y ayudar a los visitantes a navegar fácilmente por tu sitio web."
				imagenSrc="url_de_tu_imagen2"
			/>
			<TarjetaServicio
				titulo="Identidad Visual"
				descripcion="Te acompañamos para definir la identidad visual de tu sitio o empresa, fortaleciendo tu imagen de marca y destacándote ante clientes y socios."
				imagenSrc="url_de_tu_imagen3"
			/>
			<TarjetaServicio
				titulo="Optimización SEO/SEA"
				descripcion="Optimizamos la estructura, contenido, palabras clave y etiquetas de tu sitio web para mejorar su clasificación en los resultados de los motores de búsqueda."
				imagenSrc="url_de_tu_imagen4"
			/>
			<TarjetaServicio
				titulo="Responsive"
				descripcion="Creación de sitios web que se adaptan a diferentes tipos de dispositivos y tamaños de pantalla, para una experiencia de usuario óptima en todos los dispositivos."
				imagenSrc="url_de_tu_imagen5"
			/>
			<TarjetaServicio
				titulo="Animaciones"
				descripcion="Integración de contenido textual, visual y multimedia en el sitio web para crear una experiencia de usuario coherente y atractiva."
				imagenSrc="url_de_tu_imagen6"
			/>  
		</div>
	);
};

const TarjetaServicio = ({ titulo, descripcion, imagenSrc }) => {
	return (
		<div className="tarjeta-servicio m-4 max-w-sm">
			<img src={imagenSrc} alt={titulo} /> <h3> {titulo} </h3> <p> {descripcion} </p>{' '}
		</div>
	);
};

export default Servicios;
