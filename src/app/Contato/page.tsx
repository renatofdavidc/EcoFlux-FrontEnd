import "./Contato.css"

const Contato = () => {
    return (
        <>
                <div className="content">
                    <div className="titulo_pagina">
                        <h1>Contatos</h1>
                    </div>
                    <div className="contato_wrapper">
                        <div className="quadros_contato">
                            <section id="quadro_linkcar">
                                <h4>Contatos LinkCar:</h4>
                                <div className="imagem_telefone">
                                    <img src="/img/vaisantos.png" alt="telefone" /> (11)97210-8084
                                </div>
                                <div className="imagem_email">
                                    <img src="/img/peixao.png" alt="e-mail" /> renatofdavidc@gmail.com
                                </div>
                            </section>
                            <section id="quadro_porto">
                                <h4>Contatos Porto: </h4>
                                <div className="imagem_telefone">
                                    <img src="/img/vaisantos.png" alt="telefone" /> (11)3003-9303
                                </div>
                                <div className="imagem_email">
                                    <img src="/img/peixao.png" alt="e-mail" /> portoseguro@gmail.com
                                </div>
                            </section>
                        </div>
                        <div id="imagem_carrinho">
                            <img src="/img/carrinho.png" alt="Imagem de um carrinho" />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Contato;
