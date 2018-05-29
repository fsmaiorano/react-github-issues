import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LeftContent = styled.div`
  padding: 30px;
  min-height: 100vh;
  border-right: 1px solid black;
  background-color: #fff;

  form {

    input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    border: 0;
    font-size: 18px;
    color: #444;

    border-radius: 3px;
        background-color: #EEE;
    }

    button {
        width: 80px;
        height: 55px;
        padding: 0 20px;
        margin-left: 10px;
        color: #fff;
        border: 0;
        font-size: 20x;
        font-weight: bold;
        border-radius: 3px;
        background-color: #59EA9A;
        &:hover {
            background: #52d89f;
          }
    }
    }
  }
`;

export const RightContent = styled.div``;
