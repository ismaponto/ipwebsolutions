import React, { useState } from 'react';
import emailimg from './listaEmail/email.svg';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ListaEmail() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const headers = {
        'Access-Control-Allow-Origin': 'https://ipwebsolutions.vercel.app',
    };

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('https://ipwebsolutionback.onrender.com/contacto', data, { headers });
            console.log('Respuesta del servidor:', response.data);
            setSuccessMessage('¡Tu suscripción ha sido confirmada!');
            reset();
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            setErrorMessage('Error al enviar los datos. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="flex flex-col w-full items-center mb-4 md:flex-col">
            <h2 className="mb-2 flex flex-col center bg-teal-500 justify-center w-full text-3xl text-white text-bold h-36">
                Queres estar al tanto de las ofertas?
            </h2>

            <div className="flex flex-row flex-wrap max-w-2xl w-full bg-repeat justify-between lg:flex-wrap">
                <div className="flex flex-col max-w-sm items-center justify-around p-9 md:flex-colm- w-full p-8">
                    <div className="flex center">
                        <img className="max-w-sm -8" src={emailimg} alt="personas" />
                    </div>
                    <div className="flex flex-col max-w-lg flex-0 center text-xl text-green-300 justify-center">
                        <p>Deja tu contacto, y vas a recibir un email para confirmar tu inscripcion.</p>
                        <p>No recibiras mas de un email por quincena, y solo de lunes a viernes!</p>
                    </div>
                </div>
                <div />

                <div className=" flex flex-col max-w-sm inline-flex w-sm m-8 justify-center items-center m-8 mb-5 rounded ">
                    <form className="bg-white p-4 rounded-lg shadow-md" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                                className="form-input mt-1 block w-full"
                            />
                            {errors.email && <p className="text-red-500">El email es requerido y debe ser válido.</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Nombre:</label>
                            <input
                                type="text"
                                {...register('nombre', { required: true })}
                                className="form-input mt-1 block w-full"
                            />
                            {errors.nombre && <p className="text-red-500">El nombre es requerido.</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Apellido:</label>
                            <input
                                type="text"
                                {...register('apellido', { required: true })}
                                className="form-input mt-1 block w-full"
                            />
                            {errors.apellido && <p className="text-red-500">El apellido es requerido.</p>}
                        </div>
                        
                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    
                        <button type="submit" className=" bg-teal-500 text-white font-bold py-2 px-4 rounded-lg">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ListaEmail;
