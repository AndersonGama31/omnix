import styled from "styled-components";

export const Content = styled.div`  
background-color: #003f92;
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    font-weight: bold;
    font-size: 40px;
  }
  img {
    width: 200px;
    height: 100px;
    margin-left: 50px;
  }
  `;

export const Icons = styled.div`  
display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 10%;
  font-size: 25px;
  margin-left: 50px;
  color: #fff;
  cursor: pointer;
;`


export const Text = styled.div`
display: flex;
justify-content: center;
align-items: center;
p {
  font-weight: normal;
  font-size: 15px;
  color: #fff;
  margin-top: 20px;
}
`;