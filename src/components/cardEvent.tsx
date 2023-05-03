/* eslint-disable no-bitwise */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Card, Typography } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import { ImageCard } from "./style";

const { Meta } = Card;

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  public?: boolean;
  user_id: string;
  title?: string;
  description?: string;
  image?: string;
  navigation: any;
  userInfo: any;
}

const CardHome: React.FC<Props> = ({
  user_id,
  title,
  description,
  image,
  navigation,
  userInfo,
}) => (
  <Card
    onClick={navigation}
    style={{ width: "20.1%", margin: "5px", cursor: "pointer" }}
    cover={<ImageCard alt="example" src={image} />}
    // actions={
    //   userInfo.user_id === user_id && [
    //     <EditOutlined key="edit" />,
    //     <EllipsisOutlined key="ellipsis" />,
    //   ]
    // }
  >
    <div
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <Meta title={title} description={description} />
      <Typography.Text style={{ textAlign: "right", marginTop: "7px" }}>
        ...Ver mais
      </Typography.Text>
    </div>
  </Card>
);

export default CardHome;
