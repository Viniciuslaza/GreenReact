/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-bitwise */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from "react";
import { Card, Dropdown, MenuProps, Typography } from "antd";
import { EllipsisOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteProject, getImage } from "services/dbFunctions";
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
  const [renderImage, setRenderImage] = useState<string>();

  useEffect(() => {
    getImage("Projects", image, project_id).then((result) => {
      setRenderImage(result);
    });
  }, [image, project_id]);

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
      loading={!renderImage}
      style={{ width: "23.95%", margin: "5px", cursor: "pointer" }}
      cover={
        <ImageCard
          onClick={navigation}
          alt="example"
          src={
            renderImage ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98ey9M7Rf1-xyFDBxU1t7Bxwf7U44LsDzVUpR_kmm&s"
          }
        />
      }
      actions={
        userInfo?.id === user_id && [
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
