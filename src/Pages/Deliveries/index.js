import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';

import initials from 'initials';

import TableDelivery from './TableDelivery';
import TitleActiveWork from '../../components/TitleActiveWork';
import { Container, TopoForm } from './styles';

const dataTab = [
  {
    status: 'Cancelada ',
    id: 1,
    product: 'Garrafa térmica 1L',
    start_date: null,
    canceled_at: null,
    end_date: null,
    signature_id: null,
    Recipient: {
      regiao_referencia: 'Vila Betânia - São José dos Campos/SP',
      name: 'Aline Mendonca',
      bairro: 'Vila Betânia',
      cidade: 'São José dos Campos',
      estado: 'SP',
    },
    Deliveryman: {
      name: 'Aaron Rodgers',
    },
  },
  {
    status: 'Pendente  ',
    id: 2,
    product: 'Garrafa térmica 1L',
    start_date: null,
    canceled_at: null,
    end_date: null,
    signature_id: null,
    Recipient: {
      regiao_referencia: 'Vila Betânia - São José dos Campos/SP',
      name: 'Aline Mendonca',
      bairro: 'Vila Betânia',
      cidade: 'São José dos Campos',
      estado: 'SP',
    },
    Deliveryman: {
      name: 'Aaron Rodgers',
    },
  },
  {
    status: 'Retirada  ',
    id: 3,
    product: 'Garrafa térmica 1L',
    start_date: null,
    canceled_at: null,
    end_date: null,
    signature_id: null,
    Recipient: {
      regiao_referencia: 'Vila Betânia - São José dos Campos/SP',
      name: 'Aline Mendonca',
      bairro: 'Vila Betânia',
      cidade: 'São José dos Campos',
      estado: 'SP',
    },
    Deliveryman: {
      name: 'Aaron Rodgers',
    },
  },
  {
    status: 'Entregue  ',
    id: 4,
    product: 'Garrafa térmica 1L',
    start_date: null,
    canceled_at: null,
    end_date: null,
    signature_id: null,
    Recipient: {
      regiao_referencia: 'Vila Betânia - São José dos Campos/SP',
      name: 'Aline Mendonca',
      bairro: 'Vila Betânia',
      cidade: 'São José dos Campos',
      estado: 'SP',
    },
    Deliveryman: {
      name: 'Aaron Rodgers',
    },
  },
];

export default function Deliveries() {
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

  const data = dataTab.map((item) => ({
    ...item,
    initial: initials(item.Deliveryman.name),
    statusColor: getStatusColor(item.status),
  }));

  return (
    <Container>
      <TitleActiveWork title="Gerenciando encomendas" />
      <TopoForm>
        <Form onSubmit={() => {}}>
          <div>
            <span>
              <MdSearch />
            </span>
            <Input
              type="text"
              name="filtro"
              placeholder="Busca por encomendas"
            />
          </div>
        </Form>

        <button type="button">
          <MdAdd />
          <span>CADASTRAR</span>
        </button>
      </TopoForm>

      <TableDelivery dataTable={data} />
    </Container>
  );
}
