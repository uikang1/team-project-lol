import { useNavigate } from 'react-router-dom';
import { CommunityAddWrap } from '../../pages/community/CommunityStyle';
import { useSelector, useDispatch } from 'react-redux';
import { onUpdate } from '../../store/modules/communitySlice';
import { useState } from 'react';

const CommunityEdit = () => {
    const { current } = useSelector((state) => state.community);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(current);
    const { name, title, findposition, myposition, desc, tier } = user;

    const onChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name || !title || !myposition || !findposition || !tier) return;
        dispatch(onUpdate(user));
        navigate('/community');
    };

    return (
        <CommunityAddWrap>
            <div className="inner">
                <h2>자유게시판</h2>
                <form onSubmit={onSubmit}>
                    <p className="title">
                        <label htmlFor="">제목</label>
                        <input
                            type="text"
                            placeholder="제목"
                            name="title"
                            value={title}
                            onChange={onChange}
                        />
                    </p>
                    <p className="name">
                        <label htmlFor="">소환사명</label>
                        <input
                            type="text"
                            placeholder="소환사명"
                            name="name"
                            value={name}
                            onChange={onChange}
                        />
                    </p>

                    <p>
                        <select name="tier" value={tier} onChange={onChange}>
                            <option value="all">모든 티어</option>
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

                    <p>
                        <span>내 포지션</span>
                        <input
                            type="radio"
                            name="myposition"
                            value="top"
                            checked={myposition === 'top'}
                            onChange={onChange}
                        />
                        <label htmlFor="myposition">
                            <img src="./images/content/community/top_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="myposition"
                            value="jungle"
                            checked={myposition === 'jungle'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/jungle_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="myposition"
                            value="mid"
                            checked={myposition === 'mid'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/mid_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="myposition"
                            value="bottom"
                            checked={myposition === 'bottom'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/bottom_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="myposition"
                            value="support"
                            checked={myposition === 'support'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/support_f.svg" alt="" />
                        </label>
                    </p>

                    <p>
                        <span>찾고 있는 포지션</span>
                        <input
                            type="radio"
                            name="findposition"
                            value="top"
                            checked={findposition === 'top'}
                            onChange={onChange}
                        />
                        <label htmlFor="myposition">
                            <img src="./images/content/community/top_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="findposition"
                            value="jungle"
                            checked={findposition === 'jungle'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/jungle_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="findposition"
                            value="mid"
                            checked={findposition === 'mid'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/mid_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="findposition"
                            value="bottom"
                            checked={findposition === 'bottom'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/bottom_f.svg" alt="" />
                        </label>
                        <input
                            type="radio"
                            name="findposition"
                            value="support"
                            checked={findposition === 'support'}
                            onChange={onChange}
                        />
                        <label htmlFor="">
                            <img src="./images/content/community/support_f.svg" alt="" />
                        </label>
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            value={desc}
                            onChange={onChange}
                            placeholder="생략가능"
                        ></textarea>
                    </p>
                    <p className="btn">
                        <button>수정</button>
                        <button onClick={() => navigate('/community')}>취소</button>
                    </p>
                </form>
            </div>
        </CommunityAddWrap>
    );
};

export default CommunityEdit;
