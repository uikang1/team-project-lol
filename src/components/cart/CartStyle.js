import styled from 'styled-components';

export const EmptyCartWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 48% 0;
    background-image: url('../images/content/store/decoImg.png');
    .emptyCart {
        width: 700px;
        height: 300px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            text-align: center;
            font-size: 50px;
            color: #fff;
            padding-bottom: 100px;
        }
        .btnWrap {
            display: flex;
            justify-content: center;
            padding-bottom: 50px;
            button {
                width: 200px;
                height: 60px;
                box-sizing: border-box;
                font-size: 20px;
                color: #fff;
                background: #59c1de;
                transition: 0.4s;
                cursor: pointer;
                &:first-child {
                    margin-right: 30px;
                }
                &:hover {
                    background: #c79a3b;
                    color: #333;
                }
            }
        }
    }
`;

export const CartListWrap = styled.ul`
    margin-top: 100px;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
`;

export const CartItemWrap = styled.li`
    text-align: center;
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    font-size: 20px;
    color: #f4ebd7;
    margin-bottom: 50px;
    margin-right: 20px;
    img {
        width: 380px;
        height: 250px;
        box-sizing: border-box;
        margin-bottom: 15px;
    }
    strong {
        padding-left: 20px;
        font-size: 18px;
        display: block;
    }
    .btnWrap {
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        button {
            width: 160px;
            height: 50px;
            font-size: 17px;
            cursor: pointer;
            border: 2px solid #715f40;
            background: transparent;
            color: #f4ebd7;
            &.buy {
                text-indent: 15px;
                background-repeat: no-repeat;
                background-position: 30% 46%;
                background-image: url('../images/content/store/store_rp.jpeg');
            }
        }
    }
`;
