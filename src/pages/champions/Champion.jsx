import { useEffect } from 'react';
import ChampionList from '../../components/champions/ChampionList';
import { ChampionPage, Styledtop } from './championstyle';

const Champion = () => {
    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <ChampionPage>
            <div className="inner">
                <Styledtop>
                    챔피언을 <br />
                    <b>선택하세요</b> <br /> 140여 명의 챔피언 중 자신의 플레이 스타일에 어울리는
                    챔피언을 찾아보세요. 한 명의 챔피언을 완<br />
                    벽히 익히거나 모든 챔피언을 사용해 볼 수도 있습니다.
                </Styledtop>
                <ChampionList />
            </div>
        </ChampionPage>
    );
};

export default Champion;
