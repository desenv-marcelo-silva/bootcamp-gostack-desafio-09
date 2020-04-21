import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Logo, Menu, Identificacao } from './styles';

export default function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
        <span>{profile.name}</span>
        <button type="button" onClick={handleSignOut}>
          Sair do Sistema
        </button>
      </Identificacao>
    </Container>
  );
}
