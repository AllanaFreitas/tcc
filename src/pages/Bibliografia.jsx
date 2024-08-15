import React from "react"
import sensorchuva from '../public/sensor_chuva.png'


function Bibliografia() {
  return (
    <div>
        

        <h2 className="font-kulim text-orange text-5xl font-bold text-center">Referências Bibliográficas</h2>
        <section className="flex flex-col items-center">
        <p className="font-kulim te text-center font-bold text-2xl"><a href="">https://ecoinovar.com.br/cd2017/arquivos/artigos/ECO1729.pdf</a></p>
        <p className="font-kulim text-center font-bold text-2xl"><a href="">https://ric.cps.sp.gov.br/handle/123456789/7407</a></p>
        <p className="font-kulim text-center font-bold text-2xl"><a href="">https://www.youtube.com/watch?v=Qgv7h8H24d0</a></p>

        <img src= {sensorchuva} width={400} alt="" />
        </section>
    </div>
  )
}

export default Bibliografia