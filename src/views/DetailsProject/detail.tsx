/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable arrow-body-style */
import MenuBar from "components/MenuBar/menuBar";
import { DisplayPage, LayoutMain } from "components/MenuBar/style";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById } from "services/dbFunctions";

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
      <DisplayPage>
        <LayoutMain>
          {project?.title}
          {project?.image}
          {project?.description}
        </LayoutMain>
      </DisplayPage>
    </>
  );
};

export default Detail;
