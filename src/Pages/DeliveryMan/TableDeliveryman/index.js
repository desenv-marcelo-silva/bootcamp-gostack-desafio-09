import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { Container, MenuAction } from './styles';

export default function TableDeliveryman({ dataTable }) {
  const [idDeliveryman, setIdDeliveryman] = useState(null);

  function renderHeader() {
    return (
      <tr key="1">
        <th className="id">ID</th>
        <th className="photo">Foto</th>
        <th className="name">Nome</th>
        <th className="email">e-mail</th>
        <th className="action">Ações</th>
      </tr>
    );
  }

  function handleContextMenu(id) {
    setIdDeliveryman(id === idDeliveryman ? null : id);
  }

  function renderBody() {
    return dataTable.map((info, _) => {
      const { id, name, email, deliveryman_avatar, initial } = info;

      return (
        <tr key={id}>
          <td className="id">{`#${id}`}</td>
          <td className="photo">
            {deliveryman_avatar ? (
              <img src={deliveryman_avatar.url} alt="Avatar" />
            ) : (
              <span>{initial}</span>
            )}
          </td>
          <td className="name">
            <span>{name}</span>
          </td>
          <td className="email">
            <span>{email}</span>
          </td>
          <td className="action">
            <MenuAction visible={id === idDeliveryman}>
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

TableDeliveryman.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
