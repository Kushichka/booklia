import { useNavigate } from 'react-router-dom';
import { Button, Result } from 'antd';

import { HeaderComponent } from '../../components/HeaderComponent';

export const PageNotFound = () => {
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate('/', {replace: true});
    }

    return (
        <>
            <HeaderComponent />
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Button type="primary" onClick={clickHandler}>
                        Back Home
                    </Button>
                }
            />
        </>
    );
}