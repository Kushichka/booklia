import { useMemo } from "react";
import { Divider, Flex, Tag } from "antd"
import PropTypes from "prop-types";
import { v4 } from "uuid";

export const BookCategories = ({data}) => {
    const categories = useMemo(() => {
        if (!data) return [];
    
        return [...new Set(data.reduce((acc, current) => {
          acc.push(...current.split(/[,/]/g));
          return acc;
        }, []))];
      }, [data]);

    return (
        <Flex gap={10} wrap='wrap'>
            <Divider />
            
            {categories && categories.map(item => (
                <Tag key={v4()}>
                    {item}
                </Tag>
            ))}
        </Flex>
    )
};

BookCategories.propTypes = {
    data: PropTypes.array
};

BookCategories.defaultProps = {
    data: []
}