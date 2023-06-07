import { Card, Skeleton } from "antd"

import style from './BookCardSkeleton.module.scss'

export const BookCardSkeleton = () => {
    return (
        <div className={style.bookCardSkeleton_wrapper}>
            <Card>
                <Skeleton active paragraph={{ rows: 10 }} />
            </Card>
        </div>
    )
}
