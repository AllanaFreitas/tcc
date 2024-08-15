import React from "react"
import nicolasfoto from '../public/nicolas_foto.png'
import joaofoto from '../public/joao_foto.png'
import allana_foto from '../public/allana_foto.png'


function Integrantes() {
  return (
    <div>
        <h1 className="font-kulim text-orange text-6xl font-bold text-center">Integrantes</h1>

        <section className="flex flex-row justify-center mt-5">
          <section className="flex flex-col items-center">
              <img src= {nicolasfoto} className="h-80 w-80" />
              <p className="font-kulim text-2xl font-bold mt-1.5">Nicolas Matheus</p>
          </section>

          <section className="flex flex-col items-center">
              <img src= {joaofoto} className="h-80 w-80" alt="" />
              <p className="font-kulim text-2xl font-bold mt-1.5">João Pedro de Oliveira</p>
          </section>

          <section className="flex flex-col items-center">
              <img src= {allana_foto} className="h-80 w-80" alt="" />
              <p className="font-kulim text-2xl font-bold mt-1.5">Allana Freitas</p>
          </section>
        </section>
        
    </div>
  )
}

export default Integrantes