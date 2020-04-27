import React from 'react';
import PropTypes from 'prop-types';

import fakeSignature from '~/assets/fake-signature-2.png';
import {
  Container,
  Delivery,
  Information,
  Dates,
  SignatureImage,
} from './styles';

export default function Visualization({
  idDelivery,
  visible,
  handleCloseVisualization,
}) {
  return (
    true && (
      <Container>
        <Delivery>
          <Information>
            <strong>Informações da encomenda</strong>
            <span>Rua Beethoven, 1729</span>
            <span>Diadema - SP</span>
            <span>09960-580</span>
          </Information>
          <Dates>
            <table>
              <caption>Datas</caption>
              <tbody>
                <tr>
                  <td>
                    <span>Retirada:</span>
                  </td>
                  <td>25/01/2020</td>
                </tr>
                <tr>
                  <td>
                    <span>Entrega :</span>
                  </td>
                  <td>05/02/2020</td>
                </tr>
              </tbody>
            </table>
          </Dates>
          <SignatureImage>
            <strong>Assinatura do destinatário</strong>
            <img src={fakeSignature} alt="Assinatura do destinatário" />
          </SignatureImage>
          <button type="button">Fechar</button>
        </Delivery>
      </Container>
    )
  );
}

Visualization.propTypes = {
  idDelivery: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  handleCloseVisualization: PropTypes.func.isRequired,
};
