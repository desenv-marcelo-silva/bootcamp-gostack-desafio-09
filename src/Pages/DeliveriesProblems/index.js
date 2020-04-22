import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import TableProblem from './TableProblem';
import TitleActiveWork from '~/components/TitleActiveWork';

import { Container } from './styles';

export default function DeliveriesProblems() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblem() {
      const response = await api.get('/deliveryproblems');

      setData(response.data);
    }

    loadDeliveryProblem();
  }, []);

  return (
    <Container>
      <TitleActiveWork title="Problemas na entrega" />
      <TableProblem dataTable={data} />
    </Container>
  );
}
