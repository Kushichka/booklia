import { useNavigate } from "react-router-dom";
import { Layout } from "antd"

import { HeaderComponent } from "../../components/HeaderComponent"
import { BookCard } from "../../components/BookCard/BookCard";

const { Content } = Layout;

export const BookPage = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <Layout>
            <HeaderComponent />

            <Content>
                <div onClick={goBack}>Go back</div>
                
                <BookCard />
            </Content>
        </Layout>
    )
}