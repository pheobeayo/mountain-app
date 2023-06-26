import { TopParent } from "./topbar.styles";
import React from "react";
import Topbar from "../../assets/Topbar.png";


const TopBar = () => {
    
    return(

        <TopParent>
        <img src ={Topbar} alt="Topbar" />

        </TopParent>


);
}
export default TopBar;