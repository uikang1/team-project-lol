import styled from 'styled-components';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export const PaginationWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0 100px;
    button {
        cursor: pointer;
        margin-right: 10px;
        width: 30px;
        height: 30px;
        line-height: 15px;
        font-size: 15px;
        position: relative;
        border-radius: 3px;
        border: none;
        background: #010910;
        color: #fff;
        &.on {
            color: #ffda91;
        }
    }
`;

export const FirstIcon = styled(MdKeyboardDoubleArrowLeft)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const PrevIcon = styled(MdKeyboardArrowLeft)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const NextIcon = styled(MdKeyboardArrowRight)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
export const LastIcon = styled(MdKeyboardDoubleArrowRight)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
`;
