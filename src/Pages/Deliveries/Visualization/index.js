import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Visualization({
  idDelivery,
  visible,
  handleCloseVisualization,
}) {
  return (
    visible && (
      <Container>
        <h1>Visualização da encomenda</h1>;
        <button type="button" onClick={handleCloseVisualization}>
          Fechar visualização {idDelivery}
        </button>
      </Container>
    )
  );
}

Visualization.propTypes = {
  idDelivery: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  handleCloseVisualization: PropTypes.func.isRequired,
};
