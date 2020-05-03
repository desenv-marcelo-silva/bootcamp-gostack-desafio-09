/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { useParams } from 'react-router-dom';

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
  const [deliveryman, setDeliveryman] = useState([]);
  const [deliverymanValue, setDeliverymanValue] = useState(-1);
  const [recipientValue, setRecipientValue] = useState(-1);
  const [productValue, setProductValue] = useState('');

  useEffect(() => {
    async function load() {
      const recipientData = await api.get('recipients');
      const dataRcp = recipientData.data.map((recipient) => ({
        id: recipient.id,
        title: recipient.name,
      }));

      const deliverymanData = await api.get('deliveryman');
      const dataDlv = deliverymanData.data.map((delvman) => ({
        id: delvman.id,
        title: delvman.name,
      }));

      if (idPackage > 0) {
        const packageInfo = await api.get(`packages/package/${idPackage}`);

        setDeliverymanValue(packageInfo.data.deliveryman_id);
        setRecipientValue(packageInfo.data.recipient_id);
        setProductValue(packageInfo.data.product);
      } else {
        dataRcp.unshift({ id: -1, title: 'Selecione um destinatário...' });
        dataDlv.unshift({ id: -1, title: 'Selecione um entregador...' });
      }

      setRecipients(dataRcp);
      setDeliveryman(dataDlv);
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
      if (!response.id) {
        throw Error('Erro ao gravar as informações. Verifique seus dados.');
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
      if (!response.data.id) {
        throw Error('Erro ao gravar as informações. Verifique seus dados.');
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
    if (idPackage === 0) {
      createData(params);
    } else {
      updateData(params);
    }
  }

  return (
    <Container>
      <FormArea>
        <Form schema={schema} onSubmit={handleSubmit}>
          <Topo>
            <h2>Cadastro de encomendas</h2>
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
                <Select
                  name="recipient_id"
                  value={recipientValue}
                  defaultValue
                  options={recipients}
                  onChange={(e) => setRecipientValue(e.target.value)}
                />
              </label>

              <label htmlFor="deliveryman_id">
                Entregador
                <Select
                  name="deliveryman_id"
                  value={deliverymanValue}
                  defaultValue={{ deliverymanValue }}
                  options={deliveryman}
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
