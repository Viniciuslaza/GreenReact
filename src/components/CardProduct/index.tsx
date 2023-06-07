import React, { useEffect, useState } from "react";
import { Card, Row } from "antd";
import { getImage } from "services/dbFunctions";
import { ImageCard, DivStyled, PriceStyled, LocationStyled } from "./Style";

const { Meta } = Card;

type CardProps = {
  product_id: string;
  description: string;
  image: string;
  location: string;
  name: string;
  price: number;
  phone: string;
};

const CardProduct: React.FC<CardProps> = ({
  product_id,
  description,
  image,
  location,
  name,
  price,
  phone,
}) => {
  const [renderImage, setRenderImage] = useState<string>();

  useEffect(() => {
    getImage("Products", image, product_id).then((result) => {
      setRenderImage(result);
    });
  }, [image, product_id]);

  return (
    <Card
      style={{ width: "15.95%", margin: "5px", cursor: "pointer" }}
      cover={
        <ImageCard
          alt="example"
          src={
            renderImage ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ey9M7Rf1-xyFDBxU1t7Bxwf7U44LsDzVUpR_kmm&s"
          }
        />
      }
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
};
export default CardProduct;
