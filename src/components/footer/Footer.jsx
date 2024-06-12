import FooterList from './footerList/FooterList';
import FooterSite from './footerSite/FooterSite';
import { FooterContainer } from './FooterStyle';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="inner">
                <FooterSite />
                <p className="footerLogo">
                    <a href="#">
                        <img src="../images/common/footerLogo.png" alt="RiotGames" />
                    </a>
                </p>
                <p>
                    &trade;&&copy; 2024 Riot Games, Inc. League of Legends and all related logos,
                    characters, names and distinctive <br /> likenesses thereof are exclusive
                    property of Riot Games, Inc. All Rights Reserved.
                </p>
                <p>
                    라이엇게임즈코리아 유한회사 서울특별시 강남구 테헤란로 521 30층
                    (삼성동,파르나스타워)
                </p>
                <p className="info">
                    <span>대표자 : 조혁진</span>
                    <span>대표전화 : 02-3454-1560</span>
                    <span>FAX : 02-3454-1565</span>
                    <span>사업자등록번호 : 120-87-68488</span>
                </p>
                <p>통신판매업신고 : 2011-서울강남-02718</p>
                <FooterList />
                <div className="kr-Rating">
                    <img src="../images/common/kr-Rating.png" alt="kr-Rating" />
                </div>
            </div>
        </FooterContainer>
    );
};

export default Footer;
