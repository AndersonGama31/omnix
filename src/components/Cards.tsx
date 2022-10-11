import { Props } from "../models/Props";
import { Card, Content } from "../styles/Cards";
import {BiCheckCircle} from "react-icons/bi"

export default function Cards ({ offer } : Props) {
  return (
    <Content>
      <Card>
      <p>{offer.title}</p>
      <h1>{offer.plan}</h1>
      <p><BiCheckCircle />{offer.info}</p>
      <p>{offer.info2}</p>
      <p>{offer.info3}</p>
      <p>{offer.info4}</p>
      <h1>{offer.price}</h1>
    </Card>
    </Content>

  );
};