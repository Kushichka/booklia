import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';

export const Suggestions = () => {
    const navigate = useNavigate();

    const suggestions = [
        'Harry Potter', 'The Lord of The Rings', 'The Chronicles of Narnia',
        'The Hunger Games', 'Eragon', 'A Game of Thrones '
    ];

    const styles = {
        textAlign: 'center',
        cursor: 'pointer'
    };

    const clickHandler = e => {
        const title = e.target.dataset.name;
        navigate(`search?title=${encodeURIComponent(title)}`);
    }

    const elements = suggestions.map((item, i) => (
        <Card.Grid key={i} data-name={item} style={styles} onClick={clickHandler}>
            {item}
        </Card.Grid>
    ));

  return (
    <Card>
        {elements}
    </Card>
  )
}
