import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';

import { changeSort } from '../../redux/slices/bookSlice';

import style from './Sort.module.scss';

const { Text } = Typography;
const types = [
    {id: 'relevance', name: 'Relevance'},
    {id: 'editions', name: 'Most Editions'},
    {id: 'new', name: 'New'},
    {id: 'old', name: 'Old'}
]

export const Sort = () => {
    const dispatch = useDispatch();
    const { sort } = useSelector(state => state.bookSlice);
    
    const sortHandler = (e) => {
        e.target.id === 'relevance' ? dispatch(changeSort('')) : dispatch(changeSort(e.target.id));
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