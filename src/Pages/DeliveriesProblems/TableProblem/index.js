import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz, MdVisibility, MdDelete } from 'react-icons/md';

import VisualizationProblems from '../VisualizationProblems';

import { Container, MenuAction } from './styles';

export default function TableProblem({ dataTable }) {
  const [idPackage, setIdPackage] = useState(0);
  const [showVisualization, setShowVisualization] = useState(false);

  function handleVisualization() {
    setShowVisualization(true);
  }

  function handleCloseVisualization() {
    setShowVisualization(false);
  }

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
    setIdPackage(id === idPackage ? 0 : id);
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
            <MenuAction visible={id === idPackage}>
              <button type="button" onClick={() => handleContextMenu(id)}>
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <div>
                    <MdVisibility color="#4D85EE" />
                    <button type="button" onClick={handleVisualization}>
                      Visualizar
                    </button>
                  </div>
                </li>
                <li>
                  <div>
                    <MdDelete color="#DE3B3B" />
                    <button type="button" onClick={() => {}}>
                      Cancelar encomenda
                    </button>
                  </div>
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
      <VisualizationProblems
        idPackage={idPackage}
        visible={showVisualization}
        handleCloseVisualizationProblems={handleCloseVisualization}
      />
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
