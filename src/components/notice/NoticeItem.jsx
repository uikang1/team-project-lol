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
                <Image src={data.imgurl} alt={data.title} />
                <Info>
                    <h1>공지사항</h1>
                    <Month>{data.month}</Month>
                    <Title>{data.title}</Title>
                    <Text>{data.text}</Text>
                </Info>
            </NoticeLink>
        </ListItem>
    );
};

export default NoticeItem;
