import styled from "styled-components";
import image from "../assets/background.png";

export const Content = styled.div`  
background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
;`


export const Container = styled.div`  
  min-height: 78vh;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  img {
    width: 100%;
    height: 900px;
  }
;`
