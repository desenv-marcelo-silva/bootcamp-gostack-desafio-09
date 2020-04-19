import React from 'react';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="FastFeet" />

      <form>
        <label htmlFor="email">seu e-mail</label>
        <input id="email" type="email" placeholder="digite seu e-mail" />
        <label htmlFor="password">Sua senha</label>
        <input id="password" type="password" placeholder="digite sua senha" />

        <button type="submit">Acessar</button>
      </form>
    </>
  );
}
