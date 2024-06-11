import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { CartListWrap } from './CartStyle';

const CartList = () => {
    const { carts, totalPrice } = useSelector((state) => state.cart);

    return (
        <>
            <CartListWrap className="cartList">
                {carts.map((cartItem) => (
                    <CartItem key={cartItem.id} {...cartItem} />
                ))}
            </CartListWrap>
        </>
    );
};

export default CartList;
