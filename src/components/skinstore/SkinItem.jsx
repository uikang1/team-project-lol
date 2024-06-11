import { Link } from 'react-router-dom';
import { SkinItemWrap } from './SkinStoreStyle';

const SkinItem = ({ skinItem }) => {
    const { id, name, title, price, img } = skinItem;
    return (
        <>
            <Link to={`/store/${id}`}>
                <SkinItemWrap>
                    <img src={img} alt={title} />
                    <strong>{title}</strong>
                    <span>{price}</span>
                </SkinItemWrap>
            </Link>
        </>
    );
};

export default SkinItem;
