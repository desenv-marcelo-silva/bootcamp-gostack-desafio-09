import React from 'react';
import PropTypes from 'prop-types';
import initials from 'initials';
import { MdMoreHoriz } from 'react-icons/md';

import { Container } from './styles';

export default function TableDelivery({ dataTable }) {
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

  function renderBody() {
    return dataTable.map((info, _) => {
      const {
        id,
        status,
        Recipient: { name: destinatario, cidade, estado },
        Deliveryman: { name: entregador },
      } = info;
      return (
        <li id={id}>
          <div className="id">{`#${id}`}</div>
          <div className="recipient">{destinatario}</div>
          <div className="deliveryman">
            <span>{initials(entregador)}</span>
            <span>{` ${entregador}`}</span>
          </div>
          <div className="city">{cidade}</div>
          <div className="state">{estado}</div>
          <div className="status">{status}</div>
          <div className="action">
            <button type="button">
              <MdMoreHoriz />
            </button>
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
