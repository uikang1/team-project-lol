import styled from 'styled-components';

export const ChampionPage = styled.div`
    .inner {
        width: 1400px;
        margin: auto;
    }
`;
export const Styledtop = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    margin-bottom: 20px;
    margin-top: 30px;
    text-align: center;
    margin-bottom: 90px;

    b {
        font-size: 50px;
        font-weight: 700;
        color: #000;
    }

    br {
        margin-bottom: 10px;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    width: 310px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    &:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
`;

export const Descriptio = styled.p`
    color: #fff;
    background-color: #1a1a1a;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 8px;
    font-family: 'Arial', sans-serif;
    font-size: 0.9rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease-in-out;
    ${Item}:hover & {
        background-color: #333;
    }
`;
export const ChampionDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0a1428;
`;

export const ChampionImageContainer = styled.div`
    position: relative;
    width: 100%;
    /* max-width: 1920px; */
    .bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }
    img {
        width: 100%;
        height: 100%;
    }
`;

export const ChampionImage = styled.div``;

export const TextOverlay = styled.div`
    position: absolute;
    bottom: 30%;
    right: 55%;
    margin-left: 20px;
    color: #fff;
    text-align: left;
    padding: 20px;
`;

export const Title = styled.p`
    font-size: 40px;
    font-weight: 700;
    margin: 10px 0;
    color: #daa520;
`;

export const Name = styled.h2`
    font-size: 70px;
    font-weight: 700;
    margin: 10px 0;
    color: #fff;
`;

export const Description = styled.em`
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
    color: #fff;
`;

export const ChampionInner = styled.div`
    padding: 20px;
`;

export const LayoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 100px;
    margin-bottom: 100px;

    h2 {
        font-size: 40px;
        color: #fff;
        font-weight: 700;
        text-align: center;
    }
`;

export const SkillList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    margin: 20px 0;
`;

export const SkillItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-top: 320px;
    align-items: center;
    cursor: pointer;
`;

export const SkillIcon = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
`;

export const SkillName = styled.span`
    font-size: 14px;
    color: #fff;
`;
export const Video = styled.video`
    width: 700px;
    height: 500px;
    pointer-events: none;
    &::-webkit-media-controls {
        display: none;
    }
`;

export const Skindiv = styled.div`
    h2 {
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        margin-bottom: 20px;
    }
`;

export const SkinList = styled.ul`
    display: flex;

    justify-content: center;
    padding: 0;
    margin: 20px 0;
`;

export const SkinItem = styled.li`
    width: 120px;
    height: 120px;
    margin: 10px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }
`;
