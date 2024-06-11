import styled from 'styled-components';

export const RequestsWrap = styled.div`
    h2 {
        font-size: 40px;
        font-weight: 800;
        text-align: center;
        line-height: 40px;
        margin: 100px 0 20px;
    }
    h2 + p {
        text-align: center;
        font-size: 16px;
        line-height: 22px;
    }
`;
export const Visual = styled.section`
    height: 210px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://theme.zdassets.com/theme_assets/43400/82444270de7bee9efba7545f8367da4f5932a577.jpg');
    position: relative;
    h1 {
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
`;

export const ReqForm = styled.form`
    border: 1px solid #999;
    width: 700px;
    padding: 20px;
    margin: 50px auto;
    select {
        width: 500px;
        padding: 12px;
        font-size: 16px;
    }
    input {
        width: 600px;
        padding: 12px;
        margin-bottom: 15px;
        border: 1px solid #999;
        font-size: 16px;
    }
    label {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 5px;
    }
    strong {
        display: block;
    }
    .select {
        border-bottom: 1px solid #999;
        margin-bottom: 30px;
        select {
            margin-bottom: 30px;
        }
    }
    .input {
        display: flex;
        flex-direction: column;
        p {
            display: flex;
            flex-direction: column;
            span {
                font-size: 24px;
                font-weight: 700;
                margin: 10px 0;
            }
        }
        em {
            font-size: 18px;
        }
        textarea {
            width: 600px;
            height: 150px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #999;
        }
        select {
            margin-bottom: 10px;
        }
    }
    .btn {
        text-align: center;
        button {
            margin-top: 40px;
            width: 200px;
            height: 50px;
            font-size: 18px;
            background: #c8aa6e;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;
