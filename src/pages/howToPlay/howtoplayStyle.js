import styled from 'styled-components';

export const HowToPlayContainer = styled.div`
    .freePlay {
        height: 640px;
        background-position: 0 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/d4e69bd6dc041467826f820a5fa88ededaf76813-3840x1400.png?auto=format&fit=fill&q=80&w=1920');
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            button {
                width: 200px;
                height: 65px;
                font-size: 18px;
                border-radius: 5px;
                background: #c8aa6e;
                cursor: pointer;
                transition: 0.3s linear;
                &:hover {
                    background-color: #ffda91;
                }
            }
        }
    }
`;

export const Update = styled.div`
    width: 100%;
    height: 584px;
    background-image: url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/709c6caa7e68aa66534b91282b6f8c3012e7ec9d-3840x1168.png?auto=format&fit=fill&q=80&w=1920');
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    box-sizing: border-box;
    color: #fff;
    strong {
        display: block;
        font-size: 22px;
        line-height: 32px;
        margin-bottom: 24px;
        padding-top: 130px;
    }
    h2 {
        font-size: 80px;
        line-height: 80px;
        font-weight: 900;
        font-style: italic;
    }
    p {
        font-size: 18px;
        line-height: 26px;
        margin: 24px 0;
        &:last-child {
            margin: 32px 0 0;
            button {
                cursor: pointer;
                background-color: #c8aa6e;
                border: none;
                padding: 19px 32px;
                font-size: 18px;
                transition: 0.3s linear;
                border-radius: 5px;
                &:hover {
                    background-color: #ffda91;
                }
            }
        }
    }
`;

export const GameInfoWrap = styled.div`
    .basicInfo {
        width: 100%;
        height: 640px;
        padding: 200px 0;
        background-color: #fff;
        text-align: center;
        box-sizing: border-box;
        strong {
            display: block;
            font-size: 22px;
            line-height: 32px;
            margin-bottom: 20px;
        }
        h2 {
            font-size: 80px;
            font-weight: 900;
            line-height: 80px;
            font-style: italic;
        }
        p {
            margin-top: 2%;
            font-size: 18px;
            line-height: 26px;
        }
    }
    .pic {
        width: 100%;
        height: 640px;
        box-sizing: border-box;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ffe8f50201af51a0956875d2aeeb9e662eb0b228-3840x2160.png?auto=format&fit=fill&q=80&w=1920');
    }
    .video {
        width: 100%;
        height: 640px;
        box-sizing: border-box;
        position: relative;
        video {
            width: 100%;
            height: 100%;
            object-fit: fill;
        }
        .desc {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            text-align: center;
            h2 {
                font-size: 80px;
                font-weight: 900;
                font-style: italic;
            }
            p {
                font-size: 18px;
                text-align: center;
            }
        }
    }
`;

