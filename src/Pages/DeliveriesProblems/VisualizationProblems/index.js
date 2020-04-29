import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from '~/services/api';

import { Container, Problem } from './styles';

export default function VisualizationProblems({
  idPackage,
  visible,
  handleCloseVisualizationProblems,
}) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    async function loadInfo() {
      if (visible) {
        const response = await api.get(`/deliveryproblems/${idPackage}`);

        setInfo(response.data[0]);
      }
    }

    loadInfo();
  }, [idPackage, visible]);

  const { description } = info.DeliveryProblem || '';

  return (
    visible && (
      <Container>
        <Problem>
          <h3>Visualizar problema</h3>
          <textarea readOnly value={description} />
          <button type="button" onClick={handleCloseVisualizationProblems}>
            Fechar
          </button>
        </Problem>
      </Container>
    )
  );
}

VisualizationProblems.propTypes = {
  idPackage: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
  handleCloseVisualizationProblems: PropTypes.func.isRequired,
};
