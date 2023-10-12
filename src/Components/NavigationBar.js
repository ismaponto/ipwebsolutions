import React, { useState } from 'react';

function NavigationBar() {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="border-teal-500">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="#Contacto" className="flex items-center">
					{/* <img rel="icon" type="image/png" src={logo} className="h-48" alt="logo"/> */}
					<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-200" />
				</a>
				<button
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-emerald-400 rounded-lg md:hidden hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200 dark:text-emerald-400 dark:hover:bg-teal-700 dark:focus:ring-teal-600"
					onClick={toggleMenu}
				>
					<span className="sr-only">Open main menu</span>
					<svg
						className="w-5 h-5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 17 14"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M1 1h15M1 7h15M1 13h15"
						/>
					</svg>
				</button>
				<div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-teal-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-teal-800 md:dark:bg-teal-900 dark:border-teal-700">
						<li className=" rounded p-2">
							<a
								href="#metodo"
								className="block py-2 pl-3 pr-4 text-gray-50  rounded hover:text-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-200 md:dark:hover:text-emerald-4000 dark:hover:bg-teal-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent"
							>
								Ventajas
							</a>
						</li>
						<li className=" rounded p-2">
							<a
								href="#servicio"
								className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:text-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-200 md:dark:hover:text-emerald-4000 dark:hover:bg-teal-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent"
							>
								Servicios
							</a>
						</li>
						<li className=" rounded p-2">
							<a
								href="#exito"
								className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:text-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-200 md:dark:hover:text-emerald-4000 dark:hover:bg-teal-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent"
							>
								Otros clientes
							</a>
						</li>
						<li className=" rounded p-2">
							<a
								href="#contacto"
								className="block py-2 pl-3 pr-4 text-gray-50 rounded hover:text-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-gray-700 md:p-0 dark:text-gray-200 md:dark:hover:text-emerald-4000 dark:hover:bg-teal-700 dark:hover:text-gray-200 md:dark:hover:bg-transparent"
							>
								Contactame
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default NavigationBar;
