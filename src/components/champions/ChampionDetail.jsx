import { useParams } from 'react-router-dom';
import championsDetailData from '../../assets/api/ChampionsDetail';
import { useState, useEffect } from 'react';
import {
    ChampionDetailContainer,
    ChampionImageContainer,
    Description,
    Name,
    SkillIcon,
    SkillItem,
    SkillList,
    TextOverlay,
    Title,
    Video,
    ChampionInner,
    LayoutContainer,
    SkinList,
    SkinItem,
    SkillName,
    Skindiv,
} from '../../pages/champions/championstyle';

const ChampionDetail = () => {
    const { id } = useParams();
    const champion = championsDetailData.find((champ) => champ.id.toString() === id);
    const [activeVideo, setActiveVideo] = useState(champion.skills[0].video);

    const [activeSkin, setActiveSkin] = useState(champion.skins[0].image);

    useEffect(() => {
        setActiveSkin(champion.skins[0].image);
    }, [champion.skins]);

    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <ChampionDetailContainer>
            <ChampionImageContainer>
                <div className="bg"></div>
                <img src={champion.bimgurl} alt={champion.name} />

                <TextOverlay>
                    <Title>{champion.title}</Title>
                    <Name>{champion.name}</Name>
                    <Description>{champion.desc}</Description>
                </TextOverlay>
            </ChampionImageContainer>
            <ChampionInner>
                <LayoutContainer>
                    <div>
                        <h2>스킬</h2>
                        <SkillList>
                            {champion.skills.map((skill, index) => (
                                <SkillItem
                                    key={skill.name}
                                    onClick={() => setActiveVideo(skill.video)}
                                >
                                    <SkillIcon src={skill.image} alt={skill.name} />
                                    <SkillName>{skill.name}</SkillName>
                                </SkillItem>
                            ))}
                        </SkillList>
                    </div>
                    <div>
                        {activeVideo && <Video src={activeVideo} controls autoPlay muted={true} />}
                    </div>
                </LayoutContainer>
                <Skindiv>
                    <h2>이용 가능 스킨</h2>

                    <img src={activeSkin} alt="Active Skin" />
                    <SkinList>
                        {champion.skins.map((skin, index) => (
                            <SkinItem key={skin.name} onClick={() => setActiveSkin(skin.image)}>
                                <img src={skin.image} alt={skin.name} />
                            </SkinItem>
                        ))}
                    </SkinList>
                </Skindiv>
            </ChampionInner>
        </ChampionDetailContainer>
    );
};

export default ChampionDetail;
