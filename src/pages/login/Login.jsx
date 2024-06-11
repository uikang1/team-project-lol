import { LoginWrap } from './LoginStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';
import { login } from '../../store/modules/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const emailRef = useRef();

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
    });
    const { email, password } = userLogin;

    const changeInput = (e) => {
        const { name, value } = e.target;
        setUserLogin({ ...userLogin, [name]: value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) return;
        dispatch(login(userLogin));
        navigate('/');
        setUserLogin({ email: '', password: '' });
        emailRef.current.focus();
    };

    return (
        <>
            <LoginWrap>
                <h1>
                    <Link to={'/'}>
                        <img src="./images/content/login/lol_logo.png" alt="" />
                    </Link>
                </h1>

                <div className="inner2">
                    <form onSubmit={onSubmit}>
                        <p>
                            <label>이메일</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="이메일을 입력하세요"
                                onChange={changeInput}
                                ref={emailRef}
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
                            <button type="submit">로그인</button>
                            <button className="signup" onClick={() => navigate('/join')}>
                                회원가입
                            </button>
                        </p>
                    </form>
                </div>
            </LoginWrap>
        </>
    );
};

export default Login;
