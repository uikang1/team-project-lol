import styled from 'styled-components';

export const CartWrap = styled.div`
    width: 100%;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('./images/content/store/store_bg.jpeg');
    padding-bottom: 100px;
    h1 {
        text-align: center;
        padding-top: 50px;
        cursor: pointer;
        img {
            width: 200px;
            height: 80px;
            box-sizing: border-box;
        }
    }
    .goBack {
        display: block;
        font-size: 20px;
        color: #c79a3b;
        display: flex;
        align-items: center;
        i {
            font-size: 30px;
            line-height: 20px;
        }
    }
    .totalBox {
        width: 1200px;
        height: 120px;
        box-sizing: border-box;
        border: 1px solid #c8aa6e;
        color: #f4ebd7;
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p {
            font-size: 25px;
            span {
                font-size: 25px;
                color: #c79a3b;
            }
        }
        .cart-btnWrap {
            width: 400px;
            height: 50px;
            display: flex;
            justify-content: end;

            button {
                display: block;
                width: 120px;
                font-size: 17px;
                background: #c8aa6e;
                margin-right: 30px;
                cursor: pointer;
                &.buyAll {
                    background: #59c1de;
                }
            }
        }
    }
`;
