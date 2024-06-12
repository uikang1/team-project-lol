import styled from 'styled-components';

export const JoinWrap = styled.div`
    width: 100%;
    height: 920px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    background-image: url('../images/content/login/wallpaper.jpg');
    display: flex;
    align-items: center;
    position: relative;
    .title {
        margin: auto;
        width: 300px;
        height: 300px;
        box-sizing: border-box;
        color: #fff;
        .title-inner {
            margin: auto;
            width: 1200px;
            h1 {
                width: 200px;
                height: 80px;
                box-sizing: border-box;
                position: absolute;
                left: 50%;
                top: 30px;
                transform: translateX(-50%);
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            h2 {
                font-size: 70px;
                font-weight: 700;
                font-style: italic;
            }
            h3 {
                font-size: 20px;
            }
        }
    }
    form {
        width: 900px;
        height: 500px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.4);
        margin: auto;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            margin-bottom: 30px;
            /* color: #fff; */
            label {
                display: block;
                width: 120px;
                font-size: 18px;
            }
            input {
                width: 400px;
                height: 50px;
                padding-left: 30px;
                font-size: 20px;
                outline: none;
                border: none;
            }
        }
    }
    .btn-wrap {
        text-align: center;
        width: 400px;
        display: flex;
        justify-content: space-around;
        margin-top: 10px;
        button {
            width: 180px;
            height: 60px;
            cursor: pointer;
            background: #c8aa6e;
            font-size: 16px;
            border: none;
        }
        .signup {
            background: #59c1de;
        }
    }
`;

export const LoginWrap = styled.div`
    width: 100%;
    height: 920px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    background-image: url('../images/content/login/wallpaper5.jpg');
    display: flex;
    align-items: center;
    position: relative;
    h1 {
        width: 200px;
        height: 80px;
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        img {
            width: 100%;
            height: 100%;
        }
    }
    form {
        width: 580px;
        height: 450px;
        box-sizing: border-box;
        padding: 80px 0;
        background: rgba(255, 255, 255, 0.5);
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        p {
            margin-bottom: 30px;
            /* color: #fff; */
            label {
                display: block;
                width: 120px;
                font-size: 18px;
            }
            input {
                width: 400px;
                height: 50px;
                padding-left: 30px;
                font-size: 20px;
                outline: none;
                border: none;
            }
        }
        .btn-wrap {
            text-align: center;
            width: 400px;
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            button {
                width: 180px;
                height: 60px;
                cursor: pointer;
                background: #c8aa6e;
                font-size: 16px;
                border: none;
            }
            .signup {
                background: #59c1de;
            }
        }
    }
`;

export const LogoutWrap = styled.div`
    width: 100%;
    height: 920px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    background-image: url('../images/content/login/wallpaper2.jpg');
    display: flex;
    align-items: center;
    position: relative;
    .logOutBox {
        width: 600px;
        height: 200px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.4);
        margin: auto;
        h2 {
            font-size: 22px;
            margin-bottom: 10px;
        }
        .btn-wrap {
            text-align: center;
            width: 400px;
            display: flex;
            justify-content: space-around;
            margin-top: 10px;
            button {
                width: 150px;
                height: 45px;
                cursor: pointer;
                background: #c8aa6e;
                font-size: 16px;
                border: none;
            }
            .back {
                background: #59c1de;
            }
        }
    }
`;

export const RealLogoutWrap = styled.div`
    width: 100%;
    height: 920px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    background-image: url('../images/content/login/wallpaper2.jpg');
    display: flex;
    align-items: center;
    position: relative;
    .bye {
        width: 600px;
        height: 100px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.4);
        margin: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            font-size: 22px;
        }
        span {
            display: block;
            color: #fff;
        }
    }
`;
