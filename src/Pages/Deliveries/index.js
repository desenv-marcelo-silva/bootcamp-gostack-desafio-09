import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';

import initials from 'initials';

import api from '../../services/api';

import TableDelivery from './TableDelivery';

import TitleActiveWork from '~/components/TitleActiveWork';
import { Container, TopoActionArea } from './styles';

export default function Deliveries() {
  const [data, setData] = useState([]);

  function getStatusColor(status) {
    switch (status.toLowerCase().trim()) {
      case 'retirada':
        return '#4D85EE';
      case 'entregue':
        return '#2CA42B';
      case 'cancelada':
        return '#DE3B3B';
      default:
        return '#C1BC35'; // pendente
    }
  }

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliverypacks/deliveries');

      const dataDeliveries = response.data.map((item) => ({
        ...item,
        initial: initials(item.Deliveryman.name),
        statusColor: getStatusColor(item.status),
      }));

      setData(dataDeliveries);
    }

    loadDeliveries();
  }, []);

  return (
    <Container>
      <TitleActiveWork title="Gerenciando encomendas" />
      <TopoActionArea>
        <Form onSubmit={() => {}}>
          <div>
            <span>
              <MdSearch />
            </span>
            <Input
              type="text"
              name="filtro"
              placeholder="Buscar por encomendas"
            />
          </div>
        </Form>

        <Link to="/delivery/0">
          <MdAdd />
          <span>CADASTRAR</span>
        </Link>
      </TopoActionArea>

      <TableDelivery dataTable={data} />
    </Container>
  );
}
