import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Card } from 'antd';

import { changeInputValue, getAllBooks } from '../../redux/slices/searchSlice';

export const Suggestions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const suggestions = [
        'Harry Potter', 'The Lord of The Rings', 'The Chronicles of Narnia',
        'The Hunger Games', 'Eragon', 'A Game of Thrones '
    ];

    const styles = {
        textAlign: 'center',
        cursor: 'pointer'
    };

    const clickHandler = (e) => {
        const title = e.target.dataset.name;
        const sortBy = '';
        const page = 1;

        dispatch(changeInputValue(title));

        dispatch(getAllBooks({title, sortBy, page}));
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
