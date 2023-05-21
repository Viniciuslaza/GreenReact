

import React from "react";
import { Spin } from "antd";
import { StyledSpin } from "./Style";

type Props = {
  style?: React.CSSProperties;
  message?: string;
};

export const FullContentSpin = (props: Props) => {
  const { style, message } = props;
  return (
    <StyledSpin style={style}>
      <Spin size="large" />
      {message && <span>{message}</span>}
    </StyledSpin>
  );
};
