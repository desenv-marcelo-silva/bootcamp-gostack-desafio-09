import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';

import initials from 'initials';
import api from '../../services/api';

import TableDeliveryman from './TableDeliveryman';
import TitleActiveWork from '~/components/TitleActiveWork';

import { Container, TopoForm } from './styles';

export default function Deliveryman() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get('/deliveryman');

      const dataDeliveryman = response.data.map((item) => ({
        ...item,
        initial: initials(item.name),
      }));

      setData(dataDeliveryman);
    }

    loadDeliveryman();
  }, []);

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
              placeholder="Busca por entregadores"
            />
          </div>
        </Form>

        <button type="button">
          <MdAdd />
          <span>CADASTRAR</span>
        </button>
      </TopoForm>

      <TableDeliveryman dataTable={data} />
    </Container>
  );
}
