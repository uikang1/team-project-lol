import {
    Image,
    Info,
    ListItem,
    Month,
    NoticeLink,
    Text,
    Title,
} from '../../pages/notice/noticeStyle';

const NoticeItem = ({ data }) => {
    return (
        <ListItem>
            <NoticeLink href={data.link}>
                <p>
                    <Image src={data.imgurl} alt={data.title} />
                </p>
                <Info>
                    <strong>공지사항</strong>
                    <Month>{data.month}</Month>
                    <Title>{data.title}</Title>
                </Info>
            </NoticeLink>
        </ListItem>
    );
};

export default NoticeItem;
