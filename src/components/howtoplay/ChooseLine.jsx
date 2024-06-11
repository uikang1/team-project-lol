import { useState } from 'react';
import { Line } from '../../pages/howToPlay/howtoplayStyle';

const ChooseLine = () => {
    const [tab, setTab] = useState(0);
    return (
        <Line>
            <div className="lines">
                <div className="title">
                    <h2>공격로 선택하기</h2>
                    <p>
                        게임에서 권장하는 팀 구성 포지션은 5가지입니다. 공격로마다 어울리는 챔피언과
                        역할군이 있습니다.
                        <br />
                        모두 플레이해 보거나 원하는 공격로를 선택하세요.
                    </p>
                    <div className="icons">
                        <p onClick={() => setTab(0)} className={tab === 0 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/8dac0c1318083c411c90f5f94feec17e84cb052b-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="상단 공격로"
                            />
                            <span>상단 공격로</span>
                        </p>
                        <p onClick={() => setTab(1)} className={tab === 1 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fa03a69b7c666230ae6945b83078e8a26027403a-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="정글"
                            />
                            <span>정글</span>
                        </p>
                        <p onClick={() => setTab(2)} className={tab === 2 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/62fcfeb7dcbb737f0cdaceb554daf4237f2c234a-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="중단 공격로"
                            />
                            <span>중단 공격로</span>
                        </p>
                        <p onClick={() => setTab(3)} className={tab === 3 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/1059c2aebd67b535ce1348fa0b72b453a46f6b5e-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="하단 공격로"
                            />
                            <span>하단 공격로</span>
                        </p>
                        <p onClick={() => setTab(4)} className={tab === 4 ? 'on' : ''}>
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d5dc4ba9080bf3c361e061afa69c9563aa38f5f9-980x980.png?auto=format&fit=crop&q=80&h=80&w=80&crop=center"
                                alt="서포터"
                            />
                            <span>서포터</span>
                        </p>
                    </div>
                </div>
                <div className="desc">
                    <div className={tab === 0 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fc8d0c8c803a8e91a1912df9054b3be90211a2d9-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="상단 공격로"
                        />
                        <p>상단 공격로</p>
                        <strong>
                            상단 공격로의 챔피언은 홀로 싸울 수 있는 강력한 챔피언입니다.
                            <br />
                            공격로를 지키고 적팀의 가장 강력한 챔피언을 노리는 것이 주된 임무입니다.
                        </strong>
                    </div>
                    <div className={tab === 1 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/eb84be329ef915096e908527267852ff26845bba-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="정글"
                        />
                        <p>정글</p>
                        <strong>
                            정글러는 사냥 전문가입니다. 공격로 사이를 민첩하게 숨어다니며
                            <br />
                            중요한 중립 몬스터를 사냥하고, 적이 긴장을 늦추는 순간을 노려
                            기습합니다.
                        </strong>
                    </div>
                    <div className={tab === 2 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/245d81d16cb5fef638753ce7d83e137a4d2aaca7-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="중단 공격로"
                        />
                        <p>중단 공격로</p>
                        <strong>
                            중단 공격로 챔피언은 순식간에 폭발적인 피해를 입힐 수 있으며 혼자일
                            때에도,
                            <br /> 팀 전투에서도 강력합니다. 항상 적을 공격하기 전에 신중히 기회를
                            노려야 하는 포지션입니다.
                        </strong>
                    </div>
                    <div className={tab === 3 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/87489b0e450b3fa59e176a3189c61c8eb9092c78-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="하단 공격로"
                        />
                        <p>하단 공격로</p>
                        <strong>
                            하단 공격로 챔피언은 팀의 주된 공격수입니다. 초반에는 약하기 때문에
                            보호를 받으며
                            <br />
                            골드와 경험치를 모아 팀을 승리로 이끌게 됩니다.
                        </strong>
                    </div>
                    <div className={tab === 4 ? 'on' : ''}>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ee41cd027bf8af85bebc07c8480b1304b793fc1e-3288x2100.png?auto=format&fit=fill&q=80&w=696"
                            alt="서포터"
                        />
                        <p>서포터</p>
                        <strong>
                            서포터 챔피언은 아군을 보호합니다. 아군이 죽지 않도록 보조하고 적을 더욱
                            쉽게
                            <br /> 처치할 수 있도록 도우며, 하단 공격로의 아군이 성장할 때까지
                            보호합니다.
                        </strong>
                    </div>
                </div>
            </div>
        </Line>
    );
};

export default ChooseLine;
