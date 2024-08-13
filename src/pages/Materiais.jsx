function Materiais() {
  return (
    <div>
        <Header />

        <h1>Materiais</h1>

        <section className=''>
            <img src="" alt="" />
            <div className=''>
                <h2 className='font-kulim'>Arduino</h2>
                <p className='font-kulim'>Arduino é uma plataforma programável de prototipagem eletrônica de placa única e hardware livre, que permite aos usuários criar objetos eletrônicos interativos e independentes. O preço gira em torno de R$50,00.</p>
            </div>
        </section>

        <section className=''>
            <div className=''>
                <h2 className='font-kulim'>Sensor de chuva</h2>
                <p className="font-kulim">Este Sensor de Chuva pode ser usado para monitorar uma variedade de condições climáticas como gotas de chuva ou neve. Quando o clima está seco a saída do sensor fica em estado alto e quando há uma gota de chuva, a saída fica em estado baixo.
                O preço gira em torno de R$9,00 ou R$10,00 junto com o comparador.</p>
            </div>
        </section>
    </div>
  )
}

export default Materiais