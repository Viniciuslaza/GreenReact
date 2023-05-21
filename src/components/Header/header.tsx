/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Avatar, Row, Typography, Tooltip, Button } from "antd";
import React, { useEffect, useState } from "react";
import { LogoutOutlined } from "@ant-design/icons";

import {
  getInfoUser,
  getNameLetters,
  stringToColor,
} from "provider/UserProvider";

import { getUserById, signOutUser } from "services/dbFunctions";
import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";

const { Title } = Typography;

type HeaderProps = {
  mobile: boolean;
};

export const HeaderLayout: React.FC<HeaderProps> = ({ mobile }) => {
  const [userData, setUserData] = useState<any>();
  const data = getInfoUser();
  const navigate = useNavigate();

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
          onClick={() => {
            navigate("/");
          }}
          style={{ paddingBottom: "10px", cursor: "pointer" }}
          src="assets/logo.png"
          alt="logo"
        />
      </Row>
      <Row align="middle">
        {userData && !mobile && (
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

        {userData && !mobile && (
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
