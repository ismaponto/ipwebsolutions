import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// import card from './jumbotron/card-svgrepo-com.svg';
// import microphone from './jumbotron/microphone1-broadcasting-svgrepo-com.svg';
// import clock from './jumbotron/clock-svgrepo-com.svg';
// import setting from './jumbotron/setting-setting-svgrepo-com.svg';

const Jumbotron = () => {
	return (
		<section className=" flex-col w-full py-4 	 ">
			<NavigationBar />
			<div className="flex flex-col items-center w-full  mx-auto max-w-screen-xl mb-2 ">
				<div class="flex flex-row flex-wrap">
					<h1 class="flex max-w-sm mb-2 justify-around text-2xl text-start tracking-tight p-8 md:text-5xl text-4xl">
						CatalystWeb <br />Solutions
					</h1>

					<div class="rounded-lg  flex-1">
						<p class="mb-2 text- max-w-lg font-normal p-8">
							Hola, me llamo Ismael Pontoriero y soy el fundador de CatalystWeb.
							<br />
							 Mi enfoque es resolver problemas a
							través de la informática y el diseño web. Nos especializamos en crear sitios web modernos y
							atractivos con las últimas tecnologías para garantizar calidad y una experiencia óptima.
						</p>
					</div>
				</div>

				{/* <div className='flex flex-col self-center shadow-md items-center  w-full'>
					<div className="text-vanilla 	 text-center list-none flex flex-wrap items-start">
						<div>
							<div className="mb-4 flex max-w-xs flex-col  rounded-xl items-center  m-4">
								<img src={microphone} alt="visibility" className="w-32" />
								<p className=" w-full p-2 rounded ">Aumentar tu visibilidad online</p>
							</div>
							<div className="mb-4 flex  max-w-xs flex-col  rounded-xl items-center  m-4">
								<img src={card} alt="leads" className="w-32" />
								<p className=" w-full p-2 rounded ">Generar más leads y ventas</p>
							</div>
						</div>
						<div>
							<div className="mb-4 flex  max-w-xs flex-col  rounded-xl items-center  m-4">
								<img src={setting} alt="automatizacion" className="w-32" />
								<p className=" w-full p-2 rounded ">Automatizar tareas repetitivas</p>
							</div>
							<div className="mb-4 flex  max-w-xs flex-col  rounded-xl items-center m-4 ">
								<img src={clock} alt="time" className="w-32" />
								<p className=" w-full p-2 rounded ">Ahorrar tiempo y dinero</p>
							</div>
						</div>
					</div>

					<p className="m-2 text-lg font-normal text-vanilla lg:text-2xl sm:px-16 lg:px-48">
						Te ayudo a crear una solución digital personalizada que se adapte a las necesidades de tu
						negocio
					</p>
				</div> */}

				<div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 p-9">
					<Link
						to="/comprando"
						className="inline-flex justify-center text-xl items-center py-3 px-5 font-medium text-vanilla rounded-lg bg-matcha  hover:bg-pistache hover:ring-4 hover:ring-pistache dark:focus:ring-pistache m-8"
					>
						Quiero mi Página Web
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
