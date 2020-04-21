import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz, MdVisibility, MdEdit, MdDelete } from 'react-icons/md';
import { getColor } from 'random-material-color';
import {
  Container,
  DeliveryName,
  StatusDelivery,
  MenuAction,
  AvatarDeliveryman,
} from './styles';

export default function TableDelivery({ dataTable }) {
  const [idDelivery, setIdDelivery] = useState(null);

  function renderHeader() {
    return (
      <>
        <div className="id">ID</div>
        <div className="recipient">Destinatário</div>
        <div className="deliveryman">Entregador</div>
        <div className="city">Cidade</div>
        <div className="state">Estado</div>
        <div className="status">Status</div>
        <div className="action">Ações</div>
      </>
    );
  }

  function handleContextMenu(id) {
    setIdDelivery(id === idDelivery ? null : id);
  }

  function renderBody() {
    return dataTable.map((info, _) => {
      const {
        id,
        status,
        Recipient: { name: destinatario, cidade, estado },
        Deliveryman: { name: entregador, deliveryman_avatar: urlAvatar },
        initial,
        initialColor = getColor({ text: initial }),
        statusColor,
      } = info;

      return (
        <li key={id}>
          <div className="id">{`#${id}`}</div>
          <div className="recipient">{destinatario}</div>
          <div className="deliveryman">
            {urlAvatar ? (
              <>
                <AvatarDeliveryman>
                  <img src={urlAvatar} alt="Avatar" />
                  {entregador}
                </AvatarDeliveryman>
              </>
            ) : (
              <DeliveryName initialName={initial} color={initialColor}>
                {entregador}
              </DeliveryName>
            )}
          </div>
          <div className="city">{cidade}</div>
          <div className="state">{estado}</div>
          <div className="status">
            <StatusDelivery statusColor={statusColor}>{status}</StatusDelivery>
          </div>
          <div className="action">
            <MenuAction visible={id === idDelivery}>
              <button type="button" onClick={() => handleContextMenu(id)}>
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <MdVisibility color="#8E5BE8" />
                  <span>Visualizar</span>
                </li>
                <li>
                  <MdEdit color="#4D85EE" />
                  <span>Editar</span>
                </li>
                <li>
                  <MdDelete color="#DE3B3B" /> <span>Excluir</span>
                </li>
              </ul>
            </MenuAction>
          </div>
        </li>
      );
    });
  }

  return (
    <Container>
      <ul className="table-header">
        <li key="1">{renderHeader()}</li>
      </ul>
      <ul className="table-body">{renderBody()}</ul>
    </Container>
  );
}

TableDelivery.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
