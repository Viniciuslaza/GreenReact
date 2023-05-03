/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import { Breadcrumb, Typography } from "antd";
import MenuBar from "components/MenuBar/menuBar";
import { DisplayPage, LayoutMain } from "components/MenuBar/style";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProjectById } from "services/dbFunctions";
import { PageHeader } from "components/PageHeader";
import { StyledImage, StyledImageDiv } from "./Style";

const Detail: React.FC = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    getProjectById(id).then((result: any) => {
      setProject(result);
    });
  }, [id]);

  return (
    <>
      <Breadcrumb style={{ paddingBottom: "10px" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{id}</Breadcrumb.Item>
      </Breadcrumb>
      <DisplayPage>
        <LayoutMain>
          <StyledImageDiv>
            <StyledImage src={project?.image} />
          </StyledImageDiv>
          <Typography.Title style={{ textAlign: "center" }}>
            {project?.title}
          </Typography.Title>
          <Typography.Text style={{ textAlign: "center" }}>
            {project?.description}
          </Typography.Text>
        </LayoutMain>
      </DisplayPage>
    </>
  );
};

export default Detail;
