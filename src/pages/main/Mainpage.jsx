import { useEffect } from 'react';
import ArenaSectioncontainer from '../../components/main/ArenaSectioncontainer';
import Bottom from '../../components/main/Bottom';
import ChampionSectionList from '../../components/main/ChampionSectionList';
import MapSection from '../../components/main/MapSection';
import MoreSection from '../../components/main/MoreSection';
import NewsSectioncontainer from '../../components/main/NewsSectioncontainer';
import TopVideo from '../../components/main/TopVideo';

import { Inner, MainpageContainer } from './mainpageStyle';

const Mainpage = () => {
    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <MainpageContainer>
            <TopVideo />
            {/* 상단비디오 */}
            <ArenaSectioncontainer />
            {/* 게임모드 */}
            <Inner>
                <NewsSectioncontainer />
            </Inner>
            {/* 주목할만한소식 */}
            <Inner>
                <ChampionSectionList />
            </Inner>
            {/* 챔피언선택 */}
            <MapSection />
            {/* 다양하게 플레이 */}
            <MoreSection />
            {/* 더 자세하게 알아보기 */}
            <Bottom />
            {/* 무료로플레이하기 하단 */}
        </MainpageContainer>
    );
};

export default Mainpage;
