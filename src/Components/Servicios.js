import React from 'react';
import { useTranslation } from 'react-i18next';
import lupa from './Servicios/lupa.svg';
import ojo from './Servicios/ojo.svg';
import pc from './Servicios/pc.svg';
import smart from './Servicios/smart.svg';
import ux from './Servicios/ux.svg';
import animation from './Servicios/animation.svg';

const Servicios = () => {
  const { t } = useTranslation();

  return (
    <div className="contenedor-servicios flex flex-row flex-wrap w-full m-4 items-center max-w-7xl shadow-md justify-items-center self-center w-full">
      <h2 className="mb-2 flex bg-red-200 flex-col text-center center justify-center w-full text-xl h-36">
        {t('servicios.title')}
      </h2>
      <TarjetaServicio titulo={t('servicios.desarrollo.titulo')} descripcion={t('servicios.desarrollo.descripcion')} image={pc} />
      <TarjetaServicio titulo={t('servicios.uiux.titulo')} descripcion={t('servicios.uiux.descripcion')} image={ux} />
      <TarjetaServicio titulo={t('servicios.identidad.titulo')} descripcion={t('servicios.identidad.descripcion')} image={ojo} />
      <TarjetaServicio titulo={t('servicios.seo.titulo')} descripcion={t('servicios.seo.descripcion')} image={lupa} />
      <TarjetaServicio titulo={t('servicios.responsive.titulo')} descripcion={t('servicios.responsive.descripcion')} image={smart} />
      <TarjetaServicio titulo={t('servicios.animaciones.titulo')} descripcion={t('servicios.animaciones.descripcion')} image={animation} />
    </div>
  );
};

const TarjetaServicio = ({ titulo, descripcion, image }) => {
  return (
    <div className="tarjeta-servicio flex flex-col m-4 max-w-sm">
      <img src={image} alt={titulo} className=" self-center" />
      <h3 className="justify-start"> {titulo} </h3>
      <p> {descripcion} </p>
    </div>
  );
};

export default Servicios;
