import { ReactElement, useState } from "react";
import { Layout, theme } from "antd";
import { Link } from "react-router-dom";
import { HeaderLayout } from "components/Header/header";
import Sider from "antd/es/layout/Sider";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  FormOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { LayoutMain, MenuList, StyledContent } from "./Style";

export const LayoutGlobal = ({ children }: { children: ReactElement }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const resizePage = () => {
    setWidthScreen(window.innerWidth);
  };
  window.addEventListener("resize", resizePage);

  const items = [
    {
      key: "home",
      icon: (
        <Link to="/">
          <HomeOutlined style={{ color: "black" }} />
        </Link>
      ),
      label: <Link to="/">Projetos</Link>,
    },
    {
      key: "registerProject",
      icon: (
        <Link to="/">
          <FormOutlined style={{ color: "black" }} />
        </Link>
      ),
      label: <Link to="/register-projects">Cadastrar projeto</Link>,
    },
    {
      key: "profile",
      icon: (
        <Link to="/">
          <UserOutlined style={{ color: "black" }} />
        </Link>
      ),
      label: <Link to="/perfil">Perfil</Link>,
    },
    // {
    //   key: "home",
    //   icon: (
    //     <Link to="/">
    //       <HomeOutlined />
    //     </Link>
    //   ),
    //   label: <Link to="/home">{t("home.HOME")}</Link>,
    // },

    // {
    //   key: "home",
    //   icon: (
    //     <Link to="/">
    //       <HomeOutlined />
    //     </Link>
    //   ),
    //   label: <Link to="/home">{t("home.HOME")}</Link>,
    // },
  ];

  return (
    <LayoutMain>
      <HeaderLayout mobile={widthScreen < 550} />
      <Layout>
        <Sider
          collapsible
          collapsed={widthScreen < 550 || collapsed}
          collapsedWidth={80}
          onCollapse={(value) => setCollapsed(value)}
          theme={"light" as any}
          trigger={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          width={200}
          style={{ background: colorBgContainer }}
        >
          <MenuList
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            inlineCollapsed
            items={items}
          />
        </Sider>
        <StyledContent style={{ padding: "15px" }}>{children}</StyledContent>
      </Layout>
    </LayoutMain>
  );
};
