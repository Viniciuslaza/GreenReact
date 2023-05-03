import { Avatar, Row, Typography, Tooltip, Button } from "antd";
import React, { useEffect, useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";

import {
  getInfoUser,
  getNameLetters,
  stringToColor,
} from "provider/UserProvider";

import { getUserById, signOutUser } from "services/dbFunctions";
import { StyledHeader } from "./style";

const { Title } = Typography;

export const HeaderLayout = () => {
  const [userData, setUserData] = useState<any>();
  const data = getInfoUser();

  useEffect(() => {
    getUserById(data?.user_id).then((result: any) => {
      setUserData(result[0]);
    });
  }, []);

  const handleLogout = () => {
    signOutUser().then(() => {
      localStorage.removeItem("myCurrentUser");
      window.location.reload();
    });
  };

  return (
    <StyledHeader>
      <Row align="middle">
        <img
          style={{ paddingBottom: "10px" }}
          src="assets/logo.png"
          alt="logo"
        />
      </Row>
      <Row align="middle">
        {userData && (
          <Avatar
            style={{
              cursor: "pointer",
              backgroundColor: stringToColor(userData?.name),
            }}
            size="small"
          >
            {getNameLetters(userData?.name)}
          </Avatar>
        )}

        {userData && (
          <Title
            style={{
              fontWeight: "500",
              marginTop: "0px",
              color: stringToColor(userData?.name),
            }}
            level={5}
          >
            {userData?.name}
          </Title>
        )}
        <Tooltip title="Sair">
          <Button
            type="link"
            icon={<LogoutOutlined style={{ fontSize: 23 }} />}
            onClick={() => {
              handleLogout();
            }}
          />
        </Tooltip>
      </Row>
    </StyledHeader>
  );
};
