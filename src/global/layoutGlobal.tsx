import { ReactElement } from "react";
import { Button, Layout, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { HeaderLayout } from "components/Header/header";
import Sider from "antd/es/layout/Sider";
import { BarRight, LayoutMain, MenuList, StyledContent } from "./Style";

export const LayoutGlobal = ({ children }: { children: ReactElement }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const titles = [
    {
      id: 1,
      name: "Projetos",
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
    <LayoutMain>
      <HeaderLayout />
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <MenuList
            mode="vertical"
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
            Cadastro de Projetos
          </Button>
        </Sider>
        <StyledContent style={{ padding: "15px" }}>{children}</StyledContent>
      </Layout>
    </LayoutMain>
  );
};
