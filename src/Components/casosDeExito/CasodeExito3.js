import React from 'react';
import imgpersona from './img/persona1.jpg';

function CasodeExito1() {
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<img className="rounded-t-lg" src={imgpersona} alt="Imagen de persona" />
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold font-manrope tracking-tight text-gray-900 dark:text-white">
					{' '}
					Viettro Consulting{' '}
				</h5>

				<p className="mb-3 font-normal  font-manrope text-gray-700 dark:text-emerald-400">
					{' '}
					Matias Viettro: Necesitaba una pagina que le de entidad a mi empresa y respaldo.Ahora tengo una con
					un estilo profesional y funcional desde la primer semana.El trabajo de SEO y posicionamiento de IP
					me ayudo a conseguir nuevos clientes en las zonas donde enfocamos el negocio{' '}
				</p>
			</div>{' '}
		</div>
	);
}

export default CasodeExito1;
