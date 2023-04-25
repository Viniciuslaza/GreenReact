/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { Button, Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import CardHome from "components/cardEvent";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "services/dbFunctions";
import Sider from "antd/es/layout/Sider";
import { HeaderLayout } from "components/Header/header";
import {
  BarRight,
  LayoutMain,
  MenuList,
  StyledContent,
} from "./homeStyle";

const Home: React.FC = () => {
  const [screenW, setScreenW] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenW(window.screen.width);
  });
  const [projects, setProjects] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects().then((result) => {
      setProjects(result);
    });
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <>
      <LayoutMain>
        <Layout>
          <StyledContent style={{ padding: "15px" }}>
            <LayoutMain style={{ background: colorBgContainer }}>
              <div
                style={{ display: "flex", padding: "5px", flexWrap: "wrap" }}
              >
                {projects?.map((item, i) => (
                  <CardHome
                    key={i}
                    navigation={() => navigate(`/detalhes/${item?.id}`)}
                    title={item.title}
                    description={item.description}
                    public={item.public}
                    image={item.image}
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

export default Home;
