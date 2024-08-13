import React from 'react'
import Janela from '../pages/Header.jsx'

export default function Header() {
  return (
    <div>
        <img src= {Janela} alt="" />
        
        <div>
        </div>
        <nav className=''>            
            <ul>
                <a href="" className='text-color bg-space-blue,'>Inicio</a>
            </ul>
            <ul>
                <a href="">Funcionamento</a>
            </ul>
            <ul>
                <a href="">Materiais</a>
                
                </ul>
            <ul>
                <a href="">Referencias</a>
            </ul>
            <ul>
                <a href="">Integrantes</a>
            </ul>
        </nav>
    </div>
  )
}
