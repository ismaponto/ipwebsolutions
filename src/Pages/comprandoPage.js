import React, { useEffect, useState } from 'react';
import Comprando from '../Components/Comprando';
import Footer from '../Components/Footer';
import imgUrl from '../Components/background/leaves.webp';
import NavigationBar from '../Components/NavigationBar';

function LandingPage() {
	const [ gradient, setGradient ] = useState('linear-gradient(to right, #91D5D3, rgba(0, 128, 128, 0.8))');

	useEffect(() => {
		const handleMouseMove = (e) => {
			const color1 = `#91D5D3 `;
			const color2 = `rgba(0, 128, 128, 0.8)`;
			const color = `#91D5D3`;
			const color2trans = `rgba(0, 128, 128, 0.0)`;

			setGradient(`linear-gradient(to right, ${color1}, ${color2})`);
			setGradient(`linear-gradient(to bottom, ${color}, ${color2trans})`);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<div style={{
			backgroundImage: `url(${imgUrl})`
		}}>
			<div
			className={`bg-center bg-no-repeat bg-cover bg-blend-multiply `}
			style={{
				background: gradient,
			}}
		>
			<NavigationBar className="bg-teal-500" />

			<div
				className="flex flex-col center items-center font-manrpe overflow-hidden bg-center bg-repeat bg-blend-multiply"
				style={{}}
			>
				<Comprando />
				<Footer className="w-full" />
			</div>
		</div>
		</div>
		
	);
}

export default LandingPage;
