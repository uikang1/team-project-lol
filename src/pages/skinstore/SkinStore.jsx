import { useEffect } from 'react';
import SkinList from '../../components/skinstore/SkinList';
import SkinStoreTop from '../../components/skinstore/SkinStoreTop';
import { StoreWrap } from './skinstore_style';

const SkinStore = () => {
    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <>
            <StoreWrap className="store-box">
                <div className="inner2">
                    <SkinStoreTop />
                    <SkinList />
                </div>
            </StoreWrap>
        </>
    );
};

export default SkinStore;
