import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Content } from "../styles/Offers";
import Cards from "../components/Cards";
import offers from "../data/offers.json";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function Offers() {

  const { setAddress } = useContext(UserContext);
  const navigate = useNavigate();
  function handleInfo() {
    setAddress({
      bairro: "",
      cep: "",
      complemento: "",
      ddd: "",
      gia: "",
      ibge: "",
      localidade: "",
      logradouro: "",
      siafi: "",
      uf: "",
    });
    navigate("/");
  }
  return (
    <>
      <Navbar />
      <Content>
      {offers.map((offer, index) => (
            <Cards key={index} offer={offer} />
          ))}
      </Content>
      <button onClick={handleInfo}>Ops, errei meu cep!</button>
      <Footer />
    </>
  );
};
