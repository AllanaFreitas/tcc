import React from "react"
import Arduino from '../public/arduino.png'
import Chuva from '../public/sensor_chuva.png'


function Materiais() {
  return (
    <div>
        

        <h1 className="font-kulim text-orange text-6xl font-bold text-center">Materiais</h1>
        <br />
        <p className="font-kulim text-dark-blue font-bold text-2xl text-center">Contamos os principais materias para fazer </p>
        <p className="font-kulim text-dark-blue font-bold text-2xl text-center">o projeto funcionar e a base dele.</p>
        <br />

        <section className='w-screen px-4 py-5 flex justify-content align-items'>
            <img src= {Arduino} alt="Placa arduino"  />
            <br />
            <div className=''>
                <h2 className='font-kulim text-dark-blue text-4xl font-bold text-right'>Arduino</h2>
                <p className='font-kulim  font-bold text-2xl text-right'>Arduino é uma plataforma programável </p>
                <p className='font-kulim  font-bold text-2xl text-right' >de prototipagem eletrônica de placa única e </p>
                <p className='font-kulim  font-bold text-2xl text-right'>hardware livre, que permite aos usuários criar </p>
                <p className='font-kulim  font-bold text-2xl text-right'>objetos eletrônicos interativos e independentes. </p>
                <p className='font-kulim  font-bold text-2xl text-right'>O preço gira em torno de R$50,00.</p>
            </div>
        </section>

        <section className='w-screen px-4 py-5 flex justify-content align-items'>
            <div className=''>
                <h2 className='font-kulim text-dark-blue text-4xl font-bold'>Sensor de chuva</h2>
                <p className="font-kulim font-bold  text-2xl">Este Sensor de Chuva pode ser usado para </p>
                <p className="font-kulim font-bold  text-2xl">monitorar uma variedade de condições </p>
                <p className="font-kulim font-bold  text-2xl">climáticas como gotas de chuva ou neve. </p>
                <p className="font-kulim font-bold  text-2xl">Quando o clima está seco a saída do sensor fica</p>
                <p className="font-kulim font-bold  text-2xl"> em estado alto e quando há uma gota de chuva, </p>
                <p className="font-kulim font-bold  text-2xl">  a saída fica em estado baixo. O preço gira em  </p>
                <p className="font-kulim font-bold  text-2xl">torno de R$9,00 ou R$10,00 junto com o comparador.</p> 
                <img src={Chuva} alt=""  width={400} className=""/>
            </div>
        </section>
    </div>
  )
}

export default Materiais