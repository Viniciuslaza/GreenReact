/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Progress,
  Row,
  Typography,
} from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { DisplayPage, LayoutMain } from "components/MenuBar/style";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectById } from "services/dbFunctions";

import { FullContentSpin } from "components/FullContentSpin";
import { getNameLetters, stringToColor } from "provider/UserProvider";
import { StyledImage, StyledImageDiv } from "./Style";

const Detail: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { Title } = Typography;

  const [percent, setPercent] = useState<number>(0);

  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };

  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };

  useEffect(() => {
    setLoading(true);
    getProjectById(id)
      .then((result: any) => {
        setProject(result);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (isLoading)
    return <FullContentSpin style={{ height: "calc(100vh - 3.5rem)" }} />;
  return (
    <>
      <Breadcrumb style={{ paddingBottom: "10px" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Detalhe do projeto</Breadcrumb.Item>
      </Breadcrumb>
      <DisplayPage>
        <LayoutMain>
          <StyledImageDiv>
            <StyledImage src={project?.image} />
          </StyledImageDiv>
          {project && (
            <Row
              onClick={() => navigate(`/perfil/${project?.user_hash_id}`)}
              style={{ marginTop: "10px" }}
              align="middle"
            >
              <Title
                style={{
                  fontWeight: "500",
                  marginTop: "7px",
                  marginRight: "10px",
                }}
                level={5}
              >
                Publicado por:
              </Title>
              <Row
                style={{
                  backgroundColor: "#b0bece",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <Title
                  style={{
                    fontWeight: "400",
                    marginTop: "7px",
                    marginRight: "5px",
                    paddingLeft: "15px",
                  }}
                  level={5}
                >
                  {project?.userName}
                </Title>
                <Avatar
                  style={{
                    marginTop: "8px",
                    backgroundColor: stringToColor(project?.userName),
                    marginRight: "15px",
                  }}
                  size="small"
                >
                  {getNameLetters(project?.userName)}
                </Avatar>
              </Row>
            </Row>
          )}
          {project?.area?.name && (
            <Row style={{ marginTop: "10px" }} align="middle">
              <Title
                style={{
                  fontWeight: "500",
                  marginTop: "7px",
                  marginRight: "10px",
                }}
                level={5}
              >
                Area de atuação:
              </Title>
              <Row>
                <Title
                  style={{
                    fontWeight: "400",
                    marginTop: "7px",
                    marginRight: "5px",
                    paddingLeft: "15px",
                  }}
                  level={5}
                >
                  {project?.area?.name}
                </Title>
              </Row>
            </Row>
          )}
          <Typography.Title style={{ textAlign: "center" }}>
            {project?.title}
          </Typography.Title>
          <Typography.Text style={{ textAlign: "center" }}>
            {project?.description}
          </Typography.Text>
          <Typography.Text style={{ textAlign: "center" }}>
            <a href={project?.link}>{project?.link}</a>
          </Typography.Text>
          <Typography.Text style={{ marginTop: "20px", fontSize: "16px" }}>
            Quanto você gostou disso?
          </Typography.Text>
          <Progress percent={percent} />
          <Button.Group>
            <Button onClick={decline} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </Button.Group>
        </LayoutMain>
      </DisplayPage>
    </>
  );
};

export default Detail;
