import { useState } from 'react';
import {
    CloseButton,
    NewsImage,
    NewsItem,
    NewsItems,
    NewsSection,
    customStyles,
} from '../../pages/main/mainpageStyle';
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const NewsSectioncontainer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [videoId, setVideoId] = useState('');

    const openModal = (id) => {
        setVideoId(id);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <NewsSection>
            <h2>주목할 만한 소식</h2>
            <NewsItems>
                <NewsItem>
                    <a
                        href="https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-14-9-notes/"
                        target="blank"
                    >
                        <NewsImage src="../images/content/main/newsimg1.jpg" alt="News 1" />

                        <b>게임업데이트 | </b>
                        <span>지난달</span>
                        <p>[#1] 14.9 패치노트(수정)</p>
                        <em>14.9 패치노트를 살펴보실 시간입니다!</em>
                    </a>
                </NewsItem>
                <NewsItem>
                    <NewsImage
                        src="../images/content/main/newsimg2.jpg"
                        alt="News 2"
                        onClick={() => openModal('BSRq-_p9I5Q')}
                    />

                    <b>e스포츠 | </b>
                    <span>2개월 전</span>
                    <p>2024 MSI 진행 방식 안내</p>
                    <em>플레이-인과 브래킷 스테이지 등에 대해 알려 드립니다.</em>
                </NewsItem>
                <NewsItem>
                    <a
                        href="https://www.leagueoflegends.com/ko-kr/news/dev/dev-arena/"
                        target="blank"
                    >
                        <NewsImage src="../images/content/main/newsimg3.jpg" alt="News 3" />

                        <b>개발자 블로그 | </b>
                        <span>12개월 전</span>
                        <p>[개발 인사이드] 아레나</p>
                        <em>리그 오브 레전드의 신규 게임 모드에 관한 내용을 요약해 드 립니다.</em>
                    </a>
                </NewsItem>
            </NewsItems>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Video Modal"
            >
                <YouTube videoId={videoId} />
                <CloseButton onClick={closeModal}>×</CloseButton>
            </Modal>
        </NewsSection>
    );
};

export default NewsSectioncontainer;
