import styled, { keyframes } from 'styled-components';

export const EsportWrap = styled.div`
    width: 100%;
    box-sizing: border-box;
    div {
        margin: auto;
    }
`;

export const EsportInner = styled.div`
    padding: 100px 0;
    width: 1400px;
`;

export const EsportTop = styled.div`
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

export const Esporinner = styled.div`
    width: 1400px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-around;
`;

export const Item = styled.li`
    width: 440px;
    margin: 10px;
    padding: 10px;
    box-sizing: border-box;
    cursor: pointer;
    b {
        color: #c8aa6e;
        font-size: 14px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    cursor: pointer;
    z-index: -10;
`;

export const PlayButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
`;

export const Title = styled.h2`
    font-size: 20px;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 15px;
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
    i {
        vertical-align: middle;
        margin-right: 5px;
    }

    &:hover {
        background-color: #434343;
        animation: ${hoverEffect} 1s infinite;
    }
`;

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    width: 80%;
    height: 80%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    background: none;
    color: #fff;
    font-size: 30px;
    cursor: pointer;
`;

export const IFrame = styled.iframe`
    margin: 0 auto;
`;
