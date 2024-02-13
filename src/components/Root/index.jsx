import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { ConfigProvider, Flex } from "antd";

import { auth } from "../../API/firebase";
import { setUser } from "../../redux/slices/userSlice";
import { HeaderComponent } from "../HeaderComponent";

import { theme } from "../../styles/theme";
import { Footer } from "../Footer";

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
        <ConfigProvider theme={theme}>
            <Flex 
                vertical 
                justify="space-between" 
                style={{height: '100vh'}}
            >
                <header>
                    <HeaderComponent />
                </header>

                <main>
                    <Flex 
                        vertical
                        style={{padding: '20px'}}
                    >
                        <Outlet />
                    </Flex>
                </main>

                <footer>
                    <Footer />
                </footer>
            </Flex>
        </ConfigProvider>
    )
}
