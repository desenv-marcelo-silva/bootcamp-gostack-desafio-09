import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdSearch, MdAdd } from 'react-icons/md';
import { DebounceInput } from 'react-debounce-input';

import initials from 'initials';

import api from '../../services/api';

import TableDelivery from './TableDelivery';

import TitleActiveWork from '~/components/TitleActiveWork';

import { Container, TopoActionArea, ContainerComplete } from './styles';

export default function Deliveries() {
  const [data, setData] = useState([]);
  const [filtro, setFiltro] = useState('');

  function getStatusColor(status) {
    switch (status.trim().toLowerCase()) {
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
        initial: initials(item.Deliveryman.name).substring(0, 2),
        statusColor: getStatusColor(item.status),
      }));

      setData(dataDeliveries);
    }

    loadDeliveries();
  }, []);

  async function deleteDelivery(id) {
    try {
      await api.delete(`packages/${id}`);
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
      return true;
    } catch {
      return false;
    }
  }

  useEffect(() => {
    async function searchDelivery() {
      const response = await api.get(`deliverypacks/deliveries?q=${filtro}`);

      const dataDeliveries = response.data.map((item) => ({
        ...item,
        initial: initials(item.Deliveryman.name).substring(0, 2),
        statusColor: getStatusColor(item.status),
      }));

      setData(dataDeliveries);
    }

    searchDelivery();
  }, [filtro]);

  return (
    <Container>
      <TitleActiveWork title="Gerenciando encomendas" />
      <TopoActionArea>
        <ContainerComplete>
          <span>
            <MdSearch />
          </span>
          <DebounceInput
            minLength={3}
            debounceTimeout={300}
            placeholder="Buscar por encomendas"
            onChange={(e) => setFiltro(e.target.value)}
          />
        </ContainerComplete>

        <Link to="/delivery/0">
          <MdAdd />
          <span>CADASTRAR</span>
        </Link>
      </TopoActionArea>

      {data.length > 0 ? (
        <TableDelivery dataTable={data} handleDelete={deleteDelivery} />
      ) : (
        <h3>Nenhum registro encontrado</h3>
      )}
    </Container>
  );
}
