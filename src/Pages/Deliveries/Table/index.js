import React from 'react';
import PropTypes from 'prop-types';
import initials from 'initials';

import { Container } from './styles';

export default function Table({ infoHeader, dataTable }) {
  function renderHeader() {
    return infoHeader.map((headerColumn, index) => {
      return <th key={index}>{headerColumn}</th>;
    });
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
        <tr key={id} className="testelinha">
          <td>{id}</td>
          <td>{destinatario}</td>
          <td>
            <span>{initials(entregador)}</span>
            <span>{` ${entregador}`}</span>
          </td>
          <td>{cidade}</td>
          <td>{estado}</td>
          <td>{status}</td>
        </tr>
      );
    });
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </Container>
  );
}

Table.propTypes = {
  infoHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
