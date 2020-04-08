import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Logo, Menu, Identificacao } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Logo />
        <nav>
          <Menu>
            <li key="1">
              <NavLink activeClassName="active" to="/deliveries">
                ENCOMENDAS
              </NavLink>
            </li>
            <li key="2">
              <NavLink to="/deliverymans">ENTREGADORES</NavLink>
            </li>
            <li key="3">
              <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
            </li>
            <li key="4">
              <NavLink to="/problems">PROBLEMAS</NavLink>
            </li>
          </Menu>
        </nav>
      </Content>
      <Identificacao>
        <span>Admin FastFeet</span>
        <NavLink to="/">Sair do Sistema</NavLink>
      </Identificacao>
    </Container>
  );
}
