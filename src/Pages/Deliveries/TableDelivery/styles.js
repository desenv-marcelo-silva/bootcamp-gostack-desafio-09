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

    > li {
      display: flex;
      justify-content: space-between;
    }
  }

  ul.table-body {
    width: 100%;
    background: none;

    > li {
      display: flex;
      justify-content: space-between;
      background: #fff;
      border-radius: 4px;
    }

    > li:nth-child(n + 2) {
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

    button {
      border: 0;
      background: none;
    }
  }
`;

export const AvatarDeliveryman = styled.div`
  display: flex;
  align-items: center;
  max-height: 20px;

  img {
    border-radius: 50%;
    padding: 5px;
    margin-right: 5px;
    height: 35px;
    width: 35px;
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

export const MenuAction = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  button {
    font-size: 16px;
    border: none;
    background: none;
    width: 100%;
  }

  ul {
    position: absolute;
    left: calc(50% - 61px);
    top: calc(100% + 5px);
    min-width: 125px;

    opacity: ${(props) => (props.visible ? 1 : 0)};
    pointer-events: ${(props) => (props.visible ? 'all' : 'none')};

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.3);
    background: #fff 0% 0% no-repeat padding-box;
    border-radius: 4px;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: calc(100% - 74px);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #dadfe4;
    }

    li {
      padding: 2px 0 5px;
      margin: 5px;

      div {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 16px;
        line-height: 20px;
        width: 100%;

        button {
          color: #999;
          width: unset;
        }

        svg {
          margin-left: 0;
          margin-right: 10px;
          height: 15px;
          width: 15px;
        }

        &:hover {
          background-color: #ddd;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid #999;
      }
    }
  }
`;
