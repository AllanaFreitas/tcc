import React from 'react'
import IconeJanela from '../public/IconeJanela.png'

export default function Header() {
  return (
    <div>
        <img src={IconeJanela} class='h-16 w- ' alt="icone janela logotipo" />
        <section className='text-center'>
        <header >
                <nav>
                        <ul className='display: flex justify-content: space-between  align-items: center'>
                                <li><a href="">Início</a></li>
                                <li><a href="">Funcionamento</a></li>
                                <li><a href="">Materiais</a></li>
                                <li><a href="">Referências</a></li>
                                <li><a href="">Integrantes</a></li>
                        </ul>
                </nav>
        </header>
        </section>
    </div>
  )
}
