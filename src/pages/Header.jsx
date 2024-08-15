import React from 'react'
import IconeJanela from '../public/IconeJanela.png'

export default function Header() {
  return (
    <div>
        <img src={IconeJanela} class='' alt="icone janela logotipo" />
       
        <header>
                <nav className=' justify-content flex items-center justify-between px 2.5 py-5'>
                        <ul className=''>
                                <li><a href="">Início</a></li>
                                <li><a href="">Funcionamento</a></li>
                                <li><a href="">Materiais</a></li>
                                <li><a href="">Referências</a></li>
                                <li><a href="">Integrantes</a></li>
                        </ul>
                </nav>
        </header>
    </div>
  )
}
