import { useState } from 'react';
import {
    CategoryImage,
    CategoryItem,
    ChampionCategories,
    ChampionContent,
    ChampionImage,
    ChampionSection,
    FeaturedChampion,
} from '../../pages/main/mainpageStyle';
import lineimgdata from '../../assets/api/Mainpagedata';

const ChampionSectionList = () => {
    const [currentChampion, setCurrentChampion] = useState(lineimgdata[0]);

    const handleCategoryClick = (champion) => {
        setCurrentChampion(champion);
    };

    return (
        <ChampionSection>
            <ChampionContent>
                <div className="wrap">
                    <h2>
                        챔피언을 <br />
                        <b>선택하세요</b>
                    </h2>
                    <p>
                        적진으로 돌격하거나 팀원을 보조하는 등, 소환사의 협곡에는 다양한 역할군이
                        있습니다.
                    </p>
                </div>

                <ChampionCategories>
                    {lineimgdata.map((champion, index) => (
                        <CategoryItem key={index} onClick={() => handleCategoryClick(champion)}>
                            <CategoryImage
                                src={`./images/content/main/line${index + 1}.png`}
                                alt=""
                            />
                            <strong>{champion.position}</strong>
                        </CategoryItem>
                    ))}
                </ChampionCategories>
            </ChampionContent>
            <FeaturedChampion>
                <ChampionImage>
                    <img src={currentChampion.imgurl} alt={currentChampion.name} />
                </ChampionImage>
                <strong>{currentChampion.name}</strong>
                <span>{currentChampion.text}</span>
            </FeaturedChampion>
        </ChampionSection>
    );
};

export default ChampionSectionList;
