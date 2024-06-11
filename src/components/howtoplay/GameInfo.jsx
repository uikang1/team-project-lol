import { GameInfoWrap } from '../../pages/howToPlay/howtoplayStyle';

const GameInfo = () => {
    return (
        <GameInfoWrap>
            <div className="basicInfo">
                <div className="inner">
                    <strong>소환사의 협곡에 오신 것을 환영합니다</strong>
                    <h2>기본 정보를 배워 보세요</h2>
                    <p>
                        우선 리그 오브 레전드의 기본부터 알아보겠습니다.
                        <br />
                        아래 가이드를 통해 가장 인기 있는 게임 모드를 간략히 배워 보세요.
                    </p>
                </div>
            </div>
            <div className="pic"></div>
            <div className="video">
                <video
                    src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/4e93ce961e97e3b09785aee6a5c3f9a62ce3a3ab.webm"
                    autoPlay
                    loop
                    muted
                ></video>
                <div className="desc">
                    <h2>리그 오브 레전드란?</h2>
                    <p>
                        리그 오브 레전드는 5명의 강력한 챔피언으로 구성된 양 팀이 서로의 기지를
                        파괴하기 위해 치열한 사투를 벌이는
                        <br />
                        전략 게임입니다. 140여 명의 챔피언 중 하나를 선택해 화려한 플레이를 펼치며
                        적을 처치하고 포탑을 파괴해 <br />
                        승리를 쟁취하세요.
                    </p>
                </div>
            </div>
        </GameInfoWrap>
    );
};

export default GameInfo;
