/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { Layout, theme } from "antd";
import CardHome from "components/cardEvent";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects, getUserById } from "services/dbFunctions";

import { getInfoUser } from "provider/UserProvider";
import { LayoutMain, StyledContent } from "./homeStyle";

const Home: React.FC = () => {
  const [screenW, setScreenW] = useState(window.screen.width);
  window.addEventListener("resize", () => {
    setScreenW(window.screen.width);
  });
  const [projects, setProjects] = useState<any[]>([]);
  const navigate = useNavigate();
  const data = getInfoUser();
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    getProjects().then((result) => {
      setProjects(result);
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
                    user_id={item.user}
                    userInfo={userData}
                    project_id={item.id}
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
