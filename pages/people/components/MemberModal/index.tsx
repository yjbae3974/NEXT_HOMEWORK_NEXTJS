import React from 'react';
import { Modal, Button } from 'antd';
import Image from 'next/image';
import { PEOPLE_INFORMATION_TYPE } from 'types/people/people-information';
import { useMediaQuery } from 'react-responsive';

interface MemberModalProps {
    visible: boolean;
    member: PEOPLE_INFORMATION_TYPE | null;
    onClose: () => void;
}

const MemberModal: React.FC<MemberModalProps> = ({ visible, member, onClose }) => {
    const isMobile = useMediaQuery({ maxWidth: 820 });

    return (
        <Modal
            title={null} // 타이틀을 null로 설정하여 커스텀 헤더 사용
            open={visible}
            onOk={onClose}
            onCancel={onClose}
            footer={[
                <Button key="ok" type="primary" onClick={onClose}>
                    OK
                </Button>,
            ]}
            width={isMobile ? '90%' : '600px'} // 모바일에서는 모달이 더 작게 보이도록 설정
        >
            {member && (
                <>
                    {!isMobile &&
                        member.imgSrc && ( // 모바일이 아닐 때만 이미지 렌더링
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <Image
                                    src={member.imgSrc}
                                    alt={member.name}
                                    width={500}
                                    height={300}
                                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                                />
                            </div>
                        )}
                    <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{member.name}</h2>
                    <p>
                        <strong>학과:</strong> {member.department}
                    </p>
                    <p>
                        <strong>직급:</strong> {member.managementTeam || 'N/A'}
                    </p>
                    <p>
                        <strong>학번:</strong> {member.classOf}학번
                    </p>
                    <p>
                        <strong>추가 정보:</strong> {member.additionalInfo || '없음'}
                    </p>
                </>
            )}
        </Modal>
    );
};

export default MemberModal;
