import { useDispatch, useSelector } from 'react-redux';
import { FirstIcon, LastIcon, NextIcon, PaginationWrap, PrevIcon } from './PaginationStyle';
import { useEffect } from 'react';
import {
    currentPage,
    firstPage,
    lastPage,
    nextPage,
    prevPage,
    totalData,
} from '../../store/modules/paginationSlice';

const Pagination = () => {
    const { communityData } = useSelector((state) => state.community);
    const { currPage, totalPage } = useSelector((state) => state.pagination);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalData());
    }, [communityData]);
    const arr = [...Array(totalPage)];

    const selectPage = (idx) => {
        if (idx >= 1 && idx <= totalPage && idx !== currPage) {
            dispatch(currentPage(idx));
        }
    };

    return (
        <PaginationWrap>
            <button onClick={() => dispatch(firstPage())}>
                <FirstIcon />
            </button>
            <button onClick={() => dispatch(prevPage())}>
                <PrevIcon />
            </button>
            {arr.map((_, i) => (
                <button
                    key={i}
                    className={currPage === i + 1 ? 'on' : ''}
                    onClick={() => selectPage(i + 1)}
                >
                    {i + 1}
                </button>
            ))}

            <button onClick={() => dispatch(nextPage())}>
                <NextIcon />
            </button>
            <button onClick={() => dispatch(lastPage())}>
                <LastIcon />
            </button>
        </PaginationWrap>
    );
};

export default Pagination;
