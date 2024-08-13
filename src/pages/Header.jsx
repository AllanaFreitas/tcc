import React from 'react'
import IconeJanela from '../public/IconeJanela.png'

export default function Header() {
  return (
    <div>
        <img src= {IconeJanela} alt="icone janela do" width={170} />
        
        <div>
        </div>
        
        <nav className='text-space-blue font-kulim'>  
        <ul>
            <a href="">Inicio</a>
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
