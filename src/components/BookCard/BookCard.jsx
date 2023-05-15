import { useSelector } from "react-redux";
import { Tooltip, Typography, Card, Rate, Badge } from "antd"

import { CardButtons } from "../CardButtons";
import { authors, isPlural, checkLength } from '../../utils/bookInfo';
import { BookImg } from "../BookImg";

import style from './BookCard.module.scss';

const { Title } = Typography;

export const BookCard = () => {

    const { description, data } = useSelector(state => state.bookSlice);
    const { title, author, cover, publishYear, editions, language, ratingAvarage } = data;

    const bookTitle = checkLength(title, 50);
    const bookAuthor = authors(author);
    const bookPublishYear = publishYear ? publishYear : 'unknown';
    const bookEditions = isPlural(editions, 'edition');
    const bookLanguagesAmount = isPlural(language, 'language');
    const bookLanguages = language ? language : ['unknown'];
    const bookRating = ratingAvarage ? ratingAvarage : 0;

    return (
        <div className={style.bookPage_card_wrapper}>
            <Badge.Ribbon text='Popoular'>
                <Card>
                    <div className={style.bookPage_card}>
                        <div className={style.bookPage_card_left}>
                            <BookImg cover={cover} size={'l'} />
                        </div>

                        <div className={style.bookPage_card_right}>
                            <div className={style.bookPage_card_title}>
                                <Tooltip title={title}>
                                    <Title level={3}>{bookTitle}</Title>
                                </Tooltip>
                            </div>

                            <div className={style.bookPage_card_item}>
                                <p>
                                    <span className={style.bookPage_card_item_title}>Author: </span>
                                    {bookAuthor}
                                </p>
                            </div>

                            <div className={style.bookPage_card_item}>
                                <Tooltip title={bookRating.toFixed(1)}>
                                    <span className={style.bookPage_card_item_title}>
                                        Rating: { }
                                    </span>
                                    <Rate disabled defaultValue={bookRating} />
                                </Tooltip>
                            </div>

                            <div className={style.bookPage_card_item}>
                                <p>
                                    <span className={style.bookPage_card_item_title}>First publish: </span>
                                    {bookPublishYear}
                                </p>
                            </div>

                            <div className={style.bookPage_card_item}>
                                <p>
                                    <span className={style.bookPage_card_item_title}>Editions: </span>
                                    {bookEditions}
                                </p>
                            </div>

                            <div className={style.bookPage_card_item}>
                                <Tooltip title={bookLanguages.join(', ')}>
                                    <p>
                                        <span className={style.bookPage_card_item_title}>Languages: </span>
                                        {bookLanguagesAmount}
                                    </p>
                                </Tooltip>
                            </div>

                            {description && (
                                <div className={style.bookPage_card_item}>
                                    <p className={style.bookPage_card_desc}>
                                        <span className={style.bookPage_card_item_title}>Description: </span>
                                        {description}
                                    </p>
                                </div>
                            )}

                            <CardButtons />
                        </div>
                    </div>
                </Card>
            </Badge.Ribbon>
        </div>
    )
}
