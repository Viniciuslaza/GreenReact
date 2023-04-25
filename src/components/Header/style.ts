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
import { Header } from "antd/es/layout/layout";

export const StyledHeader = styled(Header)`
  &&& {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    padding: 0rem 1.5rem;

    a {
      line-height: normal;
    }

    .ant-typography {
      font-weight: bold;
      margin-bottom: 0px;
      margin-right: 1.5rem;
    }

    .ant-avatar {
      margin-right: 0.5rem;
    }
  }
`;
