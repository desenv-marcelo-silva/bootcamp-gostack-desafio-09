import React, { useState, useEffect } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import initials from 'initials';
import { toast } from 'react-toastify';

import api from '../../services/api';

import TableDeliveryman from './TableDeliveryman';
import TitleActiveWork from '~/components/TitleActiveWork';

import { Container, TopoForm, ContainerBusca, InputBusca } from './styles';

export default function Deliveryman() {
  const [data, setData] = useState([]);
  const [filtro, setFiltro] = useState('');

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

  useEffect(() => {
    async function loadFilter() {
      const response = await api.get(`/deliveryman?q=${filtro}`);
      const dataDeliveryman = response.data.map((item) => ({
        ...item,
        initial: initials(item.name).substring(0, 2),
      }));

      setData(dataDeliveryman);
    }

    loadFilter();
  }, [filtro]);

  return (
    <Container>
      <TitleActiveWork title="Gerenciando entregadores" />
      <TopoForm>
        <ContainerBusca>
          <span>
            <MdSearch />
          </span>
          <InputBusca
            type="text"
            name="filtro"
            onChange={(e) => setFiltro(e.target.value)}
            placeholder="Buscar por entregadores"
          />
        </ContainerBusca>

        <Link to="/deliverymen/0">
          <MdAdd />
          <span>CADASTRAR</span>
        </Link>
      </TopoForm>

      {data.length > 0 ? (
        <TableDeliveryman
          dataTable={data}
          handleDelete={handleDeleteDeliveryman}
        />
      ) : (
        <h3>Nenhum registro encontrado</h3>
      )}
    </Container>
  );
}
