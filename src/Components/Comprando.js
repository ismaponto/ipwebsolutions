import React from 'react';
import { useTranslation } from 'react-i18next';

const Comprando = () => {
  const { t } = useTranslation();

  const redirectToStripe = () => {
    window.location.href = 'https://buy.stripe.com/14k3eS1riepVc48aEF';
  };

  return (
    <section className="flex flex-col w-full min-h-full text-center items-center flex">
      <div className="flex mb-8 mt-8 flex flex-col justify-center items-center">
        <h1 className="mb-8 text-lg font-normal  p-4 ">{t('paymentSectionTitle')}</h1>
        <ul className="p-4 flex flex-col justify-center items-center">
          <li className="mb-4">
            <p className="">{t('contactEmail')}</p>
          </li>
          <li className="mb-4">
            <p className="">{t('twoWeeksText')}</p>
          </li>
          <li className="mb-4">
            <p className="">{t('endOfMonthText')}</p>
            <p>{t('consultationText')}</p>
          </li>
        </ul>
        <p className="mb-8 font-normal p-4 sm:px-16 lg:px-48">{t('pricingText')}</p>
        <p>{t('hurryUpText')}</p>
        </div>
        <div className="flex sm:w-3-10 py-2 justify-center items-center">
          <button
            className="flex justify-center flex-grow-1 text-xl items-center py-3 px-5 font-medium text-gray-200 rounded-lg border-2 hover:bg-red-400 hover:ring-4 hover:ring-red-400 bg-red-500 bm-5"
            onClick={redirectToStripe}
          >
            {t('buyButton')}
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </section>
    );
  };

  export default Comprando;
