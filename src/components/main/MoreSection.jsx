import { useState } from 'react';
import Modal from 'react-modal';
import {
    InfoImage,
    InfoItem,
    InfoItems,
    Inner,
    MoreSecions,
    customStyles,
} from '../../pages/main/mainpageStyle';

const MoreSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    const openModal = (videoUrl) => {
        setCurrentVideoUrl(videoUrl);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    const onLink = () => {
        window.open(
            'https://teamfighttactics.leagueoflegends.com/ko-kr/news/esports/announcing-the-inkborn-fables-tacticians-crown/'
        );
    };

    return (
        <MoreSecions>
            <Inner>
                <h2>
                    더 자세히 <br /> <b>알아보기</b>
                </h2>
                <InfoItems>
                    <InfoItem>
                        <InfoImage
                            src="../images/content/main/moreimg0.png"
                            alt="teamfighttactics"
                            onClick={onLink}
                        />
                        <span className="txt">E스포츠 | </span>
                        <span>2주전</span>
                        <p>먹물 우화 전략가의 왕관 공지</p>
                        <em>최후의 걸작을 향한 여러분만의 길을 그려보세요.</em>
                    </InfoItem>
                    <InfoItem>
                        <InfoImage
                            src="../images/content/main/moreimg1.png"
                            alt="MSI 2024"
                            onClick={() =>
                                openModal(
                                    'https://www.youtube.com/embed/I9cxbWUpsbg?si=xT8zCdNJ69qSVp5t'
                                )
                            }
                        />
                        <span className="txt">E스포츠 | </span>
                        <span>3주전</span>
                        <p>전설의 전당: Faker 트레일러</p>
                        <em>
                            전설이 되기 위해 필요한 건 무엇일까요? 지금 바로 전체 영상 트레일러를
                            감상하세요!
                        </em>
                    </InfoItem>
                    <InfoItem>
                        <InfoImage
                            src="../images/content/main/moreimg2.png"
                            alt="Faker"
                            onClick={() =>
                                openModal(
                                    'https://www.youtube.com/embed/FkbUdOabzWw?si=YD_E-bOz1AvsxLU1'
                                )
                            }
                        />
                        <span className="txt">E스포츠 | </span>
                        <span>지난달</span>
                        <p>2024 MSI 플레이-인 스테이지 오프닝 티저</p>
                        <em>Enter the Unknown. 오늘 2024 MSI의 막이 오릅니다!</em>
                    </InfoItem>
                </InfoItems>
            </Inner>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Video Modal"
            >
                <iframe
                    width="1024"
                    height="576"
                    src={currentVideoUrl}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </Modal>
        </MoreSecions>
    );
};

export default MoreSection;
