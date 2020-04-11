import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  background: none;

  li {
    padding: 10px;
  }

  ul.table-header {
    width: 100%;
    color: #444;
    font-weight: bold;
    font-size: 16px;

    li {
      display: flex;
      justify-content: space-between;
    }
  }

  ul.table-body {
    width: 100%;
    background: none;

    li {
      display: flex;
      justify-content: space-between;
      background: #fff;
      border-radius: 4px;
    }

    li:nth-child(n + 2) {
      margin-top: 15px;
    }
  }

  div.id {
    width: 20px;
  }

  div.recipient {
    width: 250px;
  }

  div.deliveryman {
    width: 200px;
  }

  div.city {
    width: 150px;
  }

  div.state {
    width: 50px;
    text-align: center;
  }

  div.status {
    width: 100px;
  }

  div.action {
    display: flex;
    justify-content: center;

    width: 100px;
    text-align: center;

    > button {
      border: 0;
      background: none;
    }
  }
`;

export const DeliveryName = styled.span`
  &::before {
    content: "${({ initialName }) => initialName}";
    color: ${({ color }) => color};
    border-radius: 50%;
    padding: 5px;
    margin-right: 5px;
    background-color: ${({ color }) => lighten(0.4, color)};
  }
`;
