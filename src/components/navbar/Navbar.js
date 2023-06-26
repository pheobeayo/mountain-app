import { LinkContainer,  NavBar, NavBarParent, Wrapper } from "./navbar.styles";
import React from "react";
import {Link} from "react-router-dom";


const Navbar = ()=>{
     return(

        <NavBarParent>
         <NavBar>
        
          <Wrapper>
          <LinkContainer><Link to="/home">01.HISTORY</Link>
          </LinkContainer>
          
          <LinkContainer><Link to="/team">02.TEAM</Link>
          </LinkContainer>
          </Wrapper>
         </NavBar>
         
         </NavBarParent>





 )




}

export default Navbar;
