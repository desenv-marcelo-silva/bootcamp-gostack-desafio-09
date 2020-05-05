/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';

import * as Yup from 'yup';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Topo, FormArea } from './styles';

const CEPRegex = /^[0-9]{2}.[0-9]{3}-[0-9]{3}$/;
const schema = Yup.object().shape({
  name: Yup.string().required('O campo nome é obrigatório.'),
  rua: Yup.string().required('O campo rua é obrigatório.'),
  numero: Yup.string().required('O campo número é obrigatório.'),
  bairro: Yup.string().required('O campo bairro é obrigatório.'),
  cidade: Yup.string().required('O campo cidade é obrigatório.'),
  complemento: Yup.string(),
  estado: Yup.string().required('O campo estado é obrigaório.'),
  cep: Yup.string().matches(CEPRegex),
});

export default function Recipient() {
  const { idRecipient } = useParams();
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    async function load() {
      if (idRecipient > 0) {
        const response = await api.get(`/recipients/${idRecipient}`);
        setRecipient(response.data[0]);
      }
    }

    load();
  }, []);

  // eslint-disable-next-line camelcase
  async function createData(recipientData) {
    try {
      const response = await api.post('recipients', recipientData);

      if (response.data.id > 0) {
        toast.success('Dados gravados com sucesso.');
      }
    } catch (error) {
      toast.error(
        'Não foi possível gravar as informações. Verifique seus dados.'
      );
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }

  // eslint-disable-next-line camelcase
  async function updateData(recipientData) {
    try {
      const response = await api.put(`recipients`, {
        id: idRecipient,
        ...recipientData,
      });
      if (response.data.id > 0) {
        toast.success('Dados gravados com sucesso.');
      }
    } catch (error) {
      toast.error(
        'Não foi possível gravar as informações. Verifique seus dados.'
      );
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }
  }

  function handleSubmit(params) {
    if (Number(idRecipient) === 0) {
      createData(params);
    } else {
      updateData(params);
    }
  }

  return (
    <Container>
      <FormArea>
        <Form schema={schema} onSubmit={handleSubmit} initialData={recipient}>
          <Topo>
            <h2>{`${
              idRecipient > 0 ? 'Alteração' : 'Cadastro'
            } de destinatários`}</h2>
            <div>
              <button type="button" onClick={() => history.goBack()}>
                <MdChevronLeft size={20} />
                <span>Voltar</span>
              </button>
              <button type="submit">
                <MdCheck size={20} />
                <span>Salvar</span>
              </button>
            </div>
          </Topo>

          <div className="area-edicao">
            <div className="area-edicao__name">
              <label htmlFor="name">Nome</label>
              <Input type="text" name="name" />
            </div>
            <div className="area-edicao__rua">
              <label htmlFor="rua">
                Rua
                <Input type="text" name="rua" />
              </label>
              <label htmlFor="numero">
                Número
                <Input type="text" name="numero" />
              </label>
              <label htmlFor="bairro">
                Bairro
                <Input type="text" name="bairro" />
              </label>

              <label htmlFor="complemento">
                Complemento
                <Input type="text" name="complemento" />
              </label>
            </div>

            <div className="area-edicao__cidade">
              <label htmlFor="cidade">
                Cidade
                <Input type="text" name="cidade" />
              </label>
              <label htmlFor="estado">
                Estado
                <Input type="text" name="estado" />
              </label>
              <label htmlFor="cep">
                CEP
                <Input type="text" name="cep" />
              </label>
            </div>
          </div>
        </Form>
      </FormArea>
    </Container>
  );
}
