/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';
import { Async } from 'react-select';
import 'react-select/dist/react-select.css';

import * as Yup from 'yup';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container, Topo, FormArea } from './styles';

const schema = Yup.object().shape({
  recipient_id: Yup.number()
    .positive('É obrigatório informar um destinatário.')
    .required('É obrigatório informar um destinatário.'),
  deliveryman_id: Yup.number()
    .positive('É obrigatório informar um entregador.')
    .required('É obrigatório informar um entregador.'),
  product: Yup.string().required('É obrigatório informar o nome do produto.'),
});

export default function Delivery() {
  const { idPackage } = useParams();
  const [recipients, setRecipients] = useState([]);
  const [loadRecipient, setLoadRecipient] = useState(false);
  const [deliveryman, setDeliveryman] = useState([]);
  const [loadDeliveryman, setloadDeliveryman] = useState(false);
  const [deliverymanValue, setDeliverymanValue] = useState('');
  const [recipientValue, setRecipientValue] = useState('');
  const [productValue, setProductValue] = useState('');

  useEffect(() => {
    async function load() {
      if (idPackage > 0) {
        const packageInfo = await api.get(`packages/package/${idPackage}`);

        setProductValue(packageInfo.data.product);
      }
    }

    load();
  }, [idPackage]);

  // eslint-disable-next-line camelcase
  async function createData({ recipient_id, deliveryman_id, product }) {
    try {
      const response = await api.post('packages', {
        recipient_id,
        deliveryman_id,
        product,
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

  // eslint-disable-next-line camelcase
  async function updateData({ recipient_id, deliveryman_id, product }) {
    try {
      const response = await api.put('packages', {
        id: idPackage,
        recipient_id,
        deliveryman_id,
        product,
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
    if (Number(idPackage) === 0) {
      createData(params);
    } else {
      updateData(params);
    }
  }

  async function getRecipient() {
    setLoadRecipient(true);
    const recipientData = await api.get(`recipients?q=${recipientValue}`);
    const data = recipientData.data.map((recipient) => ({
      value: recipient.id,
      label: recipient.name,
    }));
    setRecipients([data]);
    setLoadRecipient(false);
  }

  async function getDeliveryman() {
    setloadDeliveryman(true);
    const deliverymanData = await api.get(`deliveryman?q=${deliverymanValue}`);
    const data = deliverymanData.data.map((delvman) => ({
      value: delvman.id,
      label: delvman.name,
    }));
    setDeliveryman([data]);
    setloadDeliveryman(false);
  }

  return (
    <Container>
      <FormArea>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Topo>
            <h2>{`${
              idPackage > 0 ? 'Alteração' : 'Cadastro'
            } de encomendas`}</h2>
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

          <div className="form-input-area">
            <div className="form-input-area-line-1">
              <label htmlFor="recipient_id">
                Destinatário
                <Async
                  name="recipient_id"
                  value={recipientValue}
                  isLoading={loadRecipient}
                  valueKey="id"
                  labelKey="value"
                  loadOptions={getRecipient}
                  placeholder="Selecione o destinatário"
                  loadingPlaceholder="Carregando destinatário..."
                  clearValueText="Limpar"
                  noResultsText="Nenhum entregador encontrado."
                  onChange={(e) => setRecipientValue(e.target.value)}
                />
              </label>

              <label htmlFor="deliveryman_id">
                Entregador
                <Async
                  name="deliveryman_id"
                  value={deliverymanValue}
                  isLoading={loadDeliveryman}
                  valueKey="id"
                  labelKey="value"
                  loadOptions={getDeliveryman}
                  placeholder="Selecione o entregador"
                  loadingPlaceholder="Carregando entregador..."
                  clearValueText="Limpar"
                  noResultsText="Nenhum entregador encontrado."
                  onChange={(e) => setDeliverymanValue(e.target.value)}
                />
              </label>
            </div>

            <div className="form-input-area-line-2">
              <label htmlFor="product">
                Nome do produto
                <Input
                  type="text"
                  id="product"
                  name="product"
                  value={productValue}
                  onChange={(e) => setProductValue(e.target.value)}
                />
              </label>
            </div>
          </div>
        </Form>
      </FormArea>
    </Container>
  );
}
