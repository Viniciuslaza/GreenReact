/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { Button, theme } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BarRight, LogoDiv, MenuBarStyle, MenuList } from "./style";

const MenuBar: React.FC = () => {
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
    <>
      <MenuBarStyle>
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
          Cadastro de Projetos
        </Button>
      </MenuBarStyle>
    </>
  );
};

export default MenuBar;
