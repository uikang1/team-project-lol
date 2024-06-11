import { useDispatch, useSelector } from 'react-redux';
import { RealLogoutWrap } from './LoginStyle';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/modules/authSlice';
import { useEffect, useState } from 'react';

const RealLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cnt, setCnt] = useState(5);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const cntTimer = setInterval(() => {
            setCnt((Cnt) => {
                return Cnt > 0 ? Cnt - 1 : Cnt;
            });
        }, 1000);
        return () => {
            clearInterval(cntTimer);
        };
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            if (cnt === 0) {
                dispatch(logout());
                navigate('/');
            }
        }, 100);
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <RealLogoutWrap>
            <div className="bye">
                <h2>곧 다시 만나요 , {user.name}소환사님</h2>
                <span>메인으로 {cnt}</span>
                {/* 5초 후 메인으로 이동 */}
            </div>
        </RealLogoutWrap>
    );
};

export default RealLogout;
