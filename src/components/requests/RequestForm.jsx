import { ReqForm } from '../../pages/requests/requestsStyle';
import RequestOptions from './RequestOptions';
import { useState } from 'react';

const RequestForm = () => {
    const [type, setType] = useState('');
    const [form, setForm] = useState({
        type: '',
        title: '',
        email: '',
        desc: '',
    });
    const onType = (e) => {
        setType(e.target.value);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.email || !form.desc) return;
        else {
            alert('제출이 완료되었습니다.');
            setType('');
            setForm({
                title: '',
                email: '',
                desc: '',
            });
        }
    };

    return (
        <ReqForm onSubmit={onSubmit}>
            <div className="select">
                <strong>문의 유형 선택하기</strong>
                <select name="type" value={type} id="" onChange={onType}>
                    <option value="" disabled>
                        -
                    </option>
                    <option value="account">계정 및 보안</option>
                    <option value="vanguard">라이엇 뱅가드 문제 또는 VAN 오류 메세지</option>
                    <option value="payment">결제 문제, 결제취소/환불</option>
                    <option value="gameissue">게임 이용 제한 문의</option>
                    <option value="report">불건전행위 플레이어 신고</option>
                </select>
            </div>

            <div className="input">
                <p>
                    <label htmlFor="">제목</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={onChange}
                        placeholder="제목을 입력해주세요"
                    />
                </p>
                <p>
                    <label htmlFor="">계정이름(로그인 ID) - 정확하게 입력해 주세요!</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="이메일을 입력해주세요"
                    />
                </p>
                <p>
                    <span>발생하고 있는 문제를 선택해 주세요.</span>
                    <RequestOptions type={type} />
                </p>

                <em>설명</em>
                <textarea name="desc" placeholder="설명" value={form.desc} onChange={onChange} />
            </div>
            <p className="btn">
                <button>제출하기</button>
            </p>
        </ReqForm>
    );
};

export default RequestForm;
