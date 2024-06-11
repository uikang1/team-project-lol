import { Link, useNavigate } from 'react-router-dom';
import { LogoutWrap } from './LoginStyle';
import { useSelector } from 'react-redux';

const Logout = () => {
    const navigagte = useNavigate();
    const { authed, user } = useSelector((state) => state.auth);

    return (
        <>
            <LogoutWrap>
                <div className="inner2">
                    {authed && user ? (
                        <div className="logOutBox">
                            <h2>정말 로그아웃하시겠습니까?</h2>
                            <p className="btn-wrap">
                                <Link to="/bye">
                                    <button>로그아웃</button>
                                </Link>

                                <button className="back" onClick={() => navigagte('/')}>
                                    돌아가기
                                </button>
                            </p>
                        </div>
                    ) : (
                        <>
                            <h2>유효하지 않은 페이지입니다</h2>
                        </>
                    )}
                </div>
            </LogoutWrap>
        </>
    );
};

export default Logout;
