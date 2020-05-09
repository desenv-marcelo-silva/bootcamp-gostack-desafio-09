import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { MdMoreHoriz, MdVisibility, MdEdit, MdDelete } from 'react-icons/md';
import { getColor } from 'random-material-color';

import { toast } from 'react-toastify';

import Visualization from '../Visualization';

import {
  Container,
  DeliveryName,
  StatusDelivery,
  MenuAction,
  AvatarDeliveryman,
} from './styles';

export default function TableDelivery({ dataTable, handleDelete }) {
  const [idPackage, setidPackage] = useState(0);
  const [idDeliveryman, setIdDeliveryman] = useState(0);
  const [showVisualization, setShowVisualization] = useState(false);
  const [showMenuAction, setShowMenuAction] = useState(false);

  const menuRef = useRef(null);

  function handleCloseMenuAction(e) {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setShowMenuAction(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleCloseMenuAction, true);
    return () => {
      document.removeEventListener('click', handleCloseMenuAction, true);
    };
  });

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

  function handleContextMenu(id, deliverymanId) {
    setidPackage(id === idPackage ? 0 : id);
    setIdDeliveryman(deliverymanId);
    setShowMenuAction(true);
  }

  function handleDeleteDelivery(id) {
    // eslint-disable-next-line no-alert
    if (window.confirm('Confirma a exclusão da encomenda?')) {
      if (handleDelete(id)) {
        toast.success('Registro excluído com sucesso!');
      } else {
        toast.error('Registro não pôde ser excluído.');
      }
    }
  }

  function renderBody() {
    return dataTable.map((info, _) => {
      const {
        id,
        status,
        initial,
        initialColor = getColor({ text: initial }),
        statusColor,
      } = info;

      const {
        id: deliverymanId,
        name: entregador,
        deliveryman_avatar: urlAvatar,
      } = info.Deliveryman;

      const { name: destinatario, cidade, estado } = info.Recipient;

      return (
        <li key={id}>
          <div className="id">{`#${id}`}</div>
          <div className="recipient">{destinatario}</div>
          <div className="deliveryman">
            {urlAvatar ? (
              <>
                <AvatarDeliveryman>
                  <img src={urlAvatar.url} alt="Avatar" />
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
            <MenuAction
              ref={menuRef}
              visible={id === idPackage && showMenuAction}
            >
              <button
                type="button"
                onClick={() => handleContextMenu(id, deliverymanId)}
              >
                <MdMoreHoriz />
              </button>
              <ul>
                <li>
                  <div>
                    <MdVisibility color="#8E5BE8" />
                    <button
                      type="button"
                      onClick={() => setShowVisualization(true)}
                    >
                      Visualizar
                    </button>
                  </div>
                </li>
                <li>
                  <div>
                    <MdEdit color="#4D85EE" />
                    <Link to={`/delivery/${idPackage}`}>Editar</Link>
                  </div>
                </li>
                {(status.trim().toLowerCase() === 'pendente' ||
                  status.trim().toLowerCase() === 'retirada') && (
                  <li>
                    <div>
                      <MdDelete color="#DE3B3B" />
                      <button
                        type="button"
                        onClick={() => handleDeleteDelivery(idPackage)}
                      >
                        Excluir
                      </button>
                    </div>
                  </li>
                )}
              </ul>
            </MenuAction>
          </div>
        </li>
      );
    });
  }

  return (
    <Container>
      <Visualization
        visible={showVisualization}
        handleCloseVisualization={() => setShowVisualization(false)}
        idPackage={idPackage}
        idDeliveryman={idDeliveryman}
      />
      <ul className="table-header">
        <li key="1">{renderHeader()}</li>
      </ul>
      <ul className="table-body">{renderBody()}</ul>
    </Container>
  );
}

TableDelivery.propTypes = {
  dataTable: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
