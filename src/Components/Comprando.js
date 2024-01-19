import * as React from 'react';

const Comprando = () => {
	const redirectToStripe = () => {
		// Redirect to the specified URL when the button is clicked
		window.location.href = 'https://buy.stripe.com/14k3eS1riepVc48aEF';
	};

	return (
		<section className="flex flex-col w-full min-h-full text-center items-center flex">
			<div className="flex mb-8 mt-8 flex flex-col justify-center items-center">
				<h1 className="mb-8 text-lg font-normal  p-4 ">Una vez que realices el pago: </h1>
				<ul className="p-4 flex flex-col justify-center items-center">
					<li className="mb-4">
						<p className="">
							Me voy a poner en contacto contigo via e-amil y agendaremos una llamada.
						</p>
					</li>
					<li className="mb-4">
						<p className="">En solo 2 semanas, tendrás una maqueta de tu nueva página web</p>
					</li>
					<li className="mb-4">
						<p className="">
							Al final del mes, tu página estará online. ¡Ya no perderas tiempo y podras enfocarte en
							hacer crecer tu negocio!
						</p>
						<p>Si todavia no estas seguro podes hacerme cualquer consulta via email, o tenemos un encuentro online</p>
					</li>
				</ul>
				<p className="mb-8 font-normal p-4 sm:px-16 lg:px-48">
					Una landing page con formulario de contacto, y sincronizacion con redes por solo 950 Euros
				</p>
				<p> ¡Pero apúrate! Los primeros 10 clientes lo obtendrán por solo 750 euros./</p>
			</div>
			<div className="flex sm:w-3-10 py-2 justify-center items-center&quot;">
				{' '}
				<button
					className="flex justify-center flex-grow-1 text-xl items-center py-3 px-5 font-medium text-gray-200 rounded-lg border-2 hover:bg-red-400 hover:ring-4 hover:ring-red-400 bg-red-500 bm-5"
					onClick={redirectToStripe} // Call the redirectToStripe function when the button is clicked
				>
					¡Comprar mi Landing Page!{' '}
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
			</div>
		</section>
	);
};
export default Comprando;
