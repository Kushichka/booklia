import {memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tooltip, Typography, Card } from "antd"

import { CardButtons } from "../UI/CardButtons";
import { authors, checkLength } from '../../utils/bookInfo';
import { BookImg } from "../UI/BookImg";
import { BookCardSkeleton } from './BookCardSkeleton';
import { useGetBookByIdQuery } from "../../API/api";

import style from './BookCard.module.scss';

const { Title } = Typography;

export const BookCard = memo(() => {    
    const location = useLocation();
    const bookId = location.pathname.split('/book/')[1];

    const {data, isLoading} = useGetBookByIdQuery(bookId);

    const bookData = {
        cover: data?.volumeInfo.imageLinks.thumbnail,
        title: checkLength(data?.volumeInfo.title, 50),
        titleFull: data?.volumeInfo.title,
        author: authors(data?.volumeInfo.authors),
        publishedDate: data?.volumeInfo.publishedDate,
        publisher: data?.volumeInfo.publisher,
        language: data?.volumeInfo.language,
        description: data?.volumeInfo.description
    };

    useEffect(() => {
        if (!isLoading && data) {
            console.log(data);
        }
    }, [isLoading, data]);

    if (isLoading) {
        return (
            <div className={style.bookCard_wrapper}>
                <BookCardSkeleton />
            </div>
        )
    }

    return (
        <div className={style.bookCard_wrapper}>
            <Card
                extra={<CardButtons />}
                title={
                    <div className={style.bookCard_title}>
                        <Tooltip title={bookData.titleFull}>
                            <Title level={3}>{bookData.title}</Title>
                        </Tooltip>
                    </div>}
            >
                <div className={style.bookCard_inner}>

                    <div className={style.bookCard_left}>
                        <BookImg cover={bookData.cover} />
                    </div>

                    <div className={style.bookCard_right}>
                        <p className={style.bookCard_right_title}>
                            <span>Author: </span>
                            {bookData.author}
                        </p>

                        <p className={style.bookCard_right_title}>
                            <span>Published: </span>
                            {bookData.publishedDate}
                        </p>

                        <p className={style.bookCard_right_title}>
                            <span>Publisher: </span>
                            {bookData.publisher}
                        </p>

                        <p className={style.bookCard_right_title}>
                            <span>Language: </span>
                            {bookData.language}
                        </p>

                        <div className={style.bookCard_right_title}>
                            <span>Description: </span>
                            <div dangerouslySetInnerHTML={{ __html: bookData.description }} />
                        </div>
                    </div>

                </div>
            </Card>
        </div>
    )
});
