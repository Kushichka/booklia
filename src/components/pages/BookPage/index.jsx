import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Row } from "antd"

import { BookCard } from "../../BookCard";

import style from './bookPage.module.scss';

export const BookPage = memo(() => {
    const navigate = useNavigate();

    const goBack = async () => {
        navigate(-1);
    }

    return (
        <>
            <Row justify='center'>
                <div className={style.bookPage_goBack_wrapper}>
                    <p className={style.bookPage_goBack} onClick={goBack}>Go back</p>
                </div>
            </Row>
            
            <Row justify='center'>
                <BookCard />
            </Row>

        </>
    )
})