const RequestOptions = ({ type }) => {
    return (
        <>
            {type === 'account' ? (
                <select>
                    <option value="" disabled>
                        -
                    </option>
                    <option value="">계정에대한 문의 또는 요청사항이 있습니다.</option>
                    <option value="">한국 미적용</option>
                </select>
            ) : null}
            {type === 'vanguard' ? (
                <select>
                    <option value="" disabled>
                        -
                    </option>
                    <option value="">뱅가드에서 금지됨</option>
                    <option value="">뱅가드 기술문제</option>
                </select>
            ) : null}
            {type === 'payment' ? (
                <select>
                    <option value="" disabled>
                        -
                    </option>
                    <option value="">결제 진행에 문제가 있습니다.</option>
                    <option value="">결제취소 또는 환불 요청</option>
                </select>
            ) : null}
            {type === 'gameissue' ? (
                <select>
                    <option value="" disabled>
                        -
                    </option>
                    <option value="">채팅 제한 문의</option>
                    <option value="">게임 이용 제한 문의</option>
                    <option value="">후순위 대기열 패널티 문의</option>
                    <option value="">Discuss a Chargeback Ban</option>
                </select>
            ) : null}
            {type === 'report' ? (
                <div>
                    <label htmlFor="">신고하려는 플레이어의 게임 내 이름이 무엇인가요?</label>
                    <input type="text" />
                </div>
            ) : null}
        </>
    );
};

export default RequestOptions;
