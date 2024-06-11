import styled from 'styled-components';

import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaReddit } from 'react-icons/fa';

// Footer.jsx
export const FooterContainer = styled.div`
    width: 100%;
    height: 500px;
    padding: 0 0 48px;
    background-color: #111;
    text-align: center;
    p {
        font-size: 13px;
        color: #7e7e7e;
        img {
            width: 100px;
            height: 30px;
            filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(46deg) brightness(104%)
                contrast(101%);
        }
    }
    .footerLogo {
        padding: 24px 0 20px;
    }
    .info {
        span {
            &::after {
                display: inline-block;
                content: '';
                width: 1px;
                height: 13px;
                background: #7e7e7e;
                vertical-align: middle;
                margin: 5px;
            }
            &:last-child::after {
                display: none;
            }
        }
    }
    .gameRating {
        display: inline-block;
        padding: 8px 12px;
        border-radius: 8px;
        background-color: #292929;
    }
`;

export const FooterSiteUl = styled.ul`
    padding: 18px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        width: 32px;
        height: 32px;
        margin: 6px;
        background-color: rgba(128, 128, 128, 0.2);
        position: relative;
        box-sizing: border-box;
        border-radius: 12px;
    }
`;

export const FooterListUl = styled.ul`
    padding: 24px 0 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
        a {
            border-radius: 5px;
            transition: 0.2s linear;
            padding: 8px 16px;
            font-size: 13px;
            color: #f9f9f9;
            &:hover {
                background-color: rgba(128, 128, 128, 0.2);
            }
        }
    }
`;

export const Youtube = styled(FaYoutube)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const Instagram = styled(FaInstagram)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const Facebook = styled(FaFacebook)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const Twitter = styled(FaTwitter)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const Reddit = styled(FaReddit)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
