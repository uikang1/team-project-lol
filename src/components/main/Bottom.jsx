import { Link, useNavigate } from 'react-router-dom';
import { PlayButton1, VideoBackgrounds } from '../../pages/main/mainpageStyle';
import { useSelector } from 'react-redux';

const Bottom = () => {
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
        <div style={{ position: 'relative', overflow: 'hidden', height: 640 }}>
            <VideoBackgrounds autoPlay loop muted>
                <source
                    src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/1f5b2cf01a1cf2afa1ce61febee6e2e900808347.mp4"
                    type="video/mp4"
                />
            </VideoBackgrounds>
            <div className="bottom">
                <PlayButton1 onClick={onGo}>무료로 플레이하기</PlayButton1>
            </div>
        </div>
    );
};

export default Bottom;
