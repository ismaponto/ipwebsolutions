import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LandingPage from './Pages/LandingPage';
import ComprandoPage from './Pages/comprandoPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingPage />
	},
	{
		path: '/comprando',
		element: <ComprandoPage />
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
<head>
    {/* <!-- Enlace a la hoja de estilos Flowbite --> */}
    {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css" rel="stylesheet" /> */}

    {/* <!-- Preconexión con el dominio de Google Fonts --> */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

    {/* <!-- Enlace a la fuente Kalnia desde Google Fonts --> */}
	<link href="https://fonts.googleapis.com/css2?family=Mina&display=swap" rel="stylesheet" /></head>


      <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
