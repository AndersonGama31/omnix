import styled from "styled-components";

export const Card = styled.div`width: 350px;
height: 600px;
background-color: #fff;
border-radius: 15px;
box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);
margin-left: 20px;
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p {
    color: #000;
    font-size: 20px;
    margin-bottom: 10px;
}
h1 {
    color: #000000;
}
`;

export const Content = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: row;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;

`