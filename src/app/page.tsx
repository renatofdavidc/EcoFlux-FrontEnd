import Link from "next/link"
import "./Home.css"


const Home = () => {
    return (
        <>
            <main>
                    <div className="content">
                        <div className="titulo_pagina">
                            <h1>Home</h1>
                        </div>
                        <div id="quadro_saibamais">
                            <h2>As melhores coberturas para cuidar do seu carro</h2>
                            <span>Com a Porto, você conta com a segurança de assistência 24h, guincho sem limite de km, <br />descontos em estacionamento e muito mais!</span>
                            <br />
                            <div id="botao_saibamais">
                                <Link href="/Seguros">Saiba mais!</Link>
                            </div>
                        </div>
                        <div id="main_content">
                            <section id="quadro_lista">
                                <h1>Por que escolher a LinkCar?</h1>
                                <ul>
                                    <h4>Te conectamos à Porto, para que você tenha:</h4>
                                    <br />
                                    <li className="home-guincho">Guincho ilimitado 24h;</li>
                                    <li>Desconto para estacionamento;</li>
                                    <li>Serviços para o veículo;</li>
                                    <li>Serviços residenciais;</li>
                                    <li>Crédito em app de transporte.</li>
                                </ul>
                            </section>
                            <section id="quadro_servicos">
                                <h1>Nossos serviços</h1><br />
                                <ul>
                                    <li>Conexão com os seguros da Porto;</li>
                                    <li>Possibilidade de registrar seu carro em nosso sitema;</li>
                                    <li>Relatar problemas no seu automóvel para que profissionais certificados te ajudem;</li>
                                    <li>Contato direto com nossos profissionais;</li>
                                    <li>Chatbot exclusivo LinkCar.</li>
                                </ul>
                            </section>
                            <section id="imagem_carros">
                                <img src="/img/carros.png" alt="Carros" />
                            </section>
                        </div>
                    </div>
            </main>
        </>
    );
}

export default Home;