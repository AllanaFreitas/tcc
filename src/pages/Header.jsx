import React, { useState } from 'react';
import iconeJanela from '../public/iconeJanela.png'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <img src={iconeJanela} alt="" />
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-space-blue hover:text-dark-bluu">Inicio</a>
          <a href="#funcionamento" className="text-space-blue hover:text-dark-bluu">Funcionamento</a>
          <a href="#materias" className="text-space-blue hover:text-dark-bluu">Materiais</a>
          <a href="#bibliografia" className="text-space-blue hover:text-dark-bluu">Referencias</a>
          <a href="#integrantes" className="text-space-blue hover:text-dark-bluu">Integrantes</a>
          

        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="text-space-blue hover:text-dark-bluu py-2">Inicio</a>
          <a href="#services" className="text-space-blue hover:text-dark-bluu py-2">Funcionamento</a>
          <a href="#about" className="text-space-blue hover:text-dark-bluu py-2">Materiais</a>
          <a href="#contact" className="text-space-blue hover:text-dark-bluu py-2">Referencias</a>
          <a href="#integrantes" className="text-space-blue hover:text-dark-bluu">Integrantes</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;