import { Typography } from 'antd';

import style from './Sort.module.scss';

const { Text } = Typography;
const types = [
    {id: 'relevance', name: 'Relevance'},
    {id: 'editions', name: 'Most Editions'},
    {id: 'new', name: 'New'},
    {id: 'old', name: 'Old'}
]

export const Sort = ({changeSort, sort}) => {
    const sortHandler = (e) => {
        changeSort(e.target.id);
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