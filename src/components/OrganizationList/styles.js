import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px 1px;
  cursor: pointer;
`;

export const Header = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 65px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 10px 15px;
    text-align: left;
    width: 100%;

    strong {
      font-size: 24px;
    }
    small {
      font-size: 14px;
      color: #666;
    }
  }
`;
