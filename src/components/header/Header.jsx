import { Link } from 'react-router-dom';
import { HeaderContainer, LoginBar } from './HeaderStyle';
import Nav from '../header/Nav';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const [onMenu, setOnMenu] = useState(0);
    const { user, authed } = useSelector((state) => state.auth);
    const onShow = (idx) => {
        setOnMenu(idx);
    };
    const onHide = () => {
        setOnMenu(0);
    };
    return (
        <HeaderContainer onMouseLeave={onHide}>
            <div className="inner">
                <h1>
                    <Link to="/">
                        <img src="../images/common/headerLogo.png" alt="LeagueOfLegends" />
                    </Link>
                </h1>
                <Nav onMenu={onMenu} onShow={onShow} />
                <LoginBar>
                    {!authed ? (
                        <Link to={'/join'}>
                            <li className="join">회원가입</li>
                        </Link>
                    ) : (
                        <li className="username">{user.name} 소환사님</li>
                    )}
                    {!authed ? (
                        <Link to={'/login'}>
                            <li className="login">로그인</li>
                        </Link>
                    ) : (
                        <Link to={'/logout'}>
                            <li className="login">로그아웃</li>
                        </Link>
                    )}
                </LoginBar>
            </div>
        </HeaderContainer>
    );
};

export default Header;
