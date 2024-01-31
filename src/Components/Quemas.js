import React from 'react';
import { useTranslation } from 'react-i18next';
import compraweb from './Paraquien/compraweb.svg';
import crecer from './Paraquien/crecer.svg';
import money from './Paraquien/money.svg';

function Paraquien() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-7xl items-center justify-items-center self-center justify-center rounded-lg md:flex-col pb-4 py-4">
      <h2 className="mb-2 flex flex-col text-center center justify-center text-xl rounded p-2 h-36">
        {t('paraquien.title')}
      </h2>
      <div className="flex flex-row flex-wrap justify-items-center space-around justify-center w-full">
        <Card image={compraweb} title={t('card1.title')} description={t('card1.description')} />
        <Card image={crecer} title={t('card2.title')} description={t('card2.description')} />
        <Card image={money} title={t('card3.title')} description={t('card3.description')} />
      </div>
    </div>
  );
}

// Componente para una tarjeta individual
const Card = ({ image, title, description }) => (
  <div className="flex flex-col flex-wrap border items-center md:flex-col justify-between self-center md:max-w-sm max-w-xs p-1 text-center m-4 bg-opacity-50 border-gray-200 rounded-lg md:p-9">
    <div className="flex center p-3">
      <img className="md:max-w-xs h-48" src={image} alt="personas" />
    </div>
    <div className="flex flex-col max-w-lg rounded flex-0 center text-xl text-gray-900 justify-center">
      <p className="flex h-10 justify-center items-center font-bold mb-4"> {title} </p>
      <p className="flex h-56 justify-center items-center"> {description} </p>
    </div>
  </div>
);

export default Paraquien;
