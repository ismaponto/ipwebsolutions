import React from 'react';
import Jumbotron from '../Components/Jumbotron';
import Paraquien from '../Components/Paraquien';
// import CasosdeExito from "./Components/CasosdeExito"
import Stats from '../Components/Stats';
// import Contacto from "./Components/Contacto"
import Footer from '../Components/Footer';
// import ListaEmail from '../Components/ListaEmail';
import Servicios from '../Components/Servicios';
function LandingPage() {
	return (
		<div className="App overflow-hidden flex flex-col justify-items-center">
			<Jumbotron />
			<Paraquien /> {/* <CasosdeExito /> */} 
			<Servicios />
			{/* <ListaEmail /> */}
			<Stats /> {/* <Contacto /> */}
			<Footer />
		</div>
	);
}

export default LandingPage;
