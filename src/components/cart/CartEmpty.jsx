import { Link } from 'react-router-dom';
import { EmptyCartWrap } from './CartStyle';

const CartEmpty = () => {
    return (
        <EmptyCartWrap>
            <div className="emptyCart">
                <h2>장바구니가 비어 있어요!</h2>
                <p className="btnWrap">
                    <Link to="/store">
                        <button>상점으로 이동</button>
                    </Link>
                    <Link to="/">
                        <button>처음으로</button>
                    </Link>
                </p>
            </div>
        </EmptyCartWrap>
    );
};

export default CartEmpty;
