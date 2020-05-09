import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import initials from 'initials';
import { toast } from 'react-toastify';

import api from '../../services/api';

import TableDeliveryman from './TableDeliveryman';
import TitleActiveWork from '~/components/TitleActiveWork';

import { Container, TopoForm } from './styles';

export default function Deliveryman() {
  const [data, setData] = useState([]);

  async function loadDeliveryman() {
    const response = await api.get('/deliveryman');

    const dataDeliveryman = response.data.map((item) => ({
      ...item,
      initial: initials(item.name).substring(0, 2),
    }));

    setData(dataDeliveryman);
  }

  useEffect(() => {
    loadDeliveryman();
  }, []);

  async function handleDeleteDeliveryman(id) {
    try {
      await api.delete(`/deliveryman/${id}`);
      await loadDeliveryman();
      toast.success('O entregador foi excluído com sucesso.');
    } catch (error) {
      if (error.response) {
        const message =
          error.response.data.error || 'O entregador não pôde ser excluído.';
        if (error.response.status === 400) {
          toast.warn(message, {
            hideProgressBar: false,
            pauseOnHover: false,
          });
        }
      } else {
        toast.error('O entregador não pôde ser excluído.');
      }
    }
  }

  return (
    <Container>
      <TitleActiveWork title="Gerenciando entregadores" />
      <TopoForm>
        <Form onSubmit={() => {}}>
          <div>
            <span>
              <MdSearch />
            </span>
            <Input
              type="text"
              name="filtro"
              placeholder="Buscar por entregadores"
            />
          </div>
        </Form>

        <Link to="/deliverymen/0">
          <MdAdd />
          <span>CADASTRAR</span>
        </Link>
      </TopoForm>

      <TableDeliveryman
        dataTable={data}
        handleDelete={handleDeleteDeliveryman}
      />
    </Container>
  );
}
