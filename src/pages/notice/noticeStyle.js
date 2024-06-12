import styled, { keyframes } from 'styled-components';
export const NoticeWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
`;
export const NoticeInner = styled.div`
    width: 1600px;
    margin: auto;
    padding: 100px 20px;
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
    &:hover {
        background-color: #434343;
        animation: ${hoverEffect} 1s infinite;
    }
`;
export const ListItem = styled.li`
    width: 30%;
    height: 450px;
    margin-bottom: 30px;
    box-sizing: border-box;
    text-decoration: none;
    color: inherit;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;
export const NoticeLink = styled.a`
    display: flex;
    flex-direction: column;
    p {
        width: 100%;
        height: 280px;
    }
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
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
    strong {
        display: block;
        color: #c8aa6e;
        font-size: 17px;
        margin-top: 20px;
    }
`;
export const Month = styled.span`
    font-size: 17px;
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
