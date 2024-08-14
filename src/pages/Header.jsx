import React from 'react'
import IconeJanela from '../public/IconeJanela.png'

export default function Header() {
  return (
    <div>
        <header className='flex'>
                <img src={IconeJanela} className='h-16 w-' alt="icone janela logotipo" />

                <nav>
                        <ul className='flex font-kulim '>
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
