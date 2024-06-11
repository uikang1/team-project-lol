import { useState } from 'react';
import { UseSkillWrap } from '../../pages/howToPlay/howtoplayStyle';

const UseSkills = () => {
    const [tab, setTab] = useState(0);
    return (
        <UseSkillWrap>
            <div className="title">
                <h2>스킬사용하기</h2>
                <p>
                    챔피언은 5개의 주요 스킬과 2개의 소환사 주문을 사용할 수 있으며, 한 번에 최대
                    7개의 아이템을 <br /> 소지할 수 있습니다. 챔피언에게 가장 어울리는 스킬 순서,
                    소환사 주문, 아이템 빌드를 이용해
                    <br />
                    아군에게 도움이 되는 팀원이 되어 보세요.
                </p>
                <p>
                    <img
                        onClick={() => setTab(0)}
                        className={tab === 0 ? 'on' : ''}
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff2658009bc8d73062c75a46a6b1c9e4bcbdabe6-128x128.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                        alt="skill"
                    />
                    <img
                        onClick={() => setTab(1)}
                        className={tab === 1 ? 'on' : ''}
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8501790b1f7c7579085c4b775c29c811f686217e-128x128.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                        alt="spell"
                    />
                    <img
                        onClick={() => setTab(2)}
                        className={tab === 2 ? 'on' : ''}
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1e0edaf92ca0f188c7edb5b03f9a7a8b8a15bde2-128x128.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                        alt="item"
                    />
                </p>
            </div>

            <div className="desc">
                <div className={tab === 0 ? 'on' : ''}>
                    <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/0ba11ec8e7981f3b482e40cacd5780253d1f3bd3-1806x372.png?auto=format&fit=fill&q=80&w=696"
                        alt=""
                    />
                    <h3>스킬</h3>
                    <p>
                        대부분의 챔피언은 기본 지속 효과, 3개의 기본 스킬, 궁극기로 이루어진
                        <br />
                        5개의 고유 스킬을 가지고 있습니다. 스킬 사용 기본 키는 Q, W, E, R입니다.
                    </p>
                </div>
                <div className={tab === 1 ? 'on' : ''}>
                    <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3edf5b4e32d38eaab45eda9bdef7147703cf38d4-1806x372.png?auto=format&fit=fill&q=80&w=696"
                        alt=""
                    />
                    <h3>소환사 주문</h3>
                    <p>
                        소환사 주문은 고유 효과를 가진 스킬입니다. D, F 키로 사용할 수 있습니다.
                        <br />
                        소환사 주문에는 여러 가지가 있으며, 주로 점멸, 순간이동, 강타, 점화가
                        사용됩니다.
                    </p>
                </div>
                <div className={tab === 2 ? 'on' : ''}>
                    <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fb1e69d96d9b5d2fb20cad10985345cd6c795eed-1806x372.png?auto=format&fit=fill&q=80&w=696"
                        alt=""
                    />
                    <h3>아이템</h3>
                    <p>
                        아이템으로 이동 속도 및 피해량 증가, 스킬 재사용 대기시간 감소 등의 효과를
                        부여해
                        <br />
                        챔피언을 더 강력하게 만들 수 있습니다. 장신구와 달리, 골드를 소모해 구매해야
                        합니다.
                    </p>
                </div>
            </div>
        </UseSkillWrap>
    );
};

export default UseSkills;
