import { Outlet } from "react-router-dom";
import { ConfigProvider, Flex } from "antd";

import { HeaderComponent } from "../HeaderComponent";
import { Footer } from "../Footer";

import { theme } from "../../styles/theme";

export const Root = () => {
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
