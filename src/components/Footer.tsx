import React from "react";
import { Content } from "../styles/Footer";
import Logo from "../assets/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Icons } from "../styles/Footer";
import { Text } from "../styles/Footer";

const Footer = () => {
  return (
    <Content>
      <img src={Logo} />
      <Icons>
        <AiOutlineInstagram />
        <BsFacebook />
        <BsWhatsapp />
      </Icons>
      <Text>
        <p>
          <i>
            América Business Park - Edifício Quebec Av. Major Sylvio Magalhães
            Padilha, 5200 Morumbi, São Paulo - SP
          </i>
        </p>
      </Text>
    </Content>
  );
};

export default Footer;