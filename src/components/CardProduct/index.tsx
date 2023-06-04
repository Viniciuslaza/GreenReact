import React from "react";
import { Card, Row } from "antd";
import { ImageCard, DivStyled, PriceStyled, LocationStyled } from "./Style";

const { Meta } = Card;

type CardProps = {
  description: string;
  image: string;
  location: string;
  name: string;
  price: number;
  phone: string;
};

const CardProduct: React.FC<CardProps> = ({
  description,
  image,
  location,
  name,
  price,
  phone,
}) => (
  <Card
    style={{ width: "15.95%", margin: "5px", cursor: "pointer" }}
    cover={<ImageCard alt="example" src={image} />}
  >
    <DivStyled color="rgb(245, 61, 87)">Oferta destaque</DivStyled>
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        paddingTop: "10px",
        paddingLeft: "0px",
      }}
    >
      <Meta
        style={{ fontSize: "14px", fontWeight: 500, margin: "0px" }}
        title={name}
        description={description}
      />

      <PriceStyled>R$ {price}</PriceStyled>
    </div>
    <Row>
      <LocationStyled>{location}</LocationStyled>
      <LocationStyled>{phone}</LocationStyled>
    </Row>
  </Card>
);

export default CardProduct;
