import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz, MdVisibility, MdDelete } from 'react-icons/md';
import { Container, MenuAction } from './styles';

export default function TableProblem({ dataTable }) {
  const [idProblem, setIdProblem] = useState(null);

  function renderHeader() {
    return (
      <tr key="1">
        <th className="id">Encomenda</th>
        <th className="problem">Problema</th>
        <th className="action">Ações</th>
      </tr>
    );
  }

  function handleContextMenu(id) {
    setIdProblem(id === idProblem ? null : id);
  }

  function renderBody() {
    return dataTable.map((info, _) => {
      const { id, DeliveryProblem } = info;

      return (
        <tr key={id}>
          <td className="id">{`#${id}`}</td>
          <td className="problem">
            <span>{DeliveryProblem.description}</span>
          </td>
          <td className="action">
            <MenuAction visible={id === idProblem}>
              <button type="button" onClick={() => handleContextMenu(id)}>
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <MdVisibility color="#4D85EE" />
                  <span>Visualizar</span>
                </li>
                <li>
                  <MdDelete color="#DE3B3B" /> <span>Cancelar encomenda</span>
                </li>
              </ul>
            </MenuAction>
          </td>
        </tr>
      );
    });
  }

  return (
    <Container>
      <table>
        <thead>{renderHeader()}</thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </Container>
  );
}

TableProblem.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
