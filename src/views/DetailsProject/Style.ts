import { Image } from "antd";
import styled from "styled-components";

export const StyledImageDiv = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 18px;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;
