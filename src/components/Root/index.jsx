import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { Col, Row, ConfigProvider } from "antd";

import { auth } from "../../API/firebase";
import { setUser } from "../../redux/slices/userSlice";
import { HeaderComponent } from "../HeaderComponent";

import { theme } from "../../styles/theme";

export const Root = () => {
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, authUser => {
    //         if (authUser) {
    //             dispatch(setUser({
    //                 name: authUser.displayName,
    //                 uid: authUser.uid,
    //                 authProvider: 'google',
    //                 email: authUser.email,
    //                 photoURL: authUser.photoURL
    //             }));
    //         } else {
    //             dispatch(setUser(null));
    //         }
    //     });

    //     return () => {
    //         unsubscribe();
    //     }
    // }, []);

    return (
        <>
            <ConfigProvider theme={theme}>
                <header>
                    <HeaderComponent />
                </header>

                <main>
                    <Row justify='center' style={{ margin: '20px 20px' }}>
                        <Col span={22}>
                            <Outlet />
                        </Col>
                    </Row>
                </main>
            </ConfigProvider>
        </>
    )
}
