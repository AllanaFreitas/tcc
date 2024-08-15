import React from 'react' 
import Arduino from '../public/arduino.png'

function Funcionamento() {
  return (
    <div>
       

        <section className=' flex flex-col items-center'>
            <h1 className='font-kulim text-center text-6xl text-orange font-bold'>Funcionamento</h1>
            <br />
            <p className="font-kulim text-center font-bold">Então, o projeto é simplesmente utilizar o sistema Arduino na janela, programando o sistema de funcionamento da janela. A programação que fará a sua janela inteligente funcionar para o seu devido propósito, ou seja, não é nada difícil, basta a PROGRAMAÇÃO e os SENSORES para funcionar devidamente!</p>
            <br />
            <p className="font-kulim text-center font-bold ">1 - Conecte os sensores na sua janela.</p>
            <p className="font-kulim text-center font-bold">2 - Conecte ao Arduino e programe.</p>
            <p className="font-kulim text-center font-bold">3 - Execute o programa da janela.</p>
            <br />
            <img src= {Arduino}   width={400} className='mt-7' alt="" />
        </section>
        
    </div>
  )
}

export default Funcionamento