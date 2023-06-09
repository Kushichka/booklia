import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';

import { changeSort, changeCurrentPage, getAllBooks } from '../../redux/slices/searchSlice';
import { sortValue } from '../../utils/bookInfo';
import { selectInputValue, selectSort } from '../../redux/selectors/searchSelector';

import style from './Sort.module.scss';

const { Text } = Typography;
const types = [
    { id: 'relevance', name: 'Relevance' },
    { id: 'editions', name: 'Most Editions' },
    { id: 'new', name: 'New' },
    { id: 'old', name: 'Old' }
]

export const Sort = () => {
    const dispatch = useDispatch();
    
    const sort = useSelector(selectSort);
    const inputValue = useSelector(selectInputValue);

    const sortHandler = (e) => {
        const sortBy = sortValue(e.target.id);
        const title = inputValue;
        const page = 1;

        dispatch(changeSort(sortBy));
        dispatch(changeCurrentPage(1));

        dispatch(getAllBooks({title, sortBy, page}));
    }

    const elements = types.map(item => {
        const type = sort === item.id || (item.id === 'relevance' && sort === '') ? 'default' : 'secondary';

        return (
            <li key={item.id} className={style.item}>
                <Text id={item.id} type={type} onClick={sortHandler}>{item.name}</Text>
            </li>
        )
    })

    return (
        <div className={style.wrapper}>
            <Text>Sort by:</Text>
            <ul className={style.list}>
                {elements}
            </ul>
        </div>
    )
}