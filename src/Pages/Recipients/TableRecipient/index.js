import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { MdMoreHoriz, MdEdit, MdDelete } from 'react-icons/md';
import { Container, MenuAction } from './styles';

export default function TableRecipient({ dataTable }) {
  const [idRecipient, setIdRecipient] = useState(null);
  const [showMenuAction, setShowMenuAction] = useState(true);
  const menuRef = useRef(null);

  function handleCloseMenuAction(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenuAction(false);
    }
  }

  function handleContextMenu(id) {
    setIdRecipient(id === idRecipient ? null : id);
    setShowMenuAction(true);
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseMenuAction, true);
    return () => {
      document.removeEventListener('click', handleCloseMenuAction, true);
    };
  });

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
            <MenuAction
              ref={menuRef}
              visible={id === idRecipient && showMenuAction}
            >
              <button type="button" onClick={() => handleContextMenu(id)}>
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <div>
                    <MdEdit color="#4D85EE" />
                    <Link to={`/recipient/${idRecipient}`}>Editar</Link>
                  </div>
                </li>
                <li>
                  <div>
                    <MdDelete color="#DE3B3B" />
                    <span>Excluir</span>
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

TableRecipient.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
