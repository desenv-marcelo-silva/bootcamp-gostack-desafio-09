import React from 'react';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';

import history from '~/services/history';

import { Container, Topo, FormArea } from './styles';

const mockRecipients = [
  { id: 1, title: 'Julio Jones' },
  { id: 2, title: 'Davante Adams' },
  { id: 3, title: 'Odell Beckham' },
  { id: 4, title: 'DeAndre Hopkins' },
  { id: 5, title: 'Michael Thomas' },
  { id: 6, title: 'JuJu Smith-Schuster' },
  { id: 7, title: 'Tyreek Hill' },
  { id: 8, title: 'Mike Evans' },
  { id: 9, title: 'Keenan Allen' },
  { id: 10, title: 'Amari Cooper' },
];

const mockDeliveryman = [
  { id: 1, title: 'Lamar Jackson' },
  { id: 2, title: 'Patrick Mahomes' },
  { id: 3, title: 'Drew Brees' },
  { id: 4, title: 'Dak Prescott' },
  { id: 5, title: 'Russell Wilson' },
  { id: 6, title: 'Matthew Stafford' },
  { id: 7, title: 'Deshaun Watson' },
  { id: 8, title: 'Ryan Fitzpatrick' },
  { id: 9, title: 'Derek Carr' },
  { id: 10, title: 'Carson Wentz' },
];

export default function Delivery() {
  function handleSubmit(params) {
    console.tron.log(params);
  }

  return (
    <Container>
      <FormArea>
        <Form onSubmit={handleSubmit}>
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
              <label htmlFor="recipient">
                Destinatário
                <Select
                  id="recipient"
                  name="recipient"
                  options={mockRecipients}
                />
                {/* {mockRecipients &&
                    mockRecipients.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                </Select> */}
              </label>
              <label htmlFor="deliveryman">
                Entregador
                <Select
                  id="deliveryman"
                  name="deliveryman"
                  options={mockDeliveryman}
                />
                {/* {mockDeliveryman &&
                    mockDeliveryman.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                </Select> */}
              </label>
            </div>
            <div className="form-input-area-line-2">
              <label htmlFor="product">
                Nome do produto
                <Input type="text" id="product" name="product" />
              </label>
            </div>
          </div>
        </Form>
      </FormArea>
    </Container>
  );
}
