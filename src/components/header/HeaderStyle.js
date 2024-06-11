import styled from 'styled-components';
import { IoMdArrowDropdown } from 'react-icons/io';

export const HeaderContainer = styled.header`
    z-index: 100;
    background: #000;
    position: fixed;
    width: 100%;
    .inner {
        width: 1600px;
        height: 80px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    h1 {
        img {
            width: 30px;
            height: 32px;
        }
    }
`;
export const NavBar = styled.nav`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .gnb {
        display: flex;
        .menu {
            margin-left: 70px;
            &:first-child {
                margin-left: 0;
            }
            &.on {
                background-color: rgba(128, 128, 128, 0.3);
                color: #c8aa6e;
                ul {
                    opacity: 1;
                    pointer-events: auto;
                }
            }
        }
        li {
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            position: relative;
            padding: 7px;
            border-radius: 5px;
            width: 110px;
            text-align: center;
            color: #fff;
            transition: 0.2s;
            ul {
                opacity: 0;
                pointer-events: none;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 50px;
                background-color: #292929;
                border-radius: 5px;
                &.on {
                }
                &::before {
                    display: block;
                    content: '';
                    width: 100%;
                    height: 4px;
                    background-color: rgb(0, 160, 186);
                }
                li {
                    font-weight: 600;
                    text-align: center;
                    padding: 5px 20px;
                    margin: 20px;
                    color: #fff;
                    &:hover {
                        border-radius: 6px;
                        background-color: rgba(128, 128, 128, 0.3);
                    }
                }
            }
        }
    }
`;
export const LoginBar = styled.nav`
    display: flex;
    li {
        font-size: 13px;
        font-weight: 600;
        padding: 8px 16px;
    }
    .login {
        background-color: #c8aa6e;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;
    }
    .join {
        margin-right: 15px;
        border-radius: 10px;
        background-color: rgb(11, 196, 226);
        transition: 0.2s;
        cursor: pointer;
    }
    .username {
        color: #fff;
        border-radius: 10px;
        margin-right: 15px;
        background-color: rgba(128, 128, 128, 0.3);
    }
`;
export const ArrowDown = styled(IoMdArrowDropdown)`
    vertical-align: middle;
`;
