import { useNavigate } from 'react-router-dom'
import { Typography, Tooltip, Card, Flex, Rate, Tag } from 'antd';

import { BookImg } from '../UI/BookImg';
import { CardButtons } from '../UI/CardButtons';
import { authors } from '../../utils/bookInfo';

const { Title, Text } = Typography;
const cardStyle = {
    boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)',
    width: '500px'
};

export const BookItem = ({ data }) => {
    const navigate = useNavigate();

    const bookData = {
        cover: data?.volumeInfo.imageLinks?.thumbnail,
        title: data?.volumeInfo.title,
        authors: authors(data?.volumeInfo.authors),
        rate: data?.volumeInfo.averageRating,
        publishedDate: data?.volumeInfo.publishedDate,
        categories: data?.volumeInfo.categories && data?.volumeInfo.categories[0].split(',')
    };

    const handleClick = () => navigate(`/book/${data.id}`);

    return (
        <Card style={cardStyle}>
            <Flex gap={20}>

                <Flex vertical gap={20} >
                    <BookImg cover={bookData.cover} width={150} />
                    <CardButtons />
                </Flex>

                <Flex 
                    vertical 
                    gap={10} 
                    flex='auto' 
                    style={{overflow: 'hidden'}}
                >
                    <Tooltip title={bookData.title}>
                        <Title 
                            style={{ 
                                textAlign: 'center', 
                                cursor: 'pointer',
                            }} 
                            ellipsis={{ rows: 2 }}
                            level={3}
                            onClick={handleClick}
                        >
                            {bookData.title}
                        </Title>
                    </Tooltip>

                    <Tooltip placement='topLeft' title={bookData.authors}>
                        <Text ellipsis>
                            {bookData.authors}
                        </Text>
                    </Tooltip>

                    <Rate 
                        defaultValue={bookData.rate}
                        allowHalf
                        disabled
                    />                    

                    <Text type="secondary">
                        {bookData.publishedDate}
                    </Text>

                    <Flex gap={10} wrap='wrap'>
                        {bookData.categories?.map(item => (
                            <Tag key={item}>
                                {item}
                            </Tag>
                        ))}
                    </Flex>
                </Flex>

            </Flex>

        </Card>
    );
};