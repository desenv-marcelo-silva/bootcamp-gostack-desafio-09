import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  margin-top: 20px;
  background: none;

  li {
    padding: 15px 10px 15px;
    font-size: 16px;
  }

  ul.table-header {
    width: 100%;
    color: #444;
    font-weight: bold;

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
      margin-top: 20px;
    }
  }

  div.id {
    width: 20px;
  }

  div.recipient {
    width: 200px;
  }

  div.deliveryman {
    width: 200px;
  }

  div.city {
    width: 200px;
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

export const StatusDelivery = styled.span`
  background: ${({ statusColor }) => lighten(0.2, statusColor)};
  padding: 5px 10px;
  border-radius: 15px;

  color: ${({ statusColor }) => darken(0.2, statusColor)};
  text-transform: uppercase;
  font-size: 10px;
  flex: grow;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: ${({ statusColor }) => darken(0.2, statusColor)};
    border-radius: 50%;
    margin-right: 5px;
  }
`;
