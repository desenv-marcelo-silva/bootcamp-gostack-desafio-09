import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  background: none;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 15px;
  }

  thead {
    color: #444;
    font-weight: bold;
    tr {
      line-height: 40px;
    }
  }

  tbody {
    background: none;
    text-align: center;

    tr {
      line-height: 40px;
      background: #fff;

      td {
        color: #666;
      }
    }
  }

  th.id,
  td.id {
    width: 10%;
    text-align: left;
  }

  th.name,
  td.name {
    width: 25%;
    text-align: left;
  }

  th.address,
  td.address {
    width: 50%;
    text-align: left;
  }

  th.action {
    text-align: right;
    padding-right: 15px;
  }

  td.action {
    width: 15%;
    text-align: right;

    button {
      border: 0;
      background: none;
    }
  }
`;

export const MenuAction = styled.div`
  position: relative;
  display: inline-block;
  width: 25%;
  margin-right: 10px;

  button {
    font-size: 16px;
    border: none;
    background: none;
    width: 100%;
  }

  ul {
    position: absolute;
    left: calc(50% - 75px);
    top: calc(100% + 5px);
    min-width: 150px;

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
      left: calc(100% - 85px);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #dadfe4;
    }

    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 16px;
      padding: 5px;
      margin: 5px;
      line-height: 20px;

      &:not(:last-child) {
        border-bottom: 1px solid #999;
      }

      span {
        color: #999999;
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
  }
`;
