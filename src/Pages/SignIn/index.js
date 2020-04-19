import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido.')
    .required('O e-mail é obrigatório.'),
  password: Yup.string().required('A senha é obrigatória.'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label>seu e-mail</label>
        <Input name="email" type="email" placeholder="digite seu e-mail" />
        <label>Sua senha</label>
        <Input name="password" type="password" placeholder="digite sua senha" />

        <button type="submit">Acessar</button>
      </Form>
    </>
  );
}
