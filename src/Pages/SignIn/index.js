import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit({ email, password }) {}

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form onSubmit={handleSubmit}>
        <label>seu e-mail</label>
        <Input name="email" type="email" placeholder="digite seu e-mail" />
        <label>Sua senha</label>
        <Input name="password" type="password" placeholder="digite sua senha" />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
