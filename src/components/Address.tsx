import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Section } from "../styles/Adress";

const Address = () => {
  const { address } = useContext(UserContext);
  const addressInfos = [
    { label: "Estado", value: address.uf },
    { label: "Cidade", value: address.localidade },
    { label: "Bairro", value: address.bairro },
    { label: "Logradouro", value: address.logradouro },
    { label: "Complemento", value: address.complemento },
    { label: "CEP", value: address.cep },
  ];

  return (
    <Section>
      <h1>Seus dados:</h1>
        {addressInfos.map((item, index) => (
          <div key={index}>
            <p>{item.label}</p>
            <span>{item.value ? item.value : "Não encontrado"}</span>
          </div>
        ))}
    </Section>
  );
}

export default Address;

