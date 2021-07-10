import React from 'react';

import '../Form/styles.css'

const Form = () => {
  return (
    <div className='formulario'>
      <h1 className='titulo-form'>Deixe aqui seu comentário!</h1>
      <form >
        <input type="text" name="name" placeholder="Digite o seu nome" />
        <input type="email" name="email" placeholder="Digite o seu e-mail" />
        <input type="text" name="message" placeholder="Mensagem" />
        <div>
        <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form