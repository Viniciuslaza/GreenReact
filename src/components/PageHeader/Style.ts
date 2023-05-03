/* ---------------------------------------------------------------------------
 *
 *     Copyright © 2023 THALES. All Rights Reserved.
 *
 * ---------------------------------------------------------------------------
 * THIS SOFTWARE IS NOT DESIGNED OR INTENDED FOR USE OR RESALE AS ON-LINE
 * CONTROL EQUIPMENT IN HAZARDOUS ENVIRONMENTS REQUIRING FAIL-SAFE
 * PERFORMANCE, SUCH AS IN THE OPERATION OF NUCLEAR FACILITIES, AIRCRAFT
 * NAVIGATION OR COMMUNICATION SYSTEMS, AIR TRAFFIC CONTROL, DIRECT LIFE
 * SUPPORT MACHINES, OR WEAPONS SYSTEMS, IN WHICH THE FAILURE OF THE
 * SOFTWARE COULD LEAD DIRECTLY TO DEATH, PERSONAL INJURY, OR SEVERE
 * PHYSICAL OR ENVIRONMENTAL DAMAGE ("HIGH RISK ACTIVITIES"). THALES GROUP
 * SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTY OF FITNESS FOR
 * HIGH RISK ACTIVITIES.
 * ---------------------------------------------------------------------------
 */

import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const StyledHeader = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  .ant-typography {
    margin: 0px;
  }
  .anticon-arrow-left {
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: 20px;
  }
  .ant-btn-icon-only {
    margin-right: 1rem;
  }
`;

export const TitleHeader = styled(Title)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
