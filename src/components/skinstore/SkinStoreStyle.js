import styled from 'styled-components';

export const DetailWrap = styled.div`
    width: 100%;
    height: 800px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('./images/content/store/store_bg.jpeg');

    h1 {
        text-align: center;
        padding-top: 50px;
        cursor: pointer;
        margin-bottom: 100px;
        img {
            width: 200px;
            height: 60px;
            box-sizing: border-box;
        }
    }

    .cart {
        display: block;
        font-size: 40px;
        color: #fff;
        width: 70px;
        height: 70px;
        box-sizing: border-box;
        border-radius: 100%;
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 80%;
        top: -50px;
        transform: translateY(-50%);
        cursor: pointer;
        position: relative;
        &.on {
            border: 2px solid #c79a3b;
            color: #caab67;
        }

        em {
            display: none;
            width: 35px;
            height: 35px;
            box-sizing: border-box;
            border-radius: 100%;
            background: #c79a3b;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            line-height: 35px;
            position: absolute;
            right: -10px;
            top: -15px;
            cursor: pointer;
            &.on {
                display: block;
            }
        }
    }

    .skinDetail {
        position: relative;
        margin-top: 50px;
        margin-bottom: 100px;
        width: 1200px;
        height: 350px;
        box-sizing: border-box;

        .goBack {
            display: inline-block;
            color: #c79a3b;
            cursor: pointer;
            font-size: 20px;
            position: absolute;
            left: 55px;
            top: -70px;
        }
        .detailBox {
            display: flex;
            justify-content: space-around;
            .bigImg {
                width: 500px;
                height: 350px;
                box-sizing: border-box;
                border: 2px solid #715f40;
                img {
                    width: 100%;
                    height: 100%;
                    box-sizing: border-box;
                }
            }
            .text {
                width: 450px;
                position: relative;
                h3 {
                    color: #f4ebd7;
                    font-size: 30px;
                    margin-bottom: 30px;
                }
                p {
                    font-size: 20px;
                    color: #989898;
                }
                .purchase {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 380px;
                    height: 60px;
                    box-sizing: border-box;
                    border: 2px solid #715f40;
                    button {
                        width: 100%;
                        height: 100%;
                        font-size: 20px;
                        font-weight: 500;
                        color: #fae6be;
                        cursor: pointer;
                        background-color: #020b14;
                        background-repeat: no-repeat;
                        background-position: 38% 46%;
                        background-image: url('./images/content/store/store_rp.jpeg');
                    }
                }
                .notAuthed {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 380px;
                    height: 60px;
                    box-sizing: border-box;
                    border: 2px solid #715f40;
                    button {
                        width: 100%;
                        height: 100%;
                        font-size: 20px;
                        font-weight: 500;
                        cursor: pointer;
                        color: red;
                        background-color: #020b14;
                        background-repeat: no-repeat;
                        background-position: 38% 46%;
                        background-image: url('./images/content/store/store_rp.jpeg');
                    }
                }
            }
        }
    }
`;

export const StoreTopWrap = styled.div`
    margin-bottom: 100px;
    h1 {
        text-align: center;
        padding-top: 50px;
        cursor: pointer;
        img {
            width: 200px;
            height: 60px;
            box-sizing: border-box;
        }
    }
    .search {
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        input[type='text'] {
            width: 500px;
            height: 60px;
            padding-left: 15px;
            border: 3px solid #c79a3b;
            box-sizing: border-box;
            outline: none;
            font-size: 20px;
        }
        button {
            width: 100px;
            height: 60px;
            box-sizing: border-box;
            line-height: 50px;
            border: none;
            background: #c79a3b;
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
        }
        .cart {
            display: block;
            font-size: 40px;
            color: #fff;
            width: 70px;
            height: 70px;
            box-sizing: border-box;
            border-radius: 100%;
            border: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            left: 80%;
            top: 50%;
            transform: translateY(-50%);
            cursor: pointer;
            position: relative;
            &.on {
                border: 2px solid #c79a3b;
                color: #caab67;
            }
            .count {
                display: none;
                width: 35px;
                height: 35px;
                box-sizing: border-box;
                border-radius: 100%;
                background: #c79a3b;
                color: #fff;
                font-size: 16px;
                font-weight: 700;
                text-align: center;
                line-height: 35px;
                position: absolute;
                right: -10px;
                top: -15px;
                &.on {
                    display: block;
                }
            }
        }
    }
    .sorting {
        display: flex;
        font-size: 22px;
        margin: 50px 0;
        li {
            margin-right: 30px;
            color: #fff;
            cursor: pointer;
            &.on {
                color: #c79a3b;
            }
        }
    }
`;

export const SkinListWrap = styled.ul`
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-between; */
`;

export const SkinItemWrap = styled.li`
    width: 380px;
    height: 380px;
    box-sizing: border-box;
    font-size: 20px;
    color: #f4ebd7;
    margin-bottom: 50px;
    margin-right: 20px;
    cursor: pointer;
    img {
        width: 380px;
        height: 250px;
        box-sizing: border-box;
        margin-bottom: 15px;
        border: 1px solid #c79a3b;
    }
    strong {
        /* padding-left: 20px; */
        font-size: 18px;
        display: block;
    }
    span {
        padding-left: 30px;
        font-size: 25px;
        background-repeat: no-repeat;
        background-position: 0 50%;
        background-image: url('./images/content/store/store_rp.jpeg');
    }
`;
