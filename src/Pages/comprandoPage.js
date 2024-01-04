import React from 'react';
import Comprando from '../Components/Comprando';
import Footer from '../Components/Footer';
import NavigationBar from '../Components/NavigationBar';

function LandingPage() {
	return (
		<div>
			<NavigationBar />

			<div className="flex flex-col center items-center font-manrpe overflow-hidden bg-center bg-repeat bg-blend-multiply">
				<Comprando />
				<Footer className="w-full" />
			</div>
		</div>
	);
}

export default LandingPage;
