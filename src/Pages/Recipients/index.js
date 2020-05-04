import React, { useState, useEffect } from 'react';
import { Input, Form } from '@rocketseat/unform';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import TableRecipient from './TableRecipient';
import TitleActiveWork from '~/components/TitleActiveWork';

import { Container, TopoForm } from './styles';

export default function Recipients() {
  const [data, setData] = useState([]);

  useEffect(() => {
    function mountAddress(item) {
      let address = `${item.rua.trim()}`;
      address += item.numero ? `, ${item.numero.trim()}` : '';
      address += item.complemento ? `-${item.complemento.trim()}` : '';
      address += item.bairro ? `, ${item.bairro.trim()}` : '';
      address += item.cidade ? `, ${item.cidade.trim()}` : '';
      address += item.estado ? `/${item.estado}` : '';
      return address;
    }
    async function loadRecipient() {
      const response = await api.get('/recipients');

      const dataRecipient = response.data.map((item) => ({
        ...item,
        endereco: mountAddress(item),
      }));

      setData(dataRecipient);
    }

    loadRecipient();
  }, []);

  return (
    <Container>
      <TitleActiveWork title="Gerenciando destinatários" />
      <TopoForm>
        <Form onSubmit={() => {}}>
          <div>
            <span>
              <MdSearch />
            </span>
            <Input
              type="text"
              name="filtro"
              placeholder="Busca por destinatários"
            />
          </div>
        </Form>

        <Link to="/recipient/0">
          <MdAdd />
          <span>CADASTRAR</span>
        </Link>
      </TopoForm>

      <TableRecipient dataTable={data} />
    </Container>
  );
}
