import { HowToPlayContainer } from '../howToPlay/howtoplayStyle';
import 'swiper/css';
import 'swiper/css/navigation';
import GameUpdate from '../../components/howtoplay/GameUpdate';
import GameInfo from '../../components/howtoplay/GameInfo';
import GamePlay from '../../components/howtoplay/GamePlay';
import ChooseLine from '../../components/howtoplay/ChooseLine';
import Enhance from '../../components/howtoplay/Enhance';
import UseSkills from '../../components/howtoplay/UseSkills';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HowToPlay = () => {
    const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const onGo = () => {
        if (!authed) {
            navigate('/join');
        } else {
            window.open('https://download.kr.riotgames.com/league');
        }
    };
    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <HowToPlayContainer>
            <GameUpdate />
            <GameInfo />
            <GamePlay />
            <ChooseLine />
            <Enhance />
            <UseSkills />
            <div className="freePlay">
                <p>
                    <button onClick={onGo}>무료로 플레이하기</button>
                </p>
            </div>
        </HowToPlayContainer>
    );
};

export default HowToPlay;
