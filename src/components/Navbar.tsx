import React from "react";
import Logo from "../assets/logo.png";
import { LogoImage } from "../styles/Navbar";
import {Content} from "../styles/Navbar"
const Navbar = () => {
  return (
    <Content>
      <LogoImage src={Logo} />
    </Content>
  );
};

export default Navbar;