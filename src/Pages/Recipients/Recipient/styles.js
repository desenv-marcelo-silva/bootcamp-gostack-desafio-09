import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 900px;
  height: 300px;
  margin: 0 auto;
`;

export const Topo = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  h2 {
    color: #666;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 190px;

    button {
      display: flex;
      justify-content: space-around;

      width: 90px;
      text-transform: uppercase;
      font-size: 14px;

      color: #fff;
      background: #7159c1;
      border-radius: 4px;

      &:first-child {
        background: #c3c3c3;
      }

      span {
        margin-right: 5px;
      }

      > svg {
        margin-left: 5px;
      }

      &:hover {
        background: ${darken(0.05, '#7159c1')};
      }

      &:first-child:hover {
        background: ${darken(0.05, '#c3c3c3')};
      }
    }
  }
`;

export const FormArea = styled.div`
  width: 100%;
  height: 90%;
  background: transparent;
  padding: 20px;
  border-radius: 4px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    div.area-edicao {
      background: #fff;
      padding: 30px;
      border-radius: 4px;
      display: flex;
      flex-direction: column;

      span {
        color: #ff4141;
        display: block;
      }

      & .area-edicao__rua {
        display: flex;
        justify-content: space-between;

        > label:first-child {
          width: 40%;
        }

        > label:nth-child(2) {
          width: 10%;
        }

        > label:last-child {
          width: 20%;
        }
      }

      & .area-edicao__cidade {
        display: flex;
        justify-content: space-between;

        > label:first-child {
          width: 55%;
        }

        > label {
          width: 25%;
        }

        > label:last-child {
          width: 15%;
        }
      }
    }

    label {
      color: #444;
      font-weight: 700;
      font-size: 14px;
      margin: 5px 0 5px;
      display: block;
    }

    input {
      border-radius: 4px;
      border: 1px solid #ccc;
      line-height: 40px;
      font-size: 16px;
      padding-left: 5px;
      margin-top: 2px;
      width: 100%;
    }
  }
`;
