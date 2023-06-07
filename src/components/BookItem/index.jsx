import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Tooltip, Card } from 'antd';
import { useNavigate } from 'react-router-dom'

import { BookImg } from '../BookImg';
import { CardButtons } from '../CardButtons';
import { setBookData, getDescription } from '../../redux/slices/bookSlice';
import { authors, isPlural, checkLength } from '../../utils/bookInfo';

import style from './BookItem.module.scss';

const { Title, Text } = Typography;

export const BookItem = ({ id, cover_i, title, author_name, first_publish_year, edition_count, language, ratings_average }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { inputValue, sort, currentPage } = useSelector(state => state.searchSlice);


    const bookTitle = checkLength(title, 50);
    const lang = isPlural(language, 'language');
    const edition = isPlural(edition_count, 'edition');
    const author = authors(author_name);

    const publishYear = first_publish_year ? first_publish_year : 'unknown';

    const handleClick = useCallback(() => {
        localStorage.setItem('bookId', id);
        localStorage.setItem('inputValue', inputValue);
        localStorage.setItem('sort', sort);
        localStorage.setItem('page', currentPage);

        dispatch(getDescription(id));

        dispatch(setBookData({
            title: title,
            author: author_name,
            cover: cover_i,
            publishYear: first_publish_year,
            editions: edition_count,
            language: language,
            ratingAvarage: ratings_average,
        }));

        navigate(id);
    }, [id]);

    return (
        <div className={style.bookItem_wrapper}>
            <Card>
                <div className={style.bookItem_inner}>

                    <div className={style.bookItem_left}>
                        <BookImg cover={cover_i} size={'m'} />
                        <CardButtons />
                    </div>
                    
                    <div className={style.bookItem_right} onClick={handleClick}>
                        <Tooltip title={title}>
                            <Title style={{ textAlign: 'center' }} level={3}>{bookTitle}</Title>
                        </Tooltip>

                        <Tooltip title={author}>
                            <Text style={{textAlign: 'center'}}>By {checkLength(author, 70)}</Text>
                        </Tooltip>

                        <Text type="secondary">{edition} in {lang}</Text>

                        <Text type="secondary">First published in {publishYear}</Text>
                    </div>
                </div>

            </Card>
        </div>
    );
};