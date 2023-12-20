import React from 'react';
import CasodeExito1 from './casosDeExito/CasodeExito1';
import CasodeExito2 from './casosDeExito/CasodeExito2';
import CasodeExito3 from './casosDeExito/CasodeExito3';

const CasodeExito = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center md:flex-col ">
			<h2 className="mb-2 flex flex-col center  justify-center w-full text-3xl  text-white text-bold dark:text-white h-36 ">
				Algunas paginas que ya hemos desarrollado para clientes satisfechos{' '}
			</h2>
			<div className=" max-w-sm p-5">
				<CasodeExito1 />
			</div>{' '}
			<div className="max-w-sm p-5">
				<CasodeExito2 />
			</div>{' '}
			<div className="max-w-sm p-5">
				<CasodeExito3 />
			</div>{' '}
		</div>
	);
};

export default CasodeExito;
