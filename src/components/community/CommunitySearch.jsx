import { useNavigate } from 'react-router-dom';
import { CommunitySearchWrap, ResetIcon } from '../../pages/community/CommunityStyle';
import { useDispatch, useSelector } from 'react-redux';
import { positionFilter, resetFilter, tierFilter } from '../../store/modules/communitySlice';
import { useState } from 'react';

const CommunitySearch = () => {
    const [btn, setBtn] = useState(null);
    const [tier, setTier] = useState('');
    const { authed } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changeInput = (e) => {
        setTier(e.target.value);
        dispatch(tierFilter(e.target.value));
    };
    const onReset = () => {
        dispatch(resetFilter());
        setTier('');
        setBtn(null);
    };

    const onWrite = () => {
        if (!authed) {
            alert('로그인 페이지로 이동합니다.');
            navigate('/login');
        } else {
            navigate('/communityadd');
        }
    };

    return (
        <CommunitySearchWrap>
            <div className="search">
                <p className="select_tier">
                    <select value={tier} onChange={changeInput}>
                        <option value="" disabled>
                            모든 티어
                        </option>
                        <option value="challenger">챌린저</option>
                        <option value="grandmaster">그랜드마스터</option>
                        <option value="master">마스터</option>
                        <option value="diamond">다이아몬드</option>
                        <option value="emerald">에메랄드</option>
                        <option value="platinum">플래티넘</option>
                        <option value="gold">골드</option>
                        <option value="silver">실버</option>
                        <option value="bronze">브론즈</option>
                        <option value="iron">아이언</option>
                    </select>
                </p>
                <p className="positions">
                    <button
                        onClick={() => (dispatch(positionFilter('all')), setBtn(0))}
                        className={btn === 0 ? 'on' : ''}
                    >
                        <img src="../images/content/community/all.svg" alt="all" />
                    </button>
                    <button
                        onClick={() => (dispatch(positionFilter('top')), setBtn(1))}
                        className={btn === 1 ? 'on' : ''}
                    >
                        <img src="../images/content/community/top.svg" alt="top" />
                    </button>
                    <button
                        onClick={() => (dispatch(positionFilter('jungle')), setBtn(2))}
                        className={btn === 2 ? 'on' : ''}
                    >
                        <img src="../images/content/community/jungle.svg" alt="jungle" />
                    </button>
                    <button
                        onClick={() => (dispatch(positionFilter('mid')), setBtn(3))}
                        className={btn === 3 ? 'on' : ''}
                    >
                        <img src="../images/content/community/mid.svg" alt="mid" />
                    </button>
                    <button
                        onClick={() => (dispatch(positionFilter('bottom')), setBtn(4))}
                        className={btn === 4 ? 'on' : ''}
                    >
                        <img src="../images/content/community/bottom.svg" alt="bottom" />
                    </button>
                    <button
                        onClick={() => (dispatch(positionFilter('support')), setBtn(5))}
                        className={btn === 5 ? 'on' : ''}
                    >
                        <img src="../images/content/community/support.svg" alt="support" />
                    </button>
                </p>
                <p className="reset">
                    <button onClick={onReset}>
                        <ResetIcon />
                    </button>
                </p>
            </div>

            <div className="write">
                <p>
                    <button onClick={onWrite}>글쓰기</button>
                </p>
            </div>
        </CommunitySearchWrap>
    );
};

export default CommunitySearch;
