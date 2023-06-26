import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavBarParent = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
`;

export const NavBar = styled.div`
    width: 100%;
    height: 10%;
    background: #fff;
    display: flex;
`;


export const Wrapper = styled.div`
    width: 100%;
    height: 10%;
    background: #fff;
    display: flex;
    margin-left: 55rem;
`;



export const LinkContainer = styled(Link)`
display: flex;
margin-top: 1.3rem;
margin-left: 2rem;
color: #F77F00;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
&:hover,
&:focus{
    color: #F77F00;
}
&:active{
    color: #011632;

 
`;

