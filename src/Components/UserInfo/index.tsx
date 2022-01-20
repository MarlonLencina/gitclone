import React from "react";

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from "./styles";



export const UserInfo = () => {


    return (
        <Container>
            <Profile>
                <Avatar/>
                <UserData>
                    <b>Marlon Lencina</b>
                    <span>#devmarlon</span>
                </UserData>
            </Profile>
            <Icons>
                <MicIcon/>
                <HeadphoneIcon/>
                <SettingsIcon/>
            </Icons>
        </Container>
    )
}