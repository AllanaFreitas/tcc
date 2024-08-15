import React from 'react'
import robohome from '../public/robohome.png'

export default function Home() {
  return (
    <div>
        <section className='text-center'>
          <h1 className='font-kulim text-dark-blue text-6xl ,font-bold, text-center, font-bold '>
            Venha Conhecer 
          </h1>
          <h1 className='font-kulim text-dark-blue text-6xl ,font-bold, text-center, font-bold '>a janela inteligente!</h1>

            <button className=' text-orange-500 hover:text-orange-700 text-white font-bold py-2 px-4 rounded-full'>Saiba Mais</button>

          <img src= {robohome} alt="" width={300} className=''/>
        </section>
        


        <section className='text-center'>
          <p className='font-kulim'>2</p>

          <h1 className='font-kulim text-orange text-7xl font-bold'>Qual o nosso </h1>
          <h1 className='font-kulim text-orange text-7xl font-bold'>diferencial?</h1>

          <p className='font-kulim text-space-blue'>Nossa Smart Window (Janela Inteligente) oferece a segurança que a sua residência!</p>

          <p className='font-kulim'>Oferecemos segurança e tecnologia à sua casa, para proteger de fortes chuvas, umidade, fumaça e também substâncias tóxicas pelo ar, simplesmente usando o sistema Arduino, onde o projeto irá identificar umidade ao redor e fumaça para automaticamente fechar a janela.</p>

          <img src="" alt="" />
        </section>
    </div>
  )
}
