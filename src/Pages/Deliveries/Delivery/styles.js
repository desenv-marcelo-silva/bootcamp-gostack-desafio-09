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

    div.form-input-area {
      background: #fff;
      padding: 30px 0 30px 30px;
    }

    label {
      color: #444;
      font-weight: 700;
      font-size: 14px;
    }

    div.form-input-area-line-1 {
      display: flex;
      justify-content: space-between;
      width: 100%;

      label {
        width: 50%;

        > select {
          width: 90%;
          height: 40px;
          font-size: 16px;
          color: #444;
          background: transparent;
        }
      }
    }

    div.form-input-area-line-2 {
      width: 100%;
      margin-top: 10px;

      label {
        width: 100%;

        input {
          margin-top: 5px;
          padding-left: 5px;
          width: 95%;
          height: 40px;
          border: 1px solid #ccc;
          border-radius: 4px;
          color: #444;
        }
      }
    }
  }
`;
