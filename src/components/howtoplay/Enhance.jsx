import { EnhanceWrap } from '../../pages/howToPlay/howtoplayStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const Enhance = () => {
    return (
        <EnhanceWrap>
            <div className="con9">
                <h2>챔피언 강화하기</h2>
                <strong>
                    챔피언은 게임이 진행되는 동안 경험치를 얻어 레벨을 올리고 골드로 강력한 아이템을
                    구매해 성장합니다.
                    <br />이 두 가지에 집중해야 적팀을 압도하고 기지를 파괴할 수 있습니다.
                </strong>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <video
                            autoPlay
                            loop
                            muted
                            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8d49feeb42c45ac59b1d6cc1cae71d64ce0089f7.webm"
                        ></video>
                        <div className="icon">
                            <img
                                className="on"
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/04c0cbc07a2a5bf2374d4e6c547de0cd7c3ccde1-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/068c135cf8a490007e50f74bb3325b0511c92f1b-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c7df3dd081278445386681dae4600aaec02ea755-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                        </div>

                        <div className="text">
                            <h3>경험치 획득</h3>
                            <p>
                                챔피언이 일정량의 경험치를 얻으면 레벨이 올라가 스킬을 배우거나
                                강화할 수 있으며, 기본 능력치가 올라갑니다.
                                <br />적 유닛과 챔피언을 처치하거나, 처치에 관여하거나, 방어용
                                구조물을 파괴하면 경험치를 얻을 수 있습니다.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <video
                            autoPlay
                            loop
                            muted
                            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/9b52333c4284f3e8e95a36981ba76c11820e0ac5.webm"
                        ></video>
                        <div className="icon">
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/04c0cbc07a2a5bf2374d4e6c547de0cd7c3ccde1-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                            <img
                                className="on"
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/068c135cf8a490007e50f74bb3325b0511c92f1b-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c7df3dd081278445386681dae4600aaec02ea755-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                        </div>

                        <div className="text">
                            <h3>골드 획득</h3>
                            <p>
                                골드는 챔피언의 아이템을 구매할 수 있는 게임 내 화폐입니다. 적
                                유닛과 챔피언을 처치하거나, 처치에 관여하거나,
                                <br />
                                방어용 구조물을 파괴하거나, 골드 획득 아이템을 소지하면 골드를
                                획득할 수 있습니다.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7c790e73c1d817e57c174d4c4cdceb87d061e5b6-2560x1440.png?auto=format&fit=fill&q=80&w=1200"
                            alt=""
                        />
                        <div className="icon">
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/04c0cbc07a2a5bf2374d4e6c547de0cd7c3ccde1-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                            <img
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/068c135cf8a490007e50f74bb3325b0511c92f1b-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                            <img
                                className="on"
                                src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/c7df3dd081278445386681dae4600aaec02ea755-391x219.png?auto=format&fit=crop&q=80&h=67&w=119&crop=center"
                                alt=""
                            />
                        </div>

                        <div className="text">
                            <h3>상점</h3>
                            <p>
                                상점은 골드를 소모해 아이템을 구매하거나 판매할 수 있는 곳입니다.
                                상점은 소환사의 제단에서만 이용할 수 있습니다.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </EnhanceWrap>
    );
};

export default Enhance;
