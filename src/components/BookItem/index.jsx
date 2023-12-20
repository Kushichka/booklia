import { Typography, Tooltip, Card } from 'antd';
import { useNavigate } from 'react-router-dom'

import { BookImg } from '../UI/BookImg';
import { CardButtons } from '../UI/CardButtons';
import { authors, checkLength } from '../../utils/bookInfo';

import style from './BookItem.module.scss';

const { Title, Text } = Typography;

export const BookItem = ({ data }) => {
    const navigate = useNavigate();

    const bookData = {
        cover: data?.volumeInfo.imageLinks?.thumbnail,
        title: checkLength(data?.volumeInfo.title, 50),
        titleFull: data?.volumeInfo.title,
        authors: checkLength(data?.volumeInfo.authors, 70),
        authorsFull: authors(data?.volumeInfo.authors),
        publishedDate: data?.volumeInfo.publishedDate
    };

    const handleClick = () => navigate(`/book/${data.id}`);

    return (
        <div className={style.bookItem_wrapper}>
            <Card>
                <div className={style.bookItem_inner}>

                    <div className={style.bookItem_left}>
                        <BookImg cover={bookData.cover} />
                        <CardButtons />
                    </div>

                    <div className={style.bookItem_right} onClick={handleClick}>
                        <Tooltip title={bookData.titleFull}>
                            <Title style={{ textAlign: 'center' }} level={3}>
                                {bookData.title}
                            </Title>
                        </Tooltip>

                        <Tooltip title={bookData.authorsFull}>
                            <Text style={{ textAlign: 'center' }}>By {bookData.authors}</Text>
                        </Tooltip>

                        <Text type="secondary">Published: {bookData.publishedDate}</Text>
                    </div>
                </div>

            </Card>
        </div>
    );
};