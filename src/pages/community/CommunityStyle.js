import styled from 'styled-components';
import { GrPowerReset } from 'react-icons/gr';

export const CommunityWrap = styled.div`
    width: 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('../images/common/content_bg.jpg');
    h2 {
        color: #fff;
        padding: 50px 0 30px;
        font-size: 40px;
        font-weight: 900;
    }
`;
export const CommunitySearchWrap = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    .search {
        display: flex;
        align-items: center;
        .select_tier {
            select {
                text-align: center;
                width: 120px;
                height: 30px;
                margin-right: 20px;
                background: #010910;
                border: 1px solid #fff;
                color: #fff;
            }
        }
        .positions {
            button {
                cursor: pointer;
                margin-right: 5px;
                width: 30px;
                height: 30px;
                position: relative;
                border: 1px solid #000;
                background: #fff;
                border-radius: 3px;
                opacity: 0.7;
                img {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                }
                &:last-child {
                    margin-right: 10px;
                }
                &:hover {
                    opacity: 1;
                }
                &.on {
                    background: #ffda91;
                    opacity: 1;
                }
            }
        }
        .reset {
            button {
                cursor: pointer;
                width: 30px;
                height: 30px;
                position: relative;
                border: none;
                background: none;
            }
        }
    }
    .write {
        button {
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            width: 120px;
            height: 40px;
            background: #c8aa6e;
            border: 1px solid #999;
            border-radius: 5px;
            transition: 0.4s linear;
            &:hover {
                background-color: #ffda91;
            }
        }
    }
`;

export const CommunityUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const CommunityLi = styled.li`
    background-color: none;
    border-radius: 5px;
    border: 1px solid #999;
    width: 500px;
    height: 400px;
    margin: 10px;
    box-sizing: border-box;
    padding: 50px;
    position: relative;
    color: #fff;
    .tier {
        position: absolute;
        right: 10px;
        top: 10px;
        img {
            width: 100px;
            height: 100px;
            box-sizing: border-box;
        }
    }

    h3 {
        width: 350px;
        font-size: 18px;
        margin-bottom: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .position {
        display: flex;
        justify-content: space-between;
        font-size: 16px;

        img {
            vertical-align: middle;
            padding: 0 10px;
        }
        margin-bottom: 20px;
    }
    .desc {
        border-top: 1px solid #fff;
        padding-top: 20px;
        font-size: 16px;
        word-break: keep-all;
    }

    .edit {
        left: 50%;
        bottom: 30px;
        transform: translateX(-50%);
        position: absolute;
        button {
            cursor: pointer;
            border: 1px solid #000;
            margin-left: 20px;
            width: 50px;
            height: 25px;
            border-radius: 3px;
            transition: 0.3s linear;
            background: #c8aa6e;
            &:hover {
                background-color: #ffda91;
            }
            &:first-child {
                margin-left: 0;
            }
        }
    }
`;

export const ResetIcon = styled(GrPowerReset)`
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

export const CommunityAddWrap = styled.div`
    color: #fff;
    padding-bottom: 100px;
    background-position: 0 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('../images/common/content_bg.jpg');
    h2 {
        text-align: center;
        font-size: 40px;
        padding: 50px 0;
    }
    form {
        border: 1px solid #fff;
        width: 500px;
        height: 500px;
        margin: auto;
        padding: 20px;
        p {
            margin-bottom: 15px;
            input[type='text'] {
                width: 400px;
                height: 25px;
                font-size: 16px;
                color: #fff;
                background: rgb(57, 58, 60);
                border: none;
                padding: 5px;
                &::placeholder {
                    color: #9899a0;
                }
            }
            span {
                display: block;
                font-size: 18px;
            }
            select {
                width: 100px;
                height: 25px;
                color: #fff;
                background: rgb(57, 58, 60);
                &::placeholder {
                    color: #9899a0;
                }
            }
            textarea {
                width: 500px;
                height: 100px;
                box-sizing: border-box;
                padding: 10px;
                font-size: 14px;
                color: #fff;
                background: rgb(57, 58, 60);
                &::placeholder {
                    color: #9899a0;
                }
            }
            label {
                img {
                    padding: 0 10px;
                }
            }
        }
        .title,
        .name {
            label {
                display: block;
                font-size: 18px;
            }
        }
        .btn {
            text-align: center;
            button {
                cursor: pointer;
                width: 100px;
                height: 40px;
                background-color: #c8aa6e;
                border-radius: 3px;
                border: none;
                &:first-child {
                    margin-right: 10px;
                }
            }
        }
    }
`;
