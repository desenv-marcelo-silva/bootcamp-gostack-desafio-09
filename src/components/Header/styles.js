import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;

  background: #fff;
  border: 1px solid #ddd;
  padding: 0 20px;
  height: 65px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: 'Logotipo FastFeet',
})`
  width: 135px;
  height: 26px;
  margin-right: 20px;
  padding-right: 20px;
  border-right: 1px solid #ddd;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 5px;
    padding-right: 10px;
    font-weight: bold;

    > a {
      color: #999;

      &:hover {
        color: #000;
      }
    }
  }
`;

export const Identificacao = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;

  span {
    color: #666;
    margin-bottom: 10px;
  }

  > a {
    font-size: 14px;
    color: red;
    text-transform: lowercase;
  }
`;
