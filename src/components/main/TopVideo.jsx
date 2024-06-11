import { Link, useNavigate } from 'react-router-dom';
import { PlayButton, Top, VideoBackground } from '../../pages/main/mainpageStyle';
import { useSelector } from 'react-redux';

const TopVideo = () => {
    const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const onGo = () => {
        if (!authed) {
            navigate('/join');
        } else {
            window.open('https://download.kr.riotgames.com/league');
        }
    };
    return (
        <Top>
            <VideoBackground autoPlay loop muted>
                <source
                    src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm"
                    type="video/mp4"
                />
            </VideoBackground>
            <h2>
                <img src="./images/common/lol_logo.png" alt="League of Legends" />
            </h2>
            <PlayButton onClick={onGo}>무료로 플레이하기</PlayButton>
        </Top>
    );
};

export default TopVideo;
