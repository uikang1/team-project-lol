import { removeItem } from '../../store/modules/cartSlice';
import { CartItemWrap } from './CartStyle';
import { useDispatch, useSelector } from 'react-redux';
const CartItem = ({ id, title, price, img }) => {
    const dispatch = useDispatch();
    const buy = () => {
        alert('구매가 완료되었습니다');
        dispatch(removeItem(id));
    };

    return (
        <>
            <CartItemWrap>
                <img src={img} alt={title} />
                <strong>{title}</strong>
                <p className="btnWrap">
                    <button className="buy" onClick={buy}>
                        {price}
                    </button>
                    <button className="delete" onClick={() => dispatch(removeItem(id))}>
                        삭제
                    </button>
                </p>
            </CartItemWrap>
        </>
    );
};

export default CartItem;
