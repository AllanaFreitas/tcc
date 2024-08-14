import React from 'react'
import robohome from '../public/robohome.png'

export default function Home() {
  return (
    <div>
        <section className='text-center'>
          <h1 className='font-kulim text-dark-blue text-7xl ,font-bold, text-center '>
            Venha Conhecer 
          </h1>
          <h1 className='font-kulim text-dark-blue text-7xl ,font-bold, text-center '>a janela inteligente!</h1>

          <button><a href="" className=''>Saiba mais</a></button>

          <img src= {robohome} alt="" width={400} className=''/>
        </section>
        


        <section className='text-center'>
          <p className='font-kulim'>2</p>

          <h1 className='font-kulim text-orange text-7xl'>Qual o nosso </h1>
          <h1 className='font-kulim text-orange text-7xl'>diferencial?</h1>

          <p className='font-kulim text-space-blue'>Nossa Smart Window (Janela Inteligente) oferece a segurança que a sua residência!</p>

          <p className='font-kulim'>Oferecemos segurança e tecnologia à sua casa, para proteger de fortes chuvas, umidade, fumaça e também substâncias tóxicas pelo ar, simplesmente usando o sistema Arduino, onde o projeto irá identificar umidade ao redor e fumaça para automaticamente fechar a janela.</p>

          <img src="" alt="" />
        </section>
    </div>
  )
}
