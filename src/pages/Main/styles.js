import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0px;
  display: flex;
  box-sizing: border-box;
`;

export const Left = styled.div`
  flex-shrink: 0;
  padding: 30px;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Right = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TopLeft = styled.div`
  flex-shink: 0;
  background-color: #FFF;

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

export const TopRight = styled.div`
  flex-shrink: 0;
  display: inline-flex;
`;

export const Bottom = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
`;
