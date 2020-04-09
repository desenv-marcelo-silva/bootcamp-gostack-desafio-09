import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopoForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  form {
    div {
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
    }
  }

  button {
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

export const DeliveryTable = styled.div`
  display: table;
  margin-top: 20px;
`;

export const DeliveryCab = styled.div`
  display: table-row;
  font-weight: bold;
`;

export const DeliveryRow = styled.div`
  display: table-row;
`;

export const DeliveryColumn = styled.div`
  display: table-cell;
`;
