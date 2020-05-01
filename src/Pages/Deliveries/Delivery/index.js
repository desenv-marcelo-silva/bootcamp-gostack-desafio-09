import React from 'react';
import history from '~/services/history';

import { Container } from './styles';

export default function Delivery() {
  return (
    <Container>
      <h1>Entregas</h1>
      <button type="button" onClick={() => history.goBack()}>
        Voltar
      </button>
    </Container>
  );
}
