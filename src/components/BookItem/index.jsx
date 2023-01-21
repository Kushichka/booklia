import { Typography, Tooltip, Card, Row, Col } from 'antd';

import { BookImg } from '../BookImg';
import { CardButtons } from '../CardButtons';

import style from './BookItem.module.scss';

const { Title, Text } = Typography;

export const BookItem = ({ cover_i, title, author_name, first_publish_year, edition_count, language }) => {

    const bookTitle = title.length > 19 ? `${title.substr(0, 22)}...` : title;
    let languages = '';
    let editions = '';
    const publishYear = first_publish_year ? first_publish_year : 'unknown';
    const author = author_name ? author_name : 'unknown';
    
    if(edition_count) {
        editions = edition_count > 1 ? `${edition_count} editions` : `${edition_count} edition`;
    } else editions = 'unknown editions';

    if(language) {
        languages = language.length > 1 ? `${language.length} languages` : `${language.length} language`
    } else languages = 'unknown languages';

    return (
        <>
            <Card hoverable style={{ width: 500 }}>
                <div className={style.card}>
                    <BookImg cover_i={cover_i} />

                    <div className={style.card_info_wrapper}>
                        <Row>
                            <Col>
                                <Tooltip title={title}>
                                    <Title level={3}>"{bookTitle}"</Title>
                                </Tooltip>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className={style.card_author}>By {author}</p>
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