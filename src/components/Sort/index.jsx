import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';

import { changeSort, changeCurrentPage, changeSearchResults } from '../../redux/slices/homePageSlice';

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
    const { sort } = useSelector(state => state.homePageSlice);
    
    const sortHandler = (e) => {
        dispatch(changeSearchResults([]));

        if(e.target.id === 'relevance') {
            dispatch(changeSort(''));
        } else {
            dispatch(changeSort(e.target.id));
            dispatch(changeCurrentPage(1));
        }

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