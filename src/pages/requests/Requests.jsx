import { useEffect } from 'react';
import RequestForm from '../../components/requests/RequestForm';
import RequestVisual from '../../components/requests/RequestVisual';
import { RequestsWrap } from './requestsStyle';

const Requests = () => {
    const focus = () => {
        let ty = 0;
        window.scrollTo({ top: ty });
    };

    useEffect(() => {
        focus();
    }, []);

    return (
        <RequestsWrap>
            <RequestVisual />
            <h2>문의 등록</h2>
            <p>
                어떠한 내용이라도 답변드릴 준비가 되어 있습니다!
                <br />
                문의를 보내주세요! 가능한 한 빨리 답변 드리도록 하겠습니다.
            </p>
            <RequestForm />
        </RequestsWrap>
    );
};

export default Requests;
