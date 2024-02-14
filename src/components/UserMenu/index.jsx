import { memo, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";

import { selectUserData } from "../../redux/selectors/userSelector";
import { ButtonProfile } from "../UI/ButtonProfile";
import { SignInModal } from "../UI/SignInModal";
import { SignUpModal } from "../UI/SignUpModal";

import style from './UserMenu.module.scss';

export const UserMenu = memo(() => {
    const userData = useSelector(selectUserData);

    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);

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

    if (!userData.isLogged) {
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
        <div className={style.userMenu_wrapper}>
            <ButtonProfile
                photoURL={userData.photoURL}
            />
        </div>
    )
});
