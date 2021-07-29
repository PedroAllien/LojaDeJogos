import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #202736;
  border-bottom: 5px solid #BAE8F5;

  display: flex;
`

export const LeftSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 10px;

  img {
    width: 160px;
    height: 60px;
  }
 
`
 
export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
      background: none;
      border: none;
      cursor: pointer;
    }

    a, button {
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
  
    img {
      width: 50px;
      height: 60px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

`