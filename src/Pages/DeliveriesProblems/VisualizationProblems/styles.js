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

export const Problem = styled.div`
  background: rgba(255, 255, 255, 1);
  height: 375px;
  width: 450px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  color: #444;

  h3 {
    text-align: left;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 12px;
    text-transform: uppercase;
  }

  textarea {
    height: 70%;
    border: none;
    padding: 10px 20px;
    margin-bottom: 20px;
    font-size: 14px;
    text-align: justify;
    overflow-y: hidden;
    resize: none;
  }
`;
