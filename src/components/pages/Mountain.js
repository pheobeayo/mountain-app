import React from "react";
import { HomeContainer, MountainParent, NavBarContainer, TeamContainer, TopbarContainer } from "./mountain.styles"
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";
import Team from "../team/Team";
import TopBar from "../topbar/Topbar";

const Mountain =() => {
 return(

    <MountainParent>
        <NavBarContainer>
        <Navbar/>
        </NavBarContainer>
        <TopbarContainer>
        <TopBar/>
        </TopbarContainer>
        <HomeContainer>
        <Home/>
        </HomeContainer>
        <TeamContainer>
        <Team/>
        </TeamContainer>

    </MountainParent>
 )



}

export default Mountain;