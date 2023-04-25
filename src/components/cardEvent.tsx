/* eslint-disable no-bitwise */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Card } from "antd";
import { ImageCard } from "./style";

const { Meta } = Card;

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  public?: boolean;
  title?: string;
  description?: string;
  image?: string;
  navigation: any;
}

const CardHome: React.FC<Props> = ({
  title,
  description,
  image,
  navigation,
}) => (
  <Card
    onClick={navigation}
    style={{ width: "20.1%", margin: "5px", cursor: "pointer" }}
    cover={<ImageCard alt="example" src={image} />}
  >
    <Meta title={title} description={description} />
  </Card>
);

export default CardHome;
