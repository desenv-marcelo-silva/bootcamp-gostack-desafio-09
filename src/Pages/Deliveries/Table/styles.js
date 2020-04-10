import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  background: none;

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      text-align: left;
      color: #444;
    }

    tbody {
      &::before {
        content: '-';
        color: transparent;
      }

      tr {
        border: 1px transparent solid;
        border-radius: 10px;
        background: #fff;

        td {
          padding: 5px;
        }
      }

      td {
        color: #666;
        padding-top: 5px;
        padding-bottom: 5px;
      }
    }
  }
`;
