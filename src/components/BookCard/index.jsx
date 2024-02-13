import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import { Rate, Typography, Card, Flex, Tooltip, Tag } from "antd";

import { CardButtons } from "../UI/CardButtons";
import { authors } from '../../utils/bookInfo';
import { BookImg } from "../UI/BookImg";
import { BookCardSkeleton } from './BookCardSkeleton';
import { useGetBookByIdQuery } from "../../API/api";
import { BookCategories } from "./BookCategories";
import { BookDescription } from "./BookDescription";

const cardStyle = {
    boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)'
};

const fontStyle = {
    title: { fontSize: '16px' },
    description: { fontSize: '18px' }
};

const wrapperStyle = {
    maxWidth: '1100px',
    marginBottom: '20px'
}

const { Title, Text } = Typography;

export const BookCard = memo(() => {
    const location = useLocation();
    const bookId = location.pathname.split('/book/')[1];
    const { data, isLoading } = useGetBookByIdQuery(bookId);

    const mainBookTitle = (
        <Tooltip title={data?.volumeInfo.title}>
            <Title
                level={3}
                ellipsis
                style={{
                    textAlign: 'center',
                    margin: 0
                }}
            >
                {data?.volumeInfo.title}
            </Title>
        </Tooltip>
    )

    if (isLoading) {
        return (
            <Flex style={wrapperStyle}>
                <BookCardSkeleton />
            </Flex>
        )
    }

    return (
        <Flex style={wrapperStyle}>
            <Card
                extra={<CardButtons />}
                style={cardStyle}
                title={mainBookTitle}
            >
                <Flex gap={20}>

                    <Flex>
                        <BookImg cover={data?.volumeInfo.imageLinks?.thumbnail} width={350} />
                    </Flex>

                    <Flex vertical gap={10}>
                        <Flex gap={10}>
                            <Text type="secondary" style={fontStyle.title}>
                                Author:
                            </Text>
                            <Text style={fontStyle.description}>
                                {authors(data?.volumeInfo.authors)}
                            </Text>
                        </Flex>

                        <Flex gap={10}>
                            <Text type="secondary" style={fontStyle.title}>
                                Publisher:
                            </Text>
                            <Text style={fontStyle.description}>
                                {data?.volumeInfo.publisher}
                            </Text>
                        </Flex>

                        <Flex gap={10}>
                            <Text type="secondary" style={fontStyle.title}>
                                Publish date:
                            </Text>
                            <Text style={fontStyle.description}>
                                {data?.volumeInfo.publishedDate}
                            </Text>
                        </Flex>

                        <Flex gap={10} align="center">
                            <Text type="secondary" style={fontStyle.title}>
                                Rating:
                            </Text>
                            <Rate defaultValue={data?.volumeInfo.averageRating} allowHalf disabled />

                            {data?.volumeInfo.averageRating && 
                                <Tag color="gold">
                                    {data?.volumeInfo.ratingsCount}
                                </Tag>
                            }
                        </Flex>

                        <Flex gap={10}>
                            <Text type="secondary" style={fontStyle.title}>
                                Language:
                            </Text>
                            <Text style={fontStyle.description}>
                                {data?.volumeInfo.language}
                            </Text>
                        </Flex>

                        <Flex gap={10}>
                            <Text type="secondary" style={fontStyle.title}>
                                Pages:
                            </Text>
                            <Text style={fontStyle.description}>
                                {data?.volumeInfo.pageCount}
                            </Text>
                        </Flex>

                        <BookDescription data={data?.volumeInfo.description} />

                        <BookCategories data={data?.volumeInfo.categories} />
                    </Flex>

                </Flex>
            </Card>
        </Flex>
    )
});
