import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';

import TableDelivery from './Table';
import TitleActiveWork from '../../components/TitleActiveWork';
import { Container, TopoForm } from './styles';

export default function Deliveries() {
  const dataTab = [
    {
      status: 'Pendente',
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
  ];

  const headerInfo = [
    'ID',
    'Destinatário',
    'Entregador',
    'Cidade',
    'Estado',
    'Status',
    'Ações',
  ];

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

      <TableDelivery infoHeader={headerInfo} dataTable={dataTab} />
    </Container>
  );
}
