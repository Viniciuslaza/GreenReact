/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-bitwise */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Card, Dropdown, MenuProps, Typography } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { deleteProject } from "services/dbFunctions";
import { ImageCard } from "./style";

const { Meta } = Card;

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  public?: boolean;
  user_id: string;
  title?: string;
  project_id: string;
  description?: string;
  image?: string;
  navigation: any;
  userInfo: any;
}

const CardHome: React.FC<Props> = ({
  user_id,
  title,
  project_id,
  description,
  image,
  navigation,
  userInfo,
}) => {
  const handleMenuClick: MenuProps["onClick"] = () => {
    deleteProject(project_id).then(() => {
      window.location.reload();
    });
  };

  const items: MenuProps["items"] = [
    {
      label: "Excluir projeto",
      key: "1",
      icon: <DeleteOutlined />,
      onClick: handleMenuClick,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Card
      style={{ width: "23.95%", margin: "5px", cursor: "pointer" }}
      cover={<ImageCard onClick={navigation} alt="example" src={image} />}
      actions={
        userInfo.user_id === user_id && [
          <EditOutlined key="edit" />,
          <Dropdown menu={menuProps} trigger={["click"]}>
            <EllipsisOutlined key="ellipsis" />
          </Dropdown>,
        ]
      }
    >
      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Meta title={title} description={description} />

        <Typography.Text
          onClick={navigation}
          style={{ textAlign: "right", marginTop: "7px", color: "blue" }}
        >
          ...Ver mais
        </Typography.Text>
      </div>
    </Card>
  );
};

export default CardHome;
