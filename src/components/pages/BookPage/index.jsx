import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Typography } from "antd"

import { BookCard } from "../../BookCard";

import style from './bookPage.module.scss';

const { Text } = Typography;

export const BookPage = memo(() => {
    const navigate = useNavigate();

    const goBack = async () => {
        navigate(-1);
    }

    return (
        <Flex vertical align="center" gap={20}>
            <Text 
                onClick={goBack}
                className={style.bookPage_goBack}
            >
                Go back
            </Text>
            
            <BookCard />

        </Flex>
    )
})