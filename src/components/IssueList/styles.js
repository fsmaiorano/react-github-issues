import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 1px;
  cursor: pointer;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background-color: #fff;
  padding: 20px;
  margin: 20px;
  width: 340px;

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
      font-size: 18px;
      width: 230px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    small {
      font-size: 14px;
      color: #666;
    }

    a {
      margin-top: 10px;
      border-radius: 5px;
      width: 115px;
      color: #fff;
      text-decoration: none;
      background-color: #b286d1;
      padding: 10px 6px 10px 6px;
    }
  }
`;
