import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TitleActiveWork({ title }) {
  return (
    <Container>
      <span>{title}</span>
    </Container>
  );
}

TitleActiveWork.propTypes = {
  title: PropTypes.string.isRequired,
};
