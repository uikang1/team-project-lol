import { useDispatch, useSelector } from 'react-redux';
import { CommunityLi } from '../../pages/community/CommunityStyle';
import { useNavigate } from 'react-router-dom';
import { onDel, onEdit } from '../../store/modules/communitySlice';

const CommunityItem = ({ item }) => {
    const { id, name, title, findposition, myposition, desc, tier } = item;
    const { authed } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onMod = () => {
        dispatch(onEdit({ id, name, title, findposition, myposition, desc, tier }));
        navigate(`/communityedit:${id}`);
    };
    return (
        <>
            <CommunityLi>
                <h3>{title}</h3>
                <p className="tier">
                    <img src={`../images/content/community/${tier}.png`} alt={tier} />
                </p>
                <div className="position">
                    <p>
                        <img
                            src={`../images/content/community/${myposition}_f.svg`}
                            alt={myposition}
                        />
                        <span>{name}</span>
                    </p>
                    <p>
                        <span>찾고있는포지션</span>
                        <img
                            src={`../images/content/community/${findposition}_f.svg`}
                            alt={findposition}
                        />
                    </p>
                </div>
                <p className="desc">{desc}</p>
                {authed ? (
                    <div className="edit">
                        <button onClick={onMod}>수정</button>
                        <button onClick={() => dispatch(onDel(id))}>삭제</button>
                    </div>
                ) : null}
            </CommunityLi>
        </>
    );
};

export default CommunityItem;
