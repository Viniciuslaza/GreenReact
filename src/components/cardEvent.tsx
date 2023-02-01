/* eslint-disable no-bitwise */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Card } from "antd";

const { Meta } = Card;

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  public?: boolean;
  title?: String;
  description?: String;
  image?: any;
}

const CardHome: React.FC<Props> = (props: Props) => (
  <Card
    style={{ width: "24.1%", margin: "5px" }}
    cover={<img alt="example" src={props?.image} />}
  >
    <Meta title={props.title} description={props.description} />
  </Card>
);

export default CardHome;
