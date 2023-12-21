import { useDispatch, useSelector } from 'react-redux';
import { Typography } from 'antd';

import { setSort } from '../../../redux/slices/searchSlice';
import { selectSort } from '../../../redux/selectors/searchSelector';

import style from './Sort.module.scss';

const { Text } = Typography;
const types = [
    { id: 'relevance', name: 'Relevance' },
    { id: 'newest', name: 'Newest' }
]

export const Sort = () => {
    const dispatch = useDispatch();
    const sort = useSelector(selectSort);

    const sortHandler = (e) => dispatch(setSort(e.target.id));

    const elements = types.map(item => {
        const type = sort === item.id ? 'default' : 'secondary';

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