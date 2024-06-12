import { Link, useNavigate } from 'react-router-dom';
import { ArrowDown, NavBar } from './HeaderStyle';
import { useSelector } from 'react-redux';

const Nav = ({ onMenu, onShow }) => {
    const { authed } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const onGo = () => {
        if (authed) {
            navigate('/requests');
        } else {
            alert('로그인 페이지로 이동합니다.');
            navigate('/login');
        }
    };

    return (
        <NavBar>
            <ul className="gnb">
                <li className={onMenu === 1 ? 'menu on' : 'menu'} onMouseEnter={() => onShow(1)}>
                    게임정보 <ArrowDown />
                    <ul>
                        <Link to="/how-to-play">
                            <li>기본정보</li>
                        </Link>
                        <Link to="/champions">
                            <li>챔피언</li>
                        </Link>
                    </ul>
                </li>

                <li className={onMenu === 2 ? 'menu on' : 'menu'} onMouseEnter={() => onShow(2)}>
                    새소식 <ArrowDown />
                    <ul>
                        <Link to="/notice">
                            <li>공지사항</li>
                        </Link>
                    </ul>
                </li>
                <li className={onMenu === 3 ? 'menu on' : 'menu'} onMouseEnter={() => onShow(3)}>
                    커뮤니티 <ArrowDown />
                    <ul>
                        <Link to="/community">
                            <li>자유 게시판</li>
                        </Link>
                    </ul>
                </li>
                <li className={onMenu === 4 ? 'menu on' : 'menu'} onMouseEnter={() => onShow(4)}>
                    E스포츠 <ArrowDown />
                    <ul>
                        <Link to="/esports">
                            <li>E스포츠 소식</li>
                        </Link>
                    </ul>
                </li>
                <li className={onMenu === 5 ? 'menu on' : 'menu'} onMouseEnter={() => onShow(5)}>
                    라이엇 스토어 <ArrowDown />
                    <ul>
                        <Link to="/store">
                            <li>스킨 상점</li>
                        </Link>
                    </ul>
                </li>
                <li className={onMenu === 6 ? 'menu on' : 'menu'} onMouseEnter={() => onShow(6)}>
                    고객지원 <ArrowDown />
                    <ul>
                        <li onClick={onGo}>문의하기</li>
                    </ul>
                </li>
            </ul>
        </NavBar>
    );
};

export default Nav;
