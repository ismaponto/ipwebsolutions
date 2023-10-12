import React from "react"
import instagramico from "./ico/instagram.png"
import linkedinico from "./ico/linkedin.png"

function Footer() {
    return (
      <footer className="flex align-items-center rounded-lg shadow m-2 dark:bg-gray-800 p-8 ">
        <div className="mx-auto max-w-screen-xl p-4 sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-emerald-400 pr-2 sm:text-center dark:text-emerald-400">
            © 2023 <a href="#Contacto" className="hover:underline">developed by </a> IP Web Solutions.
          </span>
          <ul className="flex flex-row flex-wrap items-justify-center font-medium text-emerald-400 m-4 dark:text-emerald-400 sm:mt-0">
            <li className=" flex pr-2">
              <a href="https://www.instagram.com/ismaponto/" className="hover:underline">
                <img src={instagramico} alt="Instagram" className="w-8 " />
              </a>
            </li>
            <li className="flex ml-4">
              <a href="https://www.linkedin.com/in/ismael-pontoriero-39122026/" className="mr-4 hover:underline md:mr-6">
                <img src={linkedinico} alt="LinkedIn" className="w-8 " />
              </a>
            </li>
           
          </ul>
        </div>
      </footer>
    );
  }
  
  export default Footer;