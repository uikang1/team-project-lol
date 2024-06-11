import styled, { keyframes } from 'styled-components';

export const NoticeWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
`;

export const NoticeInner = styled.div`
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
`;

export const NoticeTop = styled.div`
    height: 340px;
    background-color: #0a1428;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 200px;
    box-sizing: border-box;

    h1 {
        font-size: 80px;
        font-weight: 700;
        font-style: italic;
        margin: 0;
    }

    p {
        font-size: 18px;
        margin: 10px 0 0;
    }
`;
export const ListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    align-items: center;
`;

export const hoverEffect = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1.5);
  }
  100% {
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0);
  }
`;

export const MoreButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    height: 40px;
    font-size: 16px;
    margin: 40px auto;
    cursor: pointer;
    border: none;
    border-radius: 25px;
    background-color: #2c5364;
    color: #fff;
    position: relative;
    overflow: hidden;
    transition: background-color 0.3s, box-shadow 0.3s;
    i {
        vertical-align: middle;
        margin-right: 5px;
    }

    &:hover {
        background-color: #434343;
        animation: ${hoverEffect} 1s infinite;
    }
`;

export const ListItem = styled.li`
    flex: 0 0 30%;
    margin: 1%;
`;

export const NoticeLink = styled.a`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
    width: 100%;
    height: 375px;
    margin-bottom: 20px;
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.02);
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
        color: #c8aa6e;
        font-size: 14px;
    }
`;

export const Month = styled.span`
    font-size: 14px;
    color: gray;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 5px 0;
`;

export const Text = styled.em`
    font-size: 14px;
`;
