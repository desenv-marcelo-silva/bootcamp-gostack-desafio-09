import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { Container, MenuAction } from './styles';

export default function TableRecipient({ dataTable }) {
  const [idRecipient, setIdRecipient] = useState(null);

  function renderHeader() {
    return (
      <tr key="1">
        <th className="id">ID</th>
        <th className="name">Nome</th>
        <th className="address">Endereço</th>
        <th className="action">Ações</th>
      </tr>
    );
  }

  function handleContextMenu(id) {
    setIdRecipient(id === idRecipient ? null : id);
  }

  function renderBody() {
    return dataTable.map((info, _) => {
      const { id, name, endereco } = info;

      return (
        <tr key={id}>
          <td className="id">{`#${id}`}</td>
          <td className="name">
            <span>{name}</span>
          </td>
          <td className="address">
            <span>{endereco}</span>
          </td>
          <td className="action">
            <MenuAction visible={id === idRecipient}>
              <button type="button" onClick={() => handleContextMenu(id)}>
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <MdEdit color="#4D85EE" />
                  <span>Editar</span>
                </li>
                <li>
                  <MdDelete color="#DE3B3B" /> <span>Excluir</span>
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

TableRecipient.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
