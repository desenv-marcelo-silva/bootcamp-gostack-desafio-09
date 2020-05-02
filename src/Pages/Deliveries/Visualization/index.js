import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';

import api from '~/services/api';

import {
  Container,
  Delivery,
  Information,
  Dates,
  SignatureImage,
} from './styles';

export default function Visualization({
  idDelivery,
  idDeliveryman,
  visible,
  handleCloseVisualization,
}) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function loadInfo() {
      if (visible) {
        const response = await api.get(
          `/deliverypacks/${idDeliveryman}/package/${idDelivery}`
        );

        setInfo(response.data);
      }
    }
    loadInfo();
  }, [idDeliveryman, idDelivery, visible]);

  const { rua, numero, bairro, cidade, estado, cep } = info.Recipient || {};

  return (
    visible && (
      <Container>
        <Delivery>
          <Information>
            <strong>Informações da encomenda</strong>
            <span>{`${rua}, ${numero}-${bairro}`}</span>
            <span>{`${cidade}-${estado}`}</span>
            <span>{cep}</span>
          </Information>

          <Dates>
            <span>Datas</span>

            {info.start_date || info.end_date || info.canceled_at ? (
              <table>
                <tbody>
                  {info.start_date && (
                    <tr>
                      <td>
                        <span>Retirada :</span>
                      </td>
                      <td>{format(parseISO(info.start_date), 'dd/MM/yyyy')}</td>
                    </tr>
                  )}
                  {info.end_date && (
                    <tr>
                      <td>
                        <span>Entrega :</span>
                      </td>
                      <td>{format(parseISO(info.end_date), 'dd/MM/yyyy')}</td>
                    </tr>
                  )}
                  {info.canceled_at && (
                    <tr>
                      <td>
                        <span>Cancelada:</span>
                      </td>
                      <td>
                        {format(parseISO(info.canceled_at), 'dd/MM/yyyy')}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            ) : (
              <span>
                <br />
                <br />
              </span>
            )}
          </Dates>
          <SignatureImage>
            <strong>Assinatura do destinatário</strong>
            {info.signature ? (
              <img src={info.signature.url} alt="Assinatura do destinatário" />
            ) : (
              <span> </span>
            )}
          </SignatureImage>
          <button type="button" onClick={handleCloseVisualization}>
            Fechar
          </button>
        </Delivery>
      </Container>
    )
  );
}

Visualization.propTypes = {
  idDelivery: PropTypes.number.isRequired,
  idDeliveryman: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  handleCloseVisualization: PropTypes.func.isRequired,
};
