import React from 'react';
import compraweb from './Paraquien/compraweb.svg';
import crecer from './Paraquien/crecer.svg';
import money from './Paraquien/money.svg';

function Paraquien() {
	return (
		<div className="flex flex-col w-full justify-center md:flex-col mb-8">
			<h2 className="mb-2 flex flex-col center bg-teal-500 justify-center w-full text-3xl  text-white text-bold dark:text-white h-36 ">
				Tu app móvil es tu mejor herramienta para crecer
			</h2>

			<div className="flex flex-row flex-wrap justify-center w-full">
				<div className="flex flex-col flex-wrap items-center md:flex-col justify-between max-w-sm p-9">
					<div className="flex center p-3">
						<img className="max-w-xs" src={compraweb} alt="personas" />
					</div>

					<div className="flex flex-col max-w-lg flex-0 center text-xl text-green-300 justify-center">
						<p lassName="flex justify-content-center align-items-center">
							Una app móvil es una herramienta poderosa que puedes usar para promocionar tu negocio y
							llegar a nuevos clientes.
						</p>
						<p lassName="flex justify-content-center align-items-center">Se estima que las ventas crecen entre veinte y cincuenta porciento en el primer año</p>
					</div>
				</div>

				<div className="flex flex-col flex-wrap items-center md:flex-col justify-between m-4">
					<div className="flex center p-3">
						<img className="max-w-xs" src={crecer} alt="personas" />
					</div>

					<div className="flex flex-col max-w-lg flex-0 center text-xl m-4 max-w-sm text-green-300 justify-center">
						<p className="flex justify-content-center align-items-center">Las apps móviles pueden ayudarte a:</p>
						<ul className="list-image-[url(checkmark.png)]  justify-content-center align-items-center">
							<li>
								<p>Llegar a nuevos clientes</p>
							</li>
							<li>
								<p>Promocionar tus productos o servicios</p>
							</li>
							<li>
								<p>Crear una comunidad</p>
							</li>
							<li>
								<p>Mejorar la lealtad de los clientes</p>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex flex-col flex-wrap items-center max-w-sm md:flex-col justify-between m-4">
					<div className="flex center p-3">
						<img className="max-w-xs" src={money} alt="personas" />
					</div>

					<div className="flex flex-col max-w-lg flex-0 center text-xl text-green-300 p-9">
						<p className="flex justify-content-center align-items-center">
							¿Quieres que tu negocio crezca? Si no te lo tomas en serio, tu competencia sí lo hará.
							Contáctanos hoy mismo para obtener un presupuesto y empezar a crecer
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Paraquien;
