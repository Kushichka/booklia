import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip, Typography, Card, Rate } from "antd"

import { CardButtons } from "../CardButtons";
import { authors, isPlural, checkLength } from '../../utils/bookInfo';
import { BookImg } from "../BookImg";
import { getLastBook, getDescription } from "../../redux/slices/bookSlice";

import style from './BookCard.module.scss';

const { Title } = Typography;

export const BookCard = () => {
    const dispatch = useDispatch();
    const { description, data } = useSelector(state => state.bookSlice);
    const { title, author, cover, publishYear, editions, language, ratingAvarage } = data;

    const bookTitle = checkLength(title, 50);
    const bookAuthor = authors(author);
    const bookPublishYear = publishYear ? publishYear : 'unknown';
    const bookEditions = isPlural(editions, 'edition');
    const bookLanguagesAmount = isPlural(language, 'language');
    const bookLanguages = language ? language : ['unknown'];
    const bookRating = ratingAvarage ? ratingAvarage : 0;

    useEffect(() => {
        if (data.length === 0) {
            const bookId = localStorage.getItem('bookId');
            const bookTitle = localStorage.getItem('inputValue');
            const sort = localStorage.getItem('sort');
            const page = localStorage.getItem('page');

            dispatch(getLastBook({ bookTitle, sort, page }));
            dispatch(getDescription(bookId));
        }

    }, [data]);

    return (
        <div className={style.bookCard_wrapper}>
            <Card
                extra={<CardButtons />}
                title={
                    <div className={style.bookCard_title}>
                        <Tooltip title={title}>
                            <Title level={3}>{bookTitle}</Title>
                        </Tooltip>
                    </div>}
            >
                <div className={style.bookCard_inner}>

                    <div className={style.bookCard_left}>
                        <BookImg cover={cover} size={'l'} />
                    </div>

                    <div className={style.bookCard_right}>
                        <p className={style.bookCard_right_title}>
                            <span>Author: </span>
                            {bookAuthor}
                        </p>

                        <Tooltip title={bookRating.toFixed(1)}>
                            <div className={style.bookCard_right_rate}>
                                <p>Rating: </p>
                                <Rate disabled allowHalf value={bookRating} />
                            </div>
                        </Tooltip>

                        <p className={style.bookCard_right_title}>
                            <span>First publish: </span>
                            {bookPublishYear}
                        </p>

                        <p className={style.bookCard_right_title}>
                            <span>Editions: </span>
                            {bookEditions}
                        </p>

                        <Tooltip title={bookLanguages.join(', ')}>
                            <p className={style.bookCard_right_title}>
                                <span>Languages: </span>
                                {bookLanguagesAmount}
                            </p>
                        </Tooltip>

                        {description && (
                            <p className={style.bookCard_right_title}>
                                <span>Description: </span>
                                {description}
                            </p>
                        )}
                    </div>

                </div>
            </Card>
        </div>
    )
}
