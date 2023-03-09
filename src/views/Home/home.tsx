/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { Button, theme } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import CardHome from "components/cardEvent";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getEventos } from "services/dbFunctions";
import {
  BarRight,
  DisplayPage,
  LayoutMain,
  LogoDiv,
  MenuBar,
  MenuList,
} from "./homeStyle";

const Home: React.FC = () => {
  const [screenW, setscreenW] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setscreenW(window.screen.width);
  });
  const [eventos, setEventos] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getEventos().then((result) => {
      setEventos(result);
    });
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const titles = [
    {
      id: 1,
      name: "Eventos",
    },
    {
      id: 2,
      name: "Comunidade",
    },
    {
      id: 3,
      name: "Atividades",
    },
    {
      id: 4,
      name: "Sobre",
    },
    {
      id: 5,
      name: "Perfil",
    },
  ];

  return (
    <>
      <DisplayPage>
        <LayoutMain>
          <MenuBar>
            <LogoDiv
              preview={false}
              src="https://www.greensolutionscr.com/image/cache//data/logotipo_greensolutions_nuevo-2923x1559.png"
            />
            <MenuList
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={titles.map((item) => ({
                key: item.id,
                label: item.name,
              }))}
            />
            <BarRight />
            <Button
              style={{
                marginTop: "15px",
              }}
              type="primary"
              onClick={() => {
                navigate("/register-projects");
              }}
            >
              Cadastrar Eventos
            </Button>
          </MenuBar>
          <Content style={{ padding: "15px" }}>
            <LayoutMain style={{ background: colorBgContainer }}>
              <div
                style={{ display: "flex", padding: "5px", flexWrap: "wrap" }}
              >
                {eventos?.map((item, i) => (
                  <CardHome
                    key={i}
                    title={item.title}
                    description={item.description}
                    public={item.public}
                    image={item.image}
                  />
                ))}
              </div>
            </LayoutMain>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </LayoutMain>
      </DisplayPage>
    </>
  );
};

export default Home;
