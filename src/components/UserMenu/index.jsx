import { memo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "antd";

import { selectUserData } from "../../redux/selectors/userSelector";
import { ButtonProfile } from "../UI/ButtonProfile";
import { ProfileDropdownMenu } from '../ProfileDropdownMenu';

import style from './UserMenu.module.scss';

export const UserMenu = memo(() => {
    const navigate = useNavigate();
    const userData = useSelector(selectUserData);

    const buttonProfileRef = useRef(null);

    const [openModal, setIsOpenModal] = useState(false);

    const dropDownMenuHandler = () => {
        setIsOpenModal(!openModal);
    }

    const loginHandler = () => navigate('/login');

    if (!userData.isLogged) {
        return (
            <Button 
                type="primary"
                onClick={loginHandler}
            >
                Login
            </Button>
        )
    }

    return (
        <div className={style.userMenu_wrapper}>
            <ButtonProfile
                photoURL={userData.photoURL}
                dropDownMenuHandler={dropDownMenuHandler}
            />

            <ProfileDropdownMenu
                openModal={openModal}
                dropDownMenuHandler={dropDownMenuHandler}
                buttonProfileRef={buttonProfileRef}
            />
        </div>
    )
});
