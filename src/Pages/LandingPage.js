
import React from 'react';
import '../App.css';
import Jumbotron from '../Components/Jumbotron';
import Paraquien from '../Components/Paraquien';
// import CasosdeExito from "./Components/CasosdeExito"
import Stats from '../Components/Stats';
// import Contacto from "./Components/Contacto"
import Footer from '../Components/Footer';
import ListaEmail from '../Components/ListaEmail';
import imgUrl from '../Components/background/leaves.webp';




function LandingPage() {
	return (
		<div
			className="App font-manrpe overflow-hidden bg-center bg-repeat bg-blend-multiply"
			style={{
				backgroundImage: `url(${imgUrl})`
			}}>

			<Jumbotron />
			<Paraquien />
			{/* <CasosdeExito /> */}
			<ListaEmail />
			<Stats />	
			{/* <Contacto /> */}

			<Footer />
		</div>
	);
}

export default LandingPage;