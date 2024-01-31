import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from './logo/logo500.png';

const Jumbotron = () => {
  const { t } = useTranslation();

  return (
    <section className="flex-col w-full py-4">
      <div className="flex flex-col items-center w-full mx-auto max-w-screen-xl mb-2">
        <div className="flex flex-row flex-wrap aling-items-center justify-items-center">
          <div className="flex flex-row flex-wrap items-center justify-center align-center">
            <img src={logo} alt="red chilies logo" className="flex max-w-xs" />
            <h1 className="max-w-sm justify-around text-2xl text-center tracking-tight p-8 md:text-5xl">
              Calimera <br />Development
            </h1>
          </div>
          <div className="flex mb-2 max-w-lg font-normal justify-items-center justify-around align-items-center p-8">
            <p className="flex mb-2 max-w-lg font-normal justify-items-center justify-around align-items-center p-8">
              {t('jumbotron.intro')}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 p-9">
          <Link
            to="/comprando"
            className="inline-flex justify-center text-xl items-center py-3 px-5 font-medium rounded-lg bg-red-500  hover:bg-red-400 hover:ring-4 hover:ring-red-400 dark:focus:ring-pistache m-8"
          >
            {t('jumbotron.button')}
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
