import "./Registrar_Carro.css";

const RegistrarCarro = () => {
    return (
        <>
                <div className="container_registro">
                    <div className="titulo_pagina">
                        <h1>Registrar carro</h1>
                    </div>
                    <div className="form_imagem_wrapper">
                        <div className="quadro_registro">
                            <section id="texto_explicacao">
                                <p><strong>Registre seu carro em nosso sistema, para que quando tiver problemas, possamos dar um diagnóstico detalhado.</strong></p>
                                <p><strong>Caso deseje este serviço, preencha o formulário abaixo com as informações do seu veículo:</strong></p>
                            </section>
                            <form action="" id="form_registro">
                                <label htmlFor="marca">Marca: </label>
                                <select name="marca" id="select_marca" required>
                                    <option value="">Audi</option>
                                    <option value="">BMW</option>
                                    <option value="">Chery</option>
                                    <option value="">Chevrolet</option>
                                    <option value="">Citroën</option>
                                    <option value="">Fiat</option>
                                    <option value="">Ford</option>
                                    <option value="">Honda</option>
                                    <option value="">Hyundai</option>
                                    <option value="">Jeep</option>
                                    <option value="">Kia</option>
                                    <option value="">Land Rover</option>
                                    <option value="">Lexus</option>
                                    <option value="">Mercedes-Benz</option>
                                    <option value="">Mitsubishi</option>
                                    <option value="">Nissan</option>
                                    <option value="">Peugeot</option>
                                    <option value="">Renault</option>
                                    <option value="">Suzuki</option>
                                    <option value="">Toyota</option>
                                    <option value="">Volkswagen</option>
                                    <option value="">Volvo</option>
                                </select>
                                <br />
                                <label htmlFor="modelo">Modelo:</label>
                                <input type="text" name="modelo" id="modelo" required />
                                <br />
                                <label htmlFor="ano">Ano de Fabricação:</label>
                                <input type="number" name="ano" id="ano" required />
                                <br />
                                <label htmlFor="chassi">Chassi:</label>
                                <input type="text" name="chassi" id="chassi" required />
                                <br />
                                <label htmlFor="placa">Placa</label>
                                <input type="text" name="placa" id="placa" required />
                                <label htmlFor="cor">Cor:</label>
                                <input type="color" name="cor" id="cor" />
                                <div className="botao_enviar">
                                    <input type="submit" name="enviar" id="enviar" value="Registrar" />
                                </div>
                            </form>
                        </div>
                        <div className="civic">
                            <img src="/img/civicao.png" alt="Imagem do carro" />
                        </div>
                    </div>
                </div>
        </>
    )
}

export default RegistrarCarro;
