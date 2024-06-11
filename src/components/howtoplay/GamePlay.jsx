import { useState } from 'react';
import { GamePlayWrap } from '../../pages/howToPlay/howtoplayStyle';

const GamePlay = () => {
    const [tab1, setTab1] = useState(0);
    const [tab2, setTab2] = useState(0);
    const [tab3, setTab3] = useState(0);
    return (
        <GamePlayWrap>
            <div className="nexus">
                <div className="title">
                    <h2>기지 파괴하기</h2>
                    <p>
                        넥서스는 양 팀 기지의 심장부입니다. 적의 넥서스를 먼저 파괴하는 팀이
                        게임에서 승리합니다.
                    </p>
                    <div className="icons">
                        <p onClick={() => setTab1(0)} className={tab1 === 0 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3f70356e890d0f5858fe9851f6f4de859223bf89-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="아군 넥서스"
                            />
                            <span>아군 넥서스</span>
                        </p>
                        <p onClick={() => setTab1(1)} className={tab1 === 1 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/de5aec44fcea11a5320062399ff53b45bd76d060-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="적팀 넥서스"
                            />
                            <span>적팀 넥서스</span>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className={tab1 === 0 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d79ab89872173d65758e134c07ef0645f7a0e504-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="아군 넥서스"
                        />
                        <p>아군 넥서스</p>
                        <strong>
                            넥서스에서 미니언이 생성됩니다. 넥서스 뒤에 있는 소환사의 제단에서
                            체력과 마나를
                            <br /> 빠르게 회복하고 상점을 이용할 수 있습니다.
                        </strong>
                    </div>
                    <div className={tab1 === 1 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5bf342fa15ae8a7cc0eda852fdb0361c5d7dcbbf-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="적팀 넥서스"
                        />
                        <p>적팀 넥서스</p>
                        <strong>
                            적팀 기지에는 아군과 동일한 넥서스가 있습니다.
                            <br /> 적팀 넥서스를 파괴하면 게임에서 승리합니다.
                        </strong>
                    </div>
                </div>
            </div>
            <div className="attack">
                <div className="title">
                    <h2>공격로 장악하기</h2>
                    <p>
                        적팀 넥서스에 도달하려면 최소 1개의 공격로를 장악해야 합니다. 공격로에는
                        포탑과 억제기라는 방어용
                        <br />
                        구조물이 있습니다. 각 공격로에는 3개의 포탑과 1개의 억제기가 있으며,
                        넥서스는 2개의 포탑이 지키고 있습니다.
                    </p>
                    <div className="icons">
                        <p onClick={() => setTab2(0)} className={tab2 === 0 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c955eecea79c17e8f5bcd5b4108e22dc674ad389-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="포탑"
                            />
                            <span>포탑</span>
                        </p>
                        <p onClick={() => setTab2(1)} className={tab2 === 1 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d173c3455cefd58b2a5817d9f75653935eff1393-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="억제기"
                            />
                            <span>억제기</span>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className={tab2 === 0 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2c56d550aca55bcf28aeac0f2d9ecf35d7ff2c4f-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="포탑"
                        />
                        <p>포탑</p>
                        <strong>
                            포탑은 적 미니언과 챔피언을 공격하고, 아군이 전장의 안개로 가려진 지역을
                            볼 수 있게
                            <br /> 해 줍니다. 미니언 뒤에 서서 포탑을 공격하면 피해를 입지 않고
                            파괴할 수 있습니다.
                        </strong>
                    </div>
                    <div className={tab2 === 1 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/5bf342fa15ae8a7cc0eda852fdb0361c5d7dcbbf-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="억제기"
                        />
                        <p>억제기</p>
                        <strong>
                            각 억제기는 포탑이 보호하고 있습니다. 억제기가 파괴되면 해당 공격로에서
                            몇 분간
                            <br /> 슈퍼 미니언이 생성됩니다. 시간이 지나면 억제기가 재생성되며, 슈퍼
                            미니언 생성이 중단됩니다.
                        </strong>
                    </div>
                </div>
            </div>
            <div className="jungle">
                <div className="title">
                    <h2>정글 둘러보기</h2>
                    <p>
                        공격로 사이에 있는 정글에는 중립 몬스터와 정글 식물이 살고 있습니다. 가장
                        중요한 몬스터는 내셔 남작과
                        <br />
                        드래곤입니다. 이 유닛을 처치하면 팀 전체가 고유의 이로운 효과를 얻어 게임의
                        승세를
                        <br />
                        뒤집을 수도 있습니다.
                    </p>
                    <div className="icons">
                        <p onClick={() => setTab3(0)} className={tab3 === 0 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c5aa9d0609c03b92ebb854c29537f9d5b9afe49f-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="내셔 남작"
                            />
                            <span>내셔 남작</span>
                        </p>
                        <p onClick={() => setTab3(1)} className={tab3 === 1 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dd3af4418ea63af03ad11d0c065f66a282a3cd7d-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="드래곤"
                            />
                            <span>드래곤</span>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className={tab3 === 0 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ed4bef5c2369044d76cf535e038b6c1f8d323f13-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="내셔 남작"
                        />
                        <p>내셔 남작</p>
                        <strong>
                            내셔 남작은 정글에서 가장 강력한 몬스터입니다. 내셔 남작을 처치하면 해당
                            팀 전체가
                            <br />
                            공격력 및 주문력 증가, 귀환 강화 효과를 얻으며, 챔피언 근처의 미니언이
                            강력해집니다.
                        </strong>
                    </div>
                    <div className={tab3 === 1 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1faaf44ebe07ec29900a21db0810b130f4777342-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="드래곤"
                        />
                        <p>드래곤</p>
                        <strong>
                            드래곤은 처치 시 원소 종류에 따라 고유의 추가 효과를 부여하는 강력한
                            몬스터입니다.
                            <br /> 5종류의 원소 드래곤과 장로 드래곤으로 나뉩니다.
                        </strong>
                    </div>
                </div>
            </div>
        </GamePlayWrap>
    );
};

export default GamePlay;
