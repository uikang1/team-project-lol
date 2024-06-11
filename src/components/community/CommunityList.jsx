import { useDispatch, useSelector } from 'react-redux';
import { CommunityUl } from '../../pages/community/CommunityStyle';
import CommunityItem from './CommunityItem';
import { useEffect } from 'react';
import { addData } from '../../store/modules/paginationSlice';

const CommunityList = () => {
    const { communityData } = useSelector((state) => state.community);
    const { currPage, postPerPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    const lastPost = currPage * postPerPage;
    const firstPost = lastPost - postPerPage;
    const currentPosts = communityData.slice(firstPost, lastPost);

    useEffect(() => {
        dispatch(addData(communityData));
    }, [communityData, dispatch]);

    return (
        <CommunityUl>
            {currentPosts.map((item) => (
                <CommunityItem key={item.id} item={item} />
            ))}
        </CommunityUl>
    );
};

export default CommunityList;
