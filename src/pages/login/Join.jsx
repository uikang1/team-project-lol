import { useRef, useState } from 'react';
import { JoinWrap } from './LoginStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signup } from '../../store/modules/authSlice';

const Join = () => {
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const { name, email, password } = newUser;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nameRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) return;

        navigate('/login');
        dispatch(signup(newUser));
        setNewUser({ name: '', email: '', password: '' });
        nameRef.current.focus();
    };

    return (
        <>
            <JoinWrap>
                <div className="title">
                    <div className="title-inner">
                        <h1>
                            <Link to={'/'}>
                                <img src="./images/content/login/lol_logo.png" alt="" />
                            </Link>
                        </h1>
                        <h2>계정 생성</h2>
                        <h3>소환사 계정을 생성하여 전장으로 나가세요!</h3>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <p>
                        <label>이름</label>
                        <input
                            type="name"
                            name="name"
                            value={name}
                            ref={nameRef}
                            placeholder="이름을 입력하세요"
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label>이메일</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="이메일을 입력하세요"
                            onChange={changeInput}
                        />
                    </p>
                    <p>
                        <label>비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            placeholder="비밀번호를 입력하세요"
                            onChange={changeInput}
                        />
                    </p>

                    <p className="btn-wrap">
                        <button type="submit" className="signup">
                            완료
                        </button>
                        <button onClick={() => navigate('/')}>취소</button>
                    </p>
                </form>
            </JoinWrap>
        </>
    );
};

export default Join;
