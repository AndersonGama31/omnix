import styled from "styled-components";
import image from "../assets/background.png";

export const Content = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
  h1 {
    color: #003f92;
    font-size: 40px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
`;

export const ButtonBack = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 10px;
  background-color: #e09158;
  color: #fff;
  font-weight: bold;
  margin-bottom: 30px;
  float: right;
  margin-right: 20px;
`;

export const Info = styled.div`
 background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 110vh;
`;