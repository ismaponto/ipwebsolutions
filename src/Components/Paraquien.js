import React from 'react';
import compraweb from './Paraquien/compraweb.svg';
import crecer from './Paraquien/crecer.svg';
import money from './Paraquien/money.svg';

function Paraquien() {
	return (
		<div className="flex flex-col w-full justify-center md:flex-col pb-4  ">
			<h2 className="mb-2 flex bg-red-200 flex-col text-center center justify-center w-full text-xl text-vanilla dark:text-vanilla h-36">
				Descubre el crecimiento que  puede experimentar tu empresa al conectarla con el mundo online a través de
				una página web.¡Desbloquea su potencial y lleva tu presencia digital a nuevos horizontes! {' '}
			</h2>{' '}
			<div className="flex flex-row flex-wrap bg-red-400 justify-center w-full">
				<Card
					image={compraweb}
					title="Promociona tu Negocio"
					description="Una aplicación móvil es una herramienta poderosa para promocionar tu negocio y llegar a nuevos clientes. Estudios sugieren que las ventas pueden incrementar entre un veinte y cincuenta por ciento en el primer año."
				/>

				<Card
					image={crecer}
					title="Beneficios de una App Móvil"
					description="Descubre cómo una aplicación móvil puede ayudarte a llegar a nuevos clientes, promocionar tus productos o servicios, crear una comunidad y mejorar la lealtad de tus clientes con experiencias personalizadas."
				/>

				<Card
					image={money}
					title="Haz Crecer tu Negocio"
					description="¿Estás listo para llevar tu negocio al siguiente nivel? No subestimes el poder de tener tu propia aplicación móvil. Si no aprovechas esta oportunidad ahora, ten en cuenta que tu competencia ya lo está haciendo"
				/>
			</div>{' '}
			{' '}
		</div>
	);
}

// Componente para una tarjeta individual
const Card = ({ image, title, description }) => (
	<div className="flex flex-col flex-wrap  items-center md:flex-col justify-between max-w-sm p-9 m-4 bg-opacity-50 shadow border-gray-200 bg-vanilla rounded-lg -md p-4">
		<div className="flex center p-3">
			<img className="max-w-xs" src={image} alt="personas" />
		</div>{' '}
		<div className="flex flex-col max-w-lg flex-0 center text-xl text-matcha justify-center">
			<p className="flex justify-center items-center font-bold mb-4"> {title} </p> {' '}
			<p className="flex justify-center items-center"> {description} </p> {' '}
		</div>{' '}
		{' '}
	</div>
);

export default Paraquien;
