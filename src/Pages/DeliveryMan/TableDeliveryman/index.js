/* eslint-disable camelcase */
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { Container, MenuAction } from './styles';

export default function TableDeliveryman({ dataTable, handleDelete }) {
  const [idDeliveryman, setIdDeliveryman] = useState(null);
  const [showMenuAction, setShowMenuAction] = useState(true);
  const menuRef = useRef(null);

  function handleCloseMenuAction(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenuAction(false);
    }
  }

  function handleContextMenu(id) {
    setIdDeliveryman(id === idDeliveryman ? null : id);
    setShowMenuAction(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseMenuAction, true);
    return () => {
      document.removeEventListener('click', handleCloseMenuAction, true);
    };
  });

  function handleDeliveryDelete(id) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Confirma a exclusão do entregador?')) {
      handleDelete(id);
    }
  }

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
            <MenuAction
              ref={menuRef}
              visible={id === idDeliveryman && showMenuAction}
            >
              <button type="button" onClick={() => handleContextMenu(id)}>
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <div>
                    <MdEdit color="#4D85EE" />
                    <Link to={`/deliverymen/${idDeliveryman}`}>Editar</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <MdDelete color="#DE3B3B" />
                    <button
                      type="button"
                      onClick={() => handleDeliveryDelete(id)}
                    >
                      Excluir
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
      <table>
        <thead>{renderHeader()}</thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </Container>
  );
}

TableDeliveryman.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
