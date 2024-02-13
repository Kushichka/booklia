import { Flex } from "antd";
import { v4 } from "uuid";

import { BookItem } from "../BookItem";

export const BookList = ({ data }) => {
    const items = data?.map(item => (
        <BookItem 
            key={item.id + v4()} 
            data={item}
        />
    ));

    return (
        <Flex
            style={{
                maxWidth: "calc(1000px + 20px)"
            }}
            wrap="wrap"
            gap={20}
        >
            {items}
        </Flex>
    );
}