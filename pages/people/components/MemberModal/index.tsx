import React from "react";
import { Modal, Button, Card, Row, Col } from "antd";
import { PEOPLE_INFORMATION_TYPE } from "types/people/people-information";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { AspectRatio } from "@chakra-ui/react";

const { Meta } = Card;

// 카드 컴포넌트 스타일 정의
const cardStyle = {
  width: "100%", // Col 내에서 카드의 너비를 100%로 설정
  marginBottom: 20, // 카드 간의 간격
};

const NEXT_ORANGE = "#F7941E";
const NEXT_LIGHT_ORANGE = "#FFEBD4";

interface MemberModalProps {
  visible: boolean;
  member: PEOPLE_INFORMATION_TYPE | null;
  onClose: () => void;
}

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 20px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin-top: 30px;
`;

const TeamPositionTag = styled.div`
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  background-color: ${NEXT_LIGHT_ORANGE};
  color: ${NEXT_ORANGE};
  padding: 7px 14px;
  height: 33px;
`;

const NextTag = styled.div`
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid ${NEXT_ORANGE};
  color: ${NEXT_ORANGE};
  padding: 5px 20px;
  height: 33px;
  margin-right: 10px;
`;

const InfoWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  height: 22px;
  margin-right: 10px;
`;

const Label = styled.strong`
  margin-right: 5px;
  color: ${NEXT_ORANGE};
`;

const Value = styled.span`
  font-weight: normal;
  color: #2b2b2b;
  font-weight: 500;
`;
const NextDescription = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 18px;
`;

const ActivityCard = ({ activity, member }) => (
  <Card
    hoverable
    style={cardStyle}
    cover={
      <img
        alt={`${activity} activity`}
        src={getImgSrc(activity, member[activity])}
        style={{ aspectRatio: "4/3", objectFit: "cover" }}
      />
    }
  >
    <Meta title={activity.charAt(0).toUpperCase() + activity.slice(1)} />
  </Card>
);

const getImgSrc = (activityName, teamNum) => {
  return `/images/activities/12genactivities/${activityName}/${teamNum}.png`;
};

const MemberActivities = ({ member }) => {
  return (
    <Row gutter={16} justify="flex-start" wrap={true}>
      {["donguldongul", "hackathon", "productDay", "demoDay"].map(
        (activity) =>
          member &&
          member[activity] && (
            <Col xs={12} sm={8} md={8} lg={8} key={activity}>
              <ActivityCard activity={activity} member={member} />
            </Col>
          )
      )}
    </Row>
  );
};

const MemberModal: React.FC<MemberModalProps> = ({
  visible,
  member,
  onClose,
}) => {
  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <Modal
      title={null}
      open={visible}
      onOk={onClose}
      onCancel={onClose}
      footer={[<></>]}
      width={isMobile ? "90%" : "600px"}
    >
      {member && (
        <>
          {!isMobile && member.imgSrc && (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <ProfileImage src={member.imgSrc} alt={member.name} />
            </div>
          )}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              {member.name}
            </h2>
            <TeamPositionTag>{member.managementTeam}</TeamPositionTag>
            {member.linkedIn && (
              <a href={member.linkedIn} target="/blank">
                <img
                  src="/images/membermodal/linkedin.png"
                  style={{ width: "33px", height: "33px" }}
                  alt=""
                />
              </a>
            )}
          </div>
          <InfoWrapper>
            <InfoSection>
              <Icon src="/images/membermodal/학과icon.png" alt="학과 아이콘" />
              <Label>학과</Label>
              <Value>{member.department}</Value>
            </InfoSection>
            <InfoSection>
              <Icon src="/images/membermodal/학번icon.png" alt="학번 아이콘" />
              <Label>학번</Label>
              <Value>{member.classOf}학번</Value>
            </InfoSection>
          </InfoWrapper>
          <div style={{ marginTop: "55px", marginBottom: '46px' }}>
            <NextDescription>NEXT - Keyword</NextDescription>
            {member.nextTag &&
              member.nextTag.map((tag) => <NextTag key={tag}>{tag}</NextTag>)}
          </div>
          <div style={{marginBottom: '66px'}}>
            <NextDescription>NEXT 활동</NextDescription>
            <MemberActivities member={member} />
          </div>
        </>
      )}
    </Modal>
  );
};

export default MemberModal;
