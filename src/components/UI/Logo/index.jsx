import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd"

import { setInputValue } from "../../../redux/slices/searchSlice";

export const Logo = memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoStyles = {
        fontSize: '30px',
        color: '#fff',
        cursor: 'pointer'
    }
    
    const logoHandler = () => {
        navigate('/', {replace: true});
        dispatch(setInputValue(''));
    }

    return (
        <>
            <Typography.Text style={logoStyles} onClick={logoHandler}>
                Booklia
            </Typography.Text>
        </>
    )
});
