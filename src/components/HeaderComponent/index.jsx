import { memo, useEffect, useState } from "react";
import { notification, Flex } from "antd";

import { Logo } from "../UI/Logo";
import { SearchBar } from "../UI/SearchBar";
import { UserMenu } from "../UserMenu";

export const HeaderComponent = memo(() => {    
    const [message, setMassage] = useState(null);

    const [notificationApi, contextHolder] = notification.useNotification();

    const showNotification = (type, message) =>{
        notificationApi[type]({
            message: type,
            description: message,
        })
    }

    // useEffect(() => {
    //     // if(data?.docs.length === 0) {
    //     //     setMassage({
    //     //         type: 'warning',
    //     //         text: 'Wrong title. Please, try another one'
    //     //     })

    //     //     navigate('/', {replace: true});
    //     // }

        

    // }, [data]);

    // useEffect(() => {
    //     if(error) {
    //         setMassage({
    //             type: 'error',
    //             text: 'An error occured. Please, try again'
    //         })
             
    //         navigate('/', {replace: true});
    //     }
    // }, [error])

    useEffect(() => {
        if(message) {
            showNotification(message.type, message.text);
            setMassage(null);
        }
    }, [message]);

    return (
        <Flex
            justify="space-between"
            gap={20}
            align="center"
            style={{
                backgroundColor: '#030852',
                padding: '10px 20px'
            }} 
        >
            {contextHolder}

            <Logo />

            <SearchBar />

            <UserMenu />            
        </Flex>
    )
});
