import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailWrap } from './SkinStoreStyle';
import { addCart } from '../../store/modules/cartSlice';
import { useEffect } from 'react';

const SkinDetail = () => {
    const { skinID } = useParams();
    const { products, carts } = useSelector((state) => state.cart);
    const { authed } = useSelector((state) => state.auth);
    const currentItem = products.find((skinItem) => skinItem.id === Number(skinID));
    const { id, name, title, img, price } = currentItem;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    const goLogin = () => {
        alert('로그인 페이지로 이동합니다');
        navigate('/login');
    };

    return (
        <>
            <DetailWrap>
                <div className="inner2">
                    <Link to="/store">
                        <h1>
                            <img src="./images/content/store/skin_store_logo.png" alt="logo" />
                        </h1>
                    </Link>

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

                    <div className="skinDetail">
                        <em className="goBack" onClick={() => navigate(-1)}>
                            <i className="xi-angle-left-min"></i>
                            상점으로
                        </em>
                        <div className="detailBox">
                            <p className="bigImg">
                                <img src={img} alt={title} />
                            </p>
                            <box className="text">
                                <h3>{title}</h3>
                                <p>{name}에게 새 스킨을 입혀 주세요!</p>
                                {authed ? (
                                    <p className="purchase">
                                        <button onClick={() => dispatch(addCart(currentItem))}>
                                            {price}
                                        </button>
                                    </p>
                                ) : (
                                    <p className="notAuthed">
                                        <button onClick={goLogin}>{price}</button>
                                    </p>
                                )}
                            </box>
                        </div>
                    </div>
                </div>
            </DetailWrap>
        </>
    );
};

export default SkinDetail;
