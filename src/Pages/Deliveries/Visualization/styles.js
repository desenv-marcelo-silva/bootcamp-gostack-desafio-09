import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 100;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Delivery = styled.div`
  background: rgba(255, 255, 255, 1);
  height: 375px;
  width: 450px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  color: #444;

  button {
    width: 40%;
    margin: 0 auto;
    height: 35px;
    border: none;
    background: #7159c1;
    border-radius: 4px;
    color: #fff;
    transition: 0.2s background;

    &:hover {
      background: ${darken(0.2, '#7159c1')};
      font-weight: 400;
    }
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;

  strong {
    margin-bottom: 5px;
  }
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  > span {
    text-align: left;
    font-weight: bold;
    margin-left: 2px;
  }

  table tr td:first-child {
    width: 75px;

    span {
      font-weight: bold;
    }
  }
`;

export const SignatureImage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  img {
    height: 100px;
    width: 50%;
    margin: 0 auto;
  }

  span {
    height: 100px;
  }
`;
