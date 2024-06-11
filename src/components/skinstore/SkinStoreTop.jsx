import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearSort,
    productSearch,
    sortProductAsc,
    sortProductDesc,
} from '../../store/modules/cartSlice';
import { StoreTopWrap } from './SkinStoreStyle';

const SkinStoreTop = () => {
    const [word, setWord] = useState('');
    const [on, setOn] = useState(0);
    const dispatch = useDispatch();
    const { authed } = useSelector((state) => state.auth);
    const { carts } = useSelector((state) => state.cart);

    const changeInput = (e) => {
        setWord(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(productSearch(word));
        setWord('');
    };

    useEffect(() => {
        dispatch(productSearch(''));
    }, []);

    return (
        <>
            <StoreTopWrap className="top">
                <Link to="/store">
                    <h1>
                        <img src="./images/content/store/skin_store_logo.png" alt="logo" />
                    </h1>
                </Link>
                <div className="search">
                    <form onSubmit={onSubmit}>
                        <input
                            type="text"
                            name="text"
                            value={word}
                            onChange={changeInput}
                            placeholder="챔피언을 이름을 검색하세요 (ex. 럭스 , 니달리 ...)"
                        />
                        <button type="submit">검색</button>
                    </form>
                    {authed && (
                        <Link to="/cart">
                            <span className={carts.length === 0 ? 'cart' : 'cart on'}>
                                <em className={carts.length === 0 ? 'count' : 'count on'}>
                                    {carts.length}
                                </em>
                                <i className="xi-cart-o"></i>
                            </span>
                        </Link>
                    )}
                </div>

                <ul className="sorting">
                    <li
                        className={on === 0 ? 'on' : ''}
                        onClick={() => (dispatch(clearSort()), setOn(0))}
                    >
                        최신순
                    </li>
                    <li
                        className={on === 1 ? 'on' : ''}
                        onClick={() => (dispatch(sortProductAsc('name')), setOn(1))}
                    >
                        챔피언이름순
                    </li>
                    <li
                        className={on === 2 ? 'on' : ''}
                        onClick={() => (dispatch(sortProductAsc('price')), setOn(2))}
                    >
                        낮은 RP순
                    </li>
                    <li
                        className={on === 3 ? 'on' : ''}
                        onClick={() => (dispatch(sortProductDesc('price')), setOn(3))}
                    >
                        높은 RP순
                    </li>
                </ul>
            </StoreTopWrap>
        </>
    );
};

export default SkinStoreTop;
