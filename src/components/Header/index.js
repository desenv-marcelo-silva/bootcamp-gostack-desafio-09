import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Logo, Menu, Identificacao } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <nav>
          <Menu>
            <li>
              <Link to="/deliveries">ENCOMENDAS</Link>
            </li>
            <li>
              <Link to="/deliverymans">ENTREGADORES</Link>
            </li>
            <li>
              <Link to="/recipients">DESTINATÁRIOS</Link>
            </li>
            <li>
              <Link to="/problems">PROBLEMAS</Link>
            </li>
          </Menu>
        </nav>
      </Content>
      <Identificacao>
        <span>Admin FastFeet</span>
        <Link to="/">Sair do Sistema</Link>
      </Identificacao>
    </Container>
  );
}
