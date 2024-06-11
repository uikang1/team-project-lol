import { useState } from 'react';
import EsportItem from './EsportItem';
import EsportData from '../../assets/api/Esport';
import { List, MoreButton } from '../../pages/esports/esportstyle';

const EsportList = () => {
    const [BtnItems, setBtnItems] = useState(12);
    const MoreItems = () => {
        setBtnItems((prevVisibleItems) => prevVisibleItems + 12);
    };

    return (
        <>
            <List>
                {EsportData.slice(0, BtnItems).map((item) => (
                    <EsportItem key={item.id} items={item} />
                ))}
            </List>
            {BtnItems < EsportData.length && (
                <MoreButton onClick={MoreItems}>
                    {' '}
                    <i className="xi-plus-circle-o" /> 더보기
                </MoreButton>
            )}
        </>
    );
};

export default EsportList;
