import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import BannerAnimation from '../Molecules/BannerAnimation';

export default function Profile() {
    const [isAnimation, setIsAnimation] = useState(false);

    const handleAnimation = (action: 'open' | 'close') => {
        if (action === 'open') {
            setIsAnimation(true);
        } else if (action === 'close') {
            setIsAnimation(false);
        }
    };

    return (
        <ProfileContainer>
            <h2>소개글</h2>
            <Avatar
                src='https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_1280.jpg'
                alt='teacher_avatar'
            />
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, quos et laboriosam omnis, eum voluptates assumenda
                voluptate repellendus ipsam, rem officia dolorem aspernatur ad?
                Minus quibusdam iusto tempore sequi illum.
            </span>

            {/* animation banner */}
            {/* 클릭 시 콘텐츠가 다른 요소를 밀어내도록 */}

            <BannerAnimation
                isAnimation={isAnimation}
                handleAnimation={(action) => handleAnimation(action)}
            />

            {/* modal Animation */}
            {isAnimation && (
                <Modal>
                    <ModalContent>
                        <Content>모달창</Content>
                        <p>서브 콘텐츠 </p>
                        <Avatar
                            src='https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_1280.jpg'
                            alt='items'
                        />
                        <ModalCloseButton
                            onClick={() => handleAnimation('close')}
                        >
                            &times;
                        </ModalCloseButton>
                    </ModalContent>
                </Modal>
            )}
        </ProfileContainer>
    );
}

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem;
`;

const Avatar = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`;

// modal
const Content = styled.span`
    margin-top: 1rem;
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;

const ModalContent = styled.div`
    position: relative;
    background-color: white;
    padding: 2rem;
    border-radius: 4px;
`;

const ModalCloseButton = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
`;
