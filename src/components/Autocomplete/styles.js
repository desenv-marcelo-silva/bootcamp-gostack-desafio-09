import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const AutoContainer = styled.div`
  position: absolute;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: goldenrod;
  background-color: whitesmoke;
  right: 10px;
  top: 52px;
  width: 520px;

  input {
    padding: 10px;
    height: 20px;
    width: 500px;
    border: 1px solid purple;
    margin: 10px;
    font-size: 18px;
    text-transform: capitalize;
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 5px;
  font-size: 28px;

  span {
    text-transform: capitalize;
  }
`;
