import { memo, useEffect, useState } from "react";
import { Button, Space, Typography } from "antd";

import { ButtonProfile } from "../UI/ButtonProfile";
import { SignInModal } from "../UI/SignInModal";
import { SignUpModal } from "../UI/SignUpModal";
import { useFirebaseAuthState } from '../../hooks/useFirebaseAuthState';

export const UserMenu = memo(() => {
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const [userData, setUserData] = useState(null);

    const user = useFirebaseAuthState();

    useEffect(() => {
        setUserData(user);
    }, [user]);

    const showLogin = () => {
        setIsOpenLogin(true);
        setIsOpenRegister(false);
    };

    const showRegister = () => {
        setIsOpenRegister(true);
        setIsOpenLogin(false);
    };

    const hideLogin = () => setIsOpenLogin(false);
    const hideRegister = () => setIsOpenRegister(false);

    if (!userData) {
        return (
            <>
                <Button
                    type="primary"
                    onClick={showLogin}
                >
                    Login
                </Button>

                <SignInModal isOpenLogin={isOpenLogin} hide={hideLogin} openRegister={showRegister} />
                <SignUpModal isOpenRegister={isOpenRegister} hide={hideRegister} openLogin={showLogin} />
            </>
        )
    }

    return (
        <Space style={{ cursor: 'pointer' }}>
            <Typography.Text strong style={{ color: '#fff' }}>
                {userData.displayName}
            </Typography.Text>

            <ButtonProfile photoURL={userData.photoURL} />
        </Space>
    )
});
