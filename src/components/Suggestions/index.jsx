import { useNavigate } from 'react-router-dom';
import { Card, Flex } from 'antd';

export const Suggestions = () => {
    const navigate = useNavigate();

    const suggestions = [
        'Harry Potter', 'The Lord of The Rings', 'The Chronicles of Narnia',
        'The Hunger Games', 'Eragon', 'A Game of Thrones '
    ];

    const cardStyle = {
        textAlign: 'center',
        cursor: 'pointer'
    };

    const shadowStyle = {
        boxShadow: '0 1px 2px -2px rgba(0, 0, 0, 0.16),0 3px 6px 0 rgba(0, 0, 0, 0.12),0 5px 12px 4px rgba(0, 0, 0, 0.09)'
    };

    const clickHandler = e => {
        const title = e.target.dataset.name;
        navigate(`search?title=${encodeURIComponent(title)}`);
    }

    const elements = suggestions.map((item, i) => (
        <Card.Grid key={i} data-name={item} style={cardStyle} onClick={clickHandler}>
            {item}
        </Card.Grid>
    ));

  return (
    <Flex>
        <Card style={shadowStyle}>
            {elements}
        </Card>
    </Flex>
  )
}
