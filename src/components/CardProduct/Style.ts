import { Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

export const ImageCard = styled.img`
  max-width: 100%;
  max-height: 190px;
  height: auto;
  object-fit: cover;
`;

export const DivStyled = styled.div`
  margin-top: -10px;
  margin-left: -10px;
  color: rgb(255, 255, 255);
  width: 120px;
  height: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 11px;
  font-size: 12px;
  font-weight: 500;
  background-color: rgb(245, 61, 87);
`;
export const PriceStyled = styled(Text)`
  display: block;
  white-space: nowrap;
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 5px;
  color: rgb(0, 0, 0);
`;

export const LocationStyled = styled(Text)`
  font-size: 12px;
  text-decoration: none;
  font-family: Poppins, sans-serif;
  padding-right: 7px;
`;
