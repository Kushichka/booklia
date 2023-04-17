import { Typography, Tooltip, Card, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom'

import { BookImg } from '../BookImg';
import { CardButtons } from '../CardButtons';

import style from './BookItem.module.scss';

const { Title, Text } = Typography;

export const BookItem = ({ id, cover_i, title, author_name, first_publish_year, edition_count, language }) => {

    const navigate = useNavigate();
    
    const bookTitle = checkLength(title, 50);
    let languages = '';
    let editions = '';
    let author = '';

    const publishYear = first_publish_year ? first_publish_year : 'unknown';
    
    function checkLength (string, maxLength) {
        return string.length > maxLength ? `${string.slice(0, maxLength-3)}...` : string;
    }
    
    
    if(author_name) {
        if (author_name.length > 1) { // if authors more than 1
            author_name.map((item, i) => ( // is comma need
                i > 0 ? author = `${author}, ${item}` : author = item
            ))
        } else author = author_name[0];

    } else author = 'unknown';
    
    if(edition_count) {
        editions = edition_count > 1 ? `${edition_count} editions` : `${edition_count} edition`;
    } else editions = 'unknown editions';

    if(language) {
        languages = language.length > 1 ? `${language.length} languages` : `${language.length} language`
    } else languages = 'unknown languages';

    const handleClick = () => {
        navigate(id);
    }
    
    return (
        <>
            <Card hoverable style={{ width: 500 }}>
                <div className={style.card} onClick={handleClick}>
                    <BookImg cover_i={cover_i} />

                    <div className={style.card_info_wrapper}>
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
                                <Text type="secondary">{editions} in {languages}</Text>
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