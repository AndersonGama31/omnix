import { Props } from "../models/Props";
import { Card, Content } from "../styles/Cards";
import {BiCheckCircle} from "react-icons/bi"
import {MdOutlineCloudDone} from "react-icons/md"

export default function Cards ({ offer } : Props) {
  return (
    <Content>
      <Card>
      <p><strong>{offer.title}</strong></p>
      <h1>{offer.plan}</h1>
      <p><BiCheckCircle />{offer.info}</p>
      <p><MdOutlineCloudDone />{offer.info2}</p>
      <p><MdOutlineCloudDone />{offer.info3}</p>
      <p><MdOutlineCloudDone />{offer.info4}</p>
      <h1>{offer.price}</h1>
    </Card>
    </Content>
  );
};