import { useDispatch } from 'react-redux';
import { Typography, Tooltip, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'

import { BookImg } from '../BookImg';
import { CardButtons } from '../CardButtons';
import { getBookData, getDescription } from '../../redux/slices/bookSlice';
import { authors, isPlural, checkLength } from '../../utils/bookInfo';

import style from './BookItem.module.scss';

const { Title, Text } = Typography;

export const BookItem = ({ id, cover_i, title, author_name, first_publish_year, edition_count, language, ratings_average }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const bookTitle = checkLength(title, 50);
    const lang = isPlural(language, 'language');
    const edition = isPlural(edition_count, 'edition');
    const author = authors(author_name);

    const publishYear = first_publish_year ? first_publish_year : 'unknown';
    
    const handleClick = () => {
        dispatch(getDescription(id));

        dispatch(getBookData({
            title: title,
            author: author_name,
            cover: cover_i,
            publishYear: first_publish_year,
            editions: edition_count,
            language: language,
            ratingAvarage: ratings_average,
        }));

        navigate(id);
    }
    
    return (
        <>
            <Card hoverable style={{ width: 500 }}>
                <div className={style.card}>
                    <BookImg cover={cover_i} size={'m'} />

                    <div className={style.card_info_wrapper} onClick={handleClick}>
                        <Row>
                            <Col>
                                <Tooltip title={title}>
                                    <Title level={3}>{bookTitle}</Title>
                                </Tooltip>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Tooltip title={author}>
                                    <p className={style.card_author}>By {checkLength(author, 70)}</p>
                                </Tooltip>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text type="secondary">{edition} in {lang}</Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Text type="secondary">First published in {publishYear}</Text>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <CardButtons />
                            </Col>
                        </Row>
                    </div>
                </div>
            </Card>
        </>
    );
};