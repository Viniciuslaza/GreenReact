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

import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Row, Skeleton, Tooltip } from "antd";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader, TitleHeader } from "./Style";

type Props = {
  title: string;
  rightContent?: ReactNode;
  backOption?: boolean;
};

export const PageHeader: React.FC<Props> = ({
  title,
  rightContent,
  backOption,
}) => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Row align="middle">
        {backOption && (
          <Button
            onClick={() => {
              navigate(-1);
            }}
            icon={<ArrowLeftOutlined />}
            type="link"
          />
        )}
        <Tooltip title={title}>
          <TitleHeader level={3}>
            {title ?? (
              <Skeleton
                paragraph={false}
                active
                title={{ width: 300, style: { height: 28, margin: 0 } }}
              />
            )}
          </TitleHeader>
        </Tooltip>
      </Row>
      {rightContent}
    </StyledHeader>
  );
};
