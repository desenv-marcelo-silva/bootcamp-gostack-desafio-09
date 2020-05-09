import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';

import TableProblem from './TableProblem';
import TitleActiveWork from '~/components/TitleActiveWork';

import { Container } from './styles';

export default function DeliveriesProblems() {
  const [data, setData] = useState([]);

  async function loadDeliveryProblem() {
    const response = await api.get('/deliveryproblems');

    setData(response.data);
  }

  useEffect(() => {
    loadDeliveryProblem();
  }, []);

  async function handleCancelProblem(id) {
    try {
      await api.delete(`/deliveryproblems/${id}/cancel-delivery`);
      toast.sucess('A encomenda foi cancelada com sucesso.');
      await loadDeliveryProblem();
    } catch (error) {
      const message =
        error.response.data.error || 'A encomenda não pôde ser cancelada.';
      if (error.response.status === 400) {
        toast.warn(message, {
          hideProgressBar: false,
          pauseOnHover: false,
        });
      } else {
        toast.error(message);
      }
    }
  }

  return (
    <Container>
      <TitleActiveWork title="Problemas na entrega" />
      <TableProblem dataTable={data} handleDelete={handleCancelProblem} />
    </Container>
  );
}
