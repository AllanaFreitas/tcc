import React from 'react'
import robohome from '../public/robohome.png'
import Pebble from '../public/Pebble.png'

export default function Home() {
  return (
    <div>
        <section className='flex flex-col items-center'>
          <h1 className='font-kulim text-dark-blue text-6xl ,font-bold, text-center, font-bold '>
            Venha Conhecer 
          </h1>
          <h1 className='font-kulim text-dark-blue text-6xl ,font-bold, text-center, font-bold '>a janela inteligente!</h1>
          <br />
          <br />

        <button className='rounded-full bg-orange py-5 px-10 font-kulim'>SAIBA MAIS</button> 
          <img src= {robohome} alt="" width={300} className='mt-7'/>
        </section>
        


        <section className='mt-14 flex flex-col items-center'>
          <h1 className='font-kulim text-orange text-6xl font-bold'>Qual o nosso </h1>
          <h1 className='font-kulim text-orange text-6xl font-bold'>diferencial?</h1>
          <br />

          <p className='font-kulim italic text-text-spaceblue font-bold font-2xl'>Nossa Smart Window (Janela Inteligente) oferece a segurança que a sua residência!</p>
          <br />

          <p className='font-kulim font-bold text-2xl'>Oferecemos segurança e tecnologia à sua casa, para proteger de fortes chuvas, umidade, <br /> fumaça e também substâncias tóxicas pelo ar, simplesmente usando o sistema Arduino, onde <br /> o projeto irá identificar umidade ao redor e fumaça para automaticamente fechar a janela.</p>
          <br />
      
          <img src= {Pebble} className='mx-20' alt="" />
        </section>
    </div>
  )
}
