import { Props } from "../models/Props";
import { Container } from "../styles/Cards";

export default function Cards ({ offer } : Props) {
  return (
    <Container>
      <p>{offer.title}</p>
      <h1>{offer.plan}</h1>
      <h1>{offer.info}</h1>
      <h1>{offer.price}</h1>
    </Container>
  );
};
