import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const ThankYouPage = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.img
        src="/logo500.png"
        alt="Logo"
        className="logo"
        animate={{ rotate: 360 }}  // Aplicamos una rotación continua de 360 grados
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}  // Repetir infinitamente con una duración de 5 segundos y un easing lineal
      />
      <div className="text-container text-center mt-8 z-2">
        <h2 className="text-2xl font-bold mb-4">{t('thankYouMessage')}</h2>
        <p className="text-lg">{t('additionalContent')}</p>
      </div>
    </div>
  );
};

export default ThankYouPage;