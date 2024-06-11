import { Update } from '../../pages/howToPlay/howtoplayStyle';

const GameUpdate = () => {
    return (
        <Update>
            <div className="inner">
                <strong>게임 업데이트</strong>
                <h2>
                    2024 시즌
                    <br />
                    업데이트
                </h2>
                <p>
                    2024 시즌에서는 이 페이지의 일부 이미지와 세부 사항이 정확하지 않을 수 있습니다.
                    <br />
                    2024 시즌 게임플레이 미리보기를 통해 최신 정보를 확인하세요.
                </p>
                <p>
                    <a href="https://www.leagueoflegends.com/ko-kr/news/game-updates/2024-gameplay-preview/">
                        <button>더 알아보기</button>
                    </a>
                </p>
            </div>
        </Update>
    );
};

export default GameUpdate;
