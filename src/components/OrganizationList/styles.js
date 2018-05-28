import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  background-color: green;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img {
    width: 65px;
    margin: 0 10px;
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 24px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
`;
