import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  h3 {
    margin: 200px 0;
    text-align: center;
  }
`;

export const TopoForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-right: 5px;
    border: 0;

    background: #7d40e7;
    border-radius: 4px;

    width: 140px;
    height: 36px;

    color: #fff;
    font-weight: bold;
    font-size: 14px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ContainerBusca = styled.div`
  display: flex;
  align-items: center;

  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 240px;
  padding: 4px;

  span {
    margin-left: 5px;
    margin-right: 10px;

    color: #999;
  }

  svg {
    height: 18px;
    width: 18px;
  }

  input {
    font-size: 14px;
    height: 20px;

    border: 0;

    &::placeholder {
      color: #999;
    }
  }
`;

export const InputBusca = styled(DebounceInput).attrs({
  minLength: 2,
  debounceTimeout: 300,
})``;
