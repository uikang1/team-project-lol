import { useSelector } from 'react-redux';
import SkinItem from './SkinItem';
import { SkinListWrap } from './SkinStoreStyle';

const SkinList = () => {
    const { products } = useSelector((state) => state.cart);
    return (
        <>
            <SkinListWrap className="skinList">
                {products.map((skinItem) => (
                    <SkinItem key={skinItem.id} skinItem={skinItem} />
                ))}
            </SkinListWrap>
        </>
    );
};

export default SkinList;
