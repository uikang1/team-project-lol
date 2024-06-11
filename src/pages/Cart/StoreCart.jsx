import { Link, useNavigate } from 'react-router-dom';
import { CartWrap } from './StoreCartStyle';
import CartList from '../../components/cart/CartList';
import { useSelector, useDispatch } from 'react-redux';
import CartEmpty from '../../components/cart/CartEmpty';
import { useEffect } from 'react';
import { priceTotal, resetCart } from '../../store/modules/cartSlice';

const StoreCart = () => {
    const { carts, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(priceTotal());
    }, [carts]);

    const buyAll = () => {
        alert('구매가 완료되었습니다');
        dispatch(resetCart());
    };

    return (
        <CartWrap className="cartBox">
            <div className="inner2">
                <Link to="/">
                    <h1>
                        <img src="./images/content/store/lol_logo.png" alt="" />
                    </h1>
                </Link>
                <Link to="/store">
                    <em className="goBack">
                        <i className="xi-angle-left-min"></i>
                        상점으로
                    </em>
                </Link>
                {carts.length === 0 ? <CartEmpty /> : <CartList />}

                <div className="totalBox">
                    <p>
                        총 개수 : <span>{carts.length}</span>
                    </p>
                    <p>
                        total price : <span>{totalPrice}</span>
                    </p>
                    <p className="cart-btnWrap">
                        <button className="buyAll" onClick={buyAll}>
                            전체구매
                        </button>
                        <button onClick={() => dispatch(resetCart())}>전체삭제</button>
                    </p>
                </div>
            </div>
        </CartWrap>
    );
};

export default StoreCart;