export const GamePlayWrap = styled.div`
    .nexus {
        width: 100%;
        height: 770px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(10, 20, 40);
        color: #fff;
        .title {
            margin-right: 100px;
            h2 {
                text-align: center;
                font-size: 80px;
                font-weight: 900;
                font-style: italic;
            }
            p {
                font-size: 18px;
            }
            .icons {
                display: flex;
                justify-content: center;
                align-items: center;
                p {
                    opacity: 0.5;
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 30px;
                    transition: 0.4s linear;
                    img {
                        padding: 12px;
                        cursor: pointer;
                        width: 120px;
                        height: 120px;
                    }
                    span {
                        font-size: 14px;
                        margin: 16px 0 0;
                        display: block;
                        text-align: center;
                    }
                    &:first-child {
                        margin-left: 0;
                    }
                    &.on {
                        opacity: 1;
                    }
                }
            }
        }
        .desc {
            div {
                p {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    font-style: italic;
                }
                strong {
                    display: block;
                    font-size: 16px;
                    text-align: center;
                }
                display: none;

                &.on {
                    display: block;
                }
            }
        }
    }
    .attack {
        width: 100%;
        height: 770px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(10, 20, 40);
        color: #fff;
        .title {
            margin-right: 100px;
            h2 {
                text-align: center;
                font-size: 80px;
                font-weight: 900;
                font-style: italic;
            }
            p {
                font-size: 18px;
                text-align: center;
            }
            .icons {
                display: flex;
                justify-content: center;
                align-items: center;
                p {
                    opacity: 0.5;
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 30px;
                    transition: 0.4s linear;
                    img {
                        padding: 12px;
                        cursor: pointer;
                        width: 120px;
                        height: 120px;
                    }
                    span {
                        font-size: 14px;
                        margin: 16px 0 0;
                        display: block;
                        text-align: center;
                    }
                    &:first-child {
                        margin-left: 0;
                    }
                    &.on {
                        opacity: 1;
                    }
                }
            }
        }
        .desc {
            div {
                p {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    font-style: italic;
                }
                strong {
                    display: block;
                    font-size: 16px;
                    text-align: center;
                }
                display: none;

                &.on {
                    display: block;
                }
            }
        }
    }
    .jungle {
        width: 100%;
        height: 770px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(10, 20, 40);
        color: #fff;
        .title {
            margin-right: 100px;
            h2 {
                text-align: center;
                font-size: 80px;
                font-weight: 900;
                font-style: italic;
            }
            p {
                font-size: 18px;
                text-align: center;
            }
            .icons {
                display: flex;
                justify-content: center;
                align-items: center;
                p {
                    opacity: 0.5;
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 30px;
                    transition: 0.4s linear;
                    img {
                        padding: 12px;
                        cursor: pointer;
                        width: 120px;
                        height: 120px;
                    }
                    span {
                        font-size: 14px;
                        margin: 16px 0 0;
                        display: block;
                        text-align: center;
                    }
                    &:first-child {
                        margin-left: 0;
                    }
                    &.on {
                        opacity: 1;
                    }
                }
            }
        }
        .desc {
            div {
                p {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    font-style: italic;
                }
                strong {
                    display: block;
                    font-size: 16px;
                    text-align: center;
                }
                display: none;

                &.on {
                    display: block;
                }
            }
        }
    }
`;
export const Line = styled.div`
    .lines {
        width: 100%;
        height: 770px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(10, 20, 40);
        color: #fff;
        .title {
            margin-right: 100px;
            h2 {
                text-align: center;
                font-size: 80px;
                font-weight: 900;
                font-style: italic;
            }
            p {
                font-size: 18px;
                text-align: center;
            }
            .icons {
                display: flex;
                justify-content: center;
                align-items: center;
                p {
                    opacity: 0.5;
                    margin-top: 40px;
                    display: flex;
                    flex-direction: column;
                    margin-left: 30px;
                    transition: 0.4s linear;
                    img {
                        padding: 12px;
                        cursor: pointer;
                        width: 120px;
                        height: 120px;
                    }
                    span {
                        font-size: 14px;
                        margin: 16px 0 0;
                        display: block;
                        text-align: center;
                    }
                    &:first-child {
                        margin-left: 0;
                    }
                    &.on {
                        opacity: 1;
                    }
                }
            }
        }
        .desc {
            div {
                p {
                    margin-top: 30px;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    font-style: italic;
                }
                strong {
                    display: block;
                    font-size: 16px;
                    text-align: center;
                }
                display: none;

                &.on {
                    display: block;
                }
            }
        }
    }
`;
export const EnhanceWrap = styled.div`
    padding: 64px 0;
    background-color: rgb(10, 20, 40);
    h2 {
        font-size: 80px;
        font-weight: 900;
        font-style: italic;
        text-align: center;
        color: #fff;
    }
    strong {
        display: block;
        font-size: 18px;
        text-align: center;
        color: #fff;
    }
    .mySwiper {
        margin-top: 20px;
        text-align: center;
        .icon {
            margin: 16px 0;
            display: flex;
            justify-content: center;
            img {
                margin-right: 5px;
                opacity: 0.4;
                &.on {
                    border: 2px solid #c8aa6e;
                    opacity: 1;
                }
            }
        }
        .text {
            display: inline-block;
            color: #fff;
            h3 {
                text-align: left;
                font-size: 22px;
                line-height: 32px;
                font-weight: bold;
                margin-bottom: 10px;
            }
            p {
                text-align: left;
            }
            &::before {
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                background: #fff;
                margin: 16px 0;
            }
        }
    }
    .swiper-button-prev {
        color: #fff;
        left: 10%;
    }
    .swiper-button-next {
        color: #fff;
        right: 10%;
    }
`;
export const UseSkillWrap = styled.div`
    background-color: rgb(10, 20, 40);
    color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 545px;
    .title {
        text-align: center;

        h2 {
            font-size: 80px;
            font-weight: 900;
            font-style: italic;
        }
        h2 + p {
            font-size: 18px;
            padding: 0;
        }

        p {
            padding: 40px;
            img {
                cursor: pointer;
                opacity: 0.6;
                padding: 12px;
                &.on {
                    opacity: 1;
                }
            }
        }
    }
    .desc {
        text-align: center;
        div {
            h3 {
                font-size: 24px;
                font-weight: 700;
                font-style: italic;
            }
            p {
                font-size: 16px;
            }
            display: none;
            &.on {
                display: block;
            }
        }
    }
`;
