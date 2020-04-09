import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';

import {
  Container,
  TopoForm,
  DeliveryTable,
  DeliveryCab,
  DeliveryRow,
  DeliveryColumn,
} from './styles';
import TitleActiveWork from '../../components/TitleActiveWork';

export default function Deliveries() {
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

      <DeliveryTable>
        <DeliveryCab>
          <DeliveryColumn>ID</DeliveryColumn>
          <DeliveryColumn>Destinatário</DeliveryColumn>
          <DeliveryColumn>Entregador</DeliveryColumn>
          <DeliveryColumn>Cidade</DeliveryColumn>
          <DeliveryColumn>Estado</DeliveryColumn>
          <DeliveryColumn>Status</DeliveryColumn>
          <DeliveryColumn>Ações</DeliveryColumn>
        </DeliveryCab>
        <DeliveryRow>
          <DeliveryColumn>#01</DeliveryColumn>
          <DeliveryColumn>Ludwig van Beethoven</DeliveryColumn>
          <DeliveryColumn>JD jonh Doe</DeliveryColumn>
          <DeliveryColumn>Rio do Sul</DeliveryColumn>
          <DeliveryColumn>Santa Catarina</DeliveryColumn>
          <DeliveryColumn>* ENTREGUE</DeliveryColumn>
          <DeliveryColumn>...</DeliveryColumn>
        </DeliveryRow>
      </DeliveryTable>
    </Container>
  );
}
