import styled from 'styled-components';

export const MainpageContainer = styled.div`
    .bottom {
        text-align: center;
        margin-bottom: 50px;
    }
`;
export const Inner = styled.div`
    width: 1600px;
    height: 100%;
    margin: 0 auto;
    position: relative;
`;

export const Top = styled.div`
    position: relative;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    padding-bottom: 100px; // 수정된 부분
    h2 {
        width: 500px;
        height: 200px;
        box-sizing: border-box;
        margin-bottom: 30px;
        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 640px;
    box-sizing: border-box;
    object-fit: cover;
    z-index: -1;
`;

export const Section = styled.section`
    padding: 80px 20px;
    text-align: center;
    background-image: ${({ backgroundImage }) => backgroundImage && `url(${backgroundImage})`};
    background-size: cover;
    background-position: center;
`;

export const ArenaSection = styled(Section)`
    height: 640px;
    background-image: url('../images/content/main/gamemod.png');
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    .titleWrap {
        /* background: pink; */
        display: block;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
    }
    h2 {
        font-size: 24px;
        text-indent: 10px;
    }
    h3 {
        font-size: 64px;
        font-weight: 700;
        font-style: italic;
    }
    p {
        font-size: 18px;
        margin-top: 16px;
        margin-bottom: 50px;
        text-indent: 10px;
    }
    a {
        margin-left: 10px;
    }
`;
export const NewsSection = styled(Section)`
    text-align: left;
    h2 {
        font-size: 32px;
        font-weight: 700;
        color: #333;
        margin-bottom: 30px;
        font-style: italic;
        text-indent: 20px;
    }
    b {
        color: #c8aa6e;
        font-size: 14px;
    }
    span {
        font-size: 14px;
        color: #666;
    }
    p {
        font-size: 20px;
        font-weight: 700;
        margin-top: 8px;
        margin-bottom: 10px;
    }
    em {
        font-size: 18px;
        color: #333;
    }
`;
export const ChampionSection = styled(Section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-image: url('../images/content/main/img2.png');
    background-size: cover;
    background-position: center;
    height: 900px;
    color: #333;
    .wrap {
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 100px;
    }

    h2 {
        font-size: 22px;
        line-height: 1.3;
        margin-bottom: 30px;
        b {
            font-size: 80px;
            font-weight: 700;
        }
    }
    p {
        font-size: 18px;
    }
`;
export const ChampionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

export const NewsItems = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`;

export const NewsItem = styled.div`
    width: 30%;
`;

export const NewsImage = styled.img`
    width: 100%;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    &:hover {
        transform: scale(1.02);
    }
`;
export const ChampionCategories = styled.ul`
    margin: 50px 0 50px 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
    padding: 0;
`;

export const CategoryItem = styled.li`
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 30px;
    strong {
        display: block;
        font-size: 17px;
        font-weight: 700;
        color: #333;
    }
`;
export const CategoryImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 10px;
`;
export const FeaturedChampion = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 100px;
    strong {
        font-size: 30px;
        font-weight: 700;
        display: block;
    }
    span {
        font-size: 16px;
        display: block;
    }
`;

export const ChampionImage = styled.p`
    width: 550px;
    height: 550px;
    box-sizing: border-box;
    margin-right: 20px;
    img {
        width: 100%;
        height: 100%;
    }
`;
export const MapSections = styled.section`
    width: 100%;
    height: 1000px;
    box-sizing: border-box;
    text-align: center;
    background-image: url('../images/content/main/gameplayback.png');
    background-size: cover;
    background-position: center;
    color: #fff;
`;
export const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const MapContent = styled.div`
    width: 600px;
    height: 400px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    h2 {
        font-size: 22px;
        line-height: 1.3;
    }
    b {
        font-size: 80px;
        font-weight: 700;
    }
`;
export const StyledLink = styled.span`
    display: block;
    width: 150px;
    height: 50px;
    box-sizing: border-box;
    margin: 30px auto 60px;
    line-height: 50px;
    background-color: #c8aa6e;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        background-color: #005ba1;
    }
`;

export const Video = styled.div`
    width: 550px;
    height: 550px;
    box-sizing: border-box;
    border-radius: 50%;
    margin-bottom: 30px;
    video {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        border-radius: 50%;
        pointer-events: none;
    }
`;

export const PlayModes = styled.div`
    display: flex;
    justify-content: center;
`;

export const Ul = styled.ul`
    width: 600px;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const Li = styled.li`
    width: 120px;
    height: 150px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        width: 80px;
        height: 80px;
        box-sizing: border-box;
    }
    img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
    }
    cursor: pointer;
    strong {
        display: block;
        margin-top: 20px;
        text-align: center;
    }
`;

export const PlayDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 800px;
    h3 {
        font-size: 22px;
        font-weight: 700;
        margin: 20px 0;
    }
    p {
        width: 500px;
        word-break: keep-all;
        font-size: 17px;
    }
`;
export const MoreSecions = styled.div`
    text-align: center;
    padding: 100px 0;
    h2 {
        font-size: 22px;
        line-height: 1.3;
        margin-bottom: 100px;
        b {
            font-size: 80px;
            font-weight: 700;
        }
    }
`;
export const InfoItems = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const InfoItem = styled.div`
    width: 30%;
    text-align: left;
    cursor: pointer;
    .txt {
        color: #c8aa6e;
        font-weight: 700;
    }
    p {
        margin-bottom: 10px;
        margin-top: 10px;
        font-weight: 700;
        font-size: 22px;
    }
    em {
        font-size: 18px;
        font-weight: 500;
        word-break: keep-all;
    }
`;

export const InfoImage = styled.img`
    width: 100%;
    margin-bottom: 30px;
    transition: transform 0.4s ease-in-out;
    &:hover {
        transform: scale(1.02);
    }
`;

export const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#000',
        border: 'none',
    },
};

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const PlayButton1 = styled.button`
    position: absolute;
    padding: 13px 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #c8aa6e;
    color: white;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        background-color: #005ba1;
    }
`;

export const PlayButton = styled.button`
    background-color: #c8aa6e;
    color: white;
    font-size: 18px;
    padding: 13px 25px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    text-transform: uppercase;
    transition: 0.4s;
    cursor: pointer;
    display: block;
    &:hover {
        background-color: #16b3d8;
    }
`;
export const VideoBackgrounds = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;
