import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "antd"

export const Logo = memo(() => {
    const navigate = useNavigate();

    const logoStyles = {
        fontSize: '30px',
        color: '#fff',
        cursor: 'pointer'
    }

    const logoHandler = () => navigate('/', { replace: true });

    return (
        <Typography.Text style={logoStyles} onClick={logoHandler}>
            Booklia
        </Typography.Text>
    )
});
