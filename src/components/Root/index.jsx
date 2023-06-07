import { Outlet } from "react-router-dom";
import { Col, Row } from "antd";

import { HeaderComponent } from "../HeaderComponent";

import '../../index.css';

export const Root = () => {
    return (
        <>
            
            <header>
                <HeaderComponent />
            </header>

            <main>
                <Row justify='center' style={{margin: '20px 20px'}}>
                    <Col span={22}>
                        <Outlet />
                    </Col>
                </Row>
            </main>
        </>
    )
}
