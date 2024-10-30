'use client'

import { useState } from "react";
import "./Perfil.css";

const Perfil = () => {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState<any>(null);

  const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputCep = event.target.value;

    // Remove pontos e traços do CEP
    const cleanedCep = inputCep.replace(/\D/g, ''); // Remove qualquer caractere que não seja dígito
    setCep(inputCep); // Mantém o valor original no campo de entrada

    if (cleanedCep.length === 8) { // Verifica se o CEP tem 8 dígitos após limpeza
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cleanedCep}/json/`);

        if (!response.ok) {
          throw new Error('Erro na consulta do CEP');
        }

        const data = await response.json();
        if (data.erro) {
          setEndereco(null);
          throw new Error('CEP não encontrado');
        }

        setEndereco(data);
      } catch (error) {
        console.error('Erro ao verificar CEP:', error);
        setEndereco({ erro: 'CEP não encontrado ou inválido' });
      }
    } else {
      setEndereco(null);
    }
  };

  return (
    <div className="content">
      <div className="itens_login">
        <section className="quadro_dir">
          <h1 className="titulo_form">Login</h1>
          <form action="" className="form_login">
            <label htmlFor="email_login">Email: </label>
            <input type="text" name="email_login" id="email_login" required />
            <br />
            <label htmlFor="senha_login">Senha: </label>
            <input type="password" name="senha_login" id="senha_login" required />
            <br />
            <div className="botao_enviar">
              <input type="submit" name="enviar" id="enviar" value="Entrar" required />
            </div>
          </form>
        </section>
        <section className="quadro_esq">
          <h1 className="titulo_form">Registrar</h1>
          <form action="" className="form_register">
            <label htmlFor="nome_completo">Nome completo: </label>
            <input type="text" name="nome_completo" id="nome_completo" required />
            <br />
            <label htmlFor="email_register">Email :</label>
            <input type="text" name="email_register" id="email_register" required />
            <br />
            <label htmlFor="cep_register">CEP:</label>
            <input type="text" name="cep_register" id="cep_register" value={cep} onChange={handleCepChange} required />
            <br />
            {endereco && !endereco.erro && (
              <div>
                <p>Endereço: {endereco.logradouro}</p>
                <p>Bairro: {endereco.bairro}</p>
                <p>Cidade: {endereco.localidade} - {endereco.uf}</p>
              </div>
            )}
            {endereco && endereco.erro && <p>{endereco.erro}</p>}
            <label htmlFor="senha_register">Senha:</label>
            <input type="password" name="senha_register" id="senha_register" required />
            <br />
            <label htmlFor="confirmar_senha_register">Confirmar senha:</label>
            <input type="password" name="confirmar_senha_register" id="confirmar_senha_register" required />
            <div className="botao_enviar">
              <input type="submit" name="enviar" id="enviar" value="Registrar" required />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Perfil;