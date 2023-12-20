import { Suggestions } from '../../Suggestions';

import style from './HomePage.module.scss';

export const HomePage = () => {
    return (
        <div className={style.homePage_wrapper}>
            <p className={style.homePage_title}>
                Recommendations in this month
            </p>

            <Suggestions />
        </div>
    )
}
