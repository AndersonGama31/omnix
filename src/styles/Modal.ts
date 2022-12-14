import styled from "styled-components";

export const Button = styled.button`  
background-color: transparent;
  color: #fff;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform;
  &:hover {
    transform: scale(1.2);
  }
;`


export const Container = styled.div`  
height: 35vh;
  width: 60vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-color: #fff;
  border-radius: 20px;
  margin-left: 50px;
  margin-top: 50px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
  h1 {
    color: #003f92;
  }
  p {
    color: #003f92;
    margin-top: 10px;
  }

;`


export const ContainerInput = styled.div`  
  background-color: #fff;
  padding: 15px;
  margin: 34px 0;
  display: flex;
  border-radius: 8px;
  box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
;`


export const Input = styled.input`  
background-color: transparent;
  border: 0;
  font-size: 20px;
  color: #000000;
  outline: none;
  margin-right: 8px;
  width: 300px;
  &::placeholder {
    color: #000000;
  }
;`