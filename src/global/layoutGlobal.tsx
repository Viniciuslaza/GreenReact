import { ReactElement, useEffect, useState } from "react";
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
  ShopOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { getUserById } from "services/dbFunctions";
import { getInfoUser } from "provider/UserProvider";
import { LayoutMain, MenuList, StyledContent } from "./Style";

export const LayoutGlobal = ({ children }: { children: ReactElement }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const data = getInfoUser();
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    getUserById(data?.user_id).then((result: any) => {
      setUserData(result[0]);
    });
  }, []);

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
    userData?.role !== "visitant" && {
      key: "registerProject",
      icon: (
        <Link to="/">
          <FormOutlined style={{ color: "black" }} />
        </Link>
      ),
      label: <Link to="/register-projects">Cadastrar projeto</Link>,
    },
    userData?.role !== "visitant" && {
      key: "products",
      icon: (
        <Link to="/">
          <ShopOutlined style={{ color: "black" }} />
        </Link>
      ),
      label: <Link to="/products">Produtos</Link>,
    },
    userData?.role !== "visitant" && {
      key: "registerProduct",
      icon: (
        <Link to="/">
          <ShoppingOutlined style={{ color: "black" }} />
        </Link>
      ),
      label: <Link to="/register-products">Cadastrar produto</Link>,
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
