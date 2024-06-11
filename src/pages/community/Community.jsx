import { useEffect } from 'react';
import CommunityList from '../../components/community/CommunityList';
import CommunitySearch from '../../components/community/CommunitySearch';
import Pagination from '../../components/pagination/Pagination';
import { CommunityWrap } from './CommunityStyle';

const Community = () => {
    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <CommunityWrap>
            <div className="inner">
                <h2>자유 게시판</h2>
                <CommunitySearch />
                <CommunityList />
                <Pagination />
            </div>
        </CommunityWrap>
    );
};

export default Community;
