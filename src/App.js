import './App.css';

import React from "react";

import NavigationBar from "./Components/NavigationBar"
import Jumbotron from './Components/Jumbotron';
// import HighStrategy from "./Components/HighStrategy"
import Paraquien from './Components/Paraquien';

import CasosdeExito from "./Components/CasosdeExito"
import Stats from './Components/Stats';
// import Contacto from "./Components/Contacto"
import Footer from "./Components/Footer"
// import SoyMatias from './Components/soymatias';
import ListaEmail from './Components/ListaEmail';
import imgUrl from "./Components/background/leaves.webp"

function App() {
    return (<div className="App font-manrope overflow-hidden bg-center bg-repeat bg-blend-multiply"
    style={{
      backgroundImage: `url(${imgUrl})`,
    }} > 
{/* <Contacto /> */}
<NavigationBar /> 
    <Jumbotron />
{/* <HighStrategy  /> */}
<Paraquien  />
<CasosdeExito />
<ListaEmail />
{/* <SoyMatias /> */}
<Stats />


<Footer />
        </div>
    );
}

export default App;