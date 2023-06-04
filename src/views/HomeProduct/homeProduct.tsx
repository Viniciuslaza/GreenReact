/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { Layout, Typography, theme } from "antd";
import CardHome from "components/cardEvent";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, getProjects, getUserById } from "services/dbFunctions";

import { getInfoUser } from "provider/UserProvider";
import CardProduct from "components/CardProduct";
import {
  LayoutMain,
  PStyleText,
  StyledContent,
  StyledText,
} from "./homeProductStyle";

const HomeProduct: React.FC = () => {
  const [screenW, setScreenW] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenW(window.screen.width);
  });
  const [products, setProducts] = useState<any[]>([]);
  const navigate = useNavigate();
  const data = getInfoUser();
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
    getUserById(data?.user_id).then((result: any) => {
      setUserData(result[0]);
    });
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <StyledText>Produtos a venda pelos usuários</StyledText>
      <PStyleText>{products?.length} produtos encontrados</PStyleText>
      <LayoutMain>
        <Layout>
          <StyledContent style={{ padding: "15px" }}>
            <LayoutMain style={{ background: colorBgContainer }}>
              <div
                style={{ display: "flex", padding: "5px", flexWrap: "wrap" }}
              >
                {products?.map((item) => (
                  <CardProduct
                    description={item?.description}
                    image={item?.image}
                    location={item?.location}
                    name={item?.name}
                    price={item?.price}
                    phone={item?.phone}
                  />
                ))}
              </div>
            </LayoutMain>
          </StyledContent>
        </Layout>
      </LayoutMain>
    </>
  );
};

export default HomeProduct;
