import React from "react";
import { ChannelData } from "../../Components/ChannelData";
import { ChannelInfo } from "../../Components/ChannelInfo";
import { ChannelList } from "../../Components/ChannelList";
import { Serverlist } from "../../Components/Serverlist";
import { Servername } from "../../Components/Servername";
import { UserInfo } from "../../Components/UserInfo";
import { UserList } from "../../Components/UserList";
import { Container } from "./styles";

export const Home = () => {

    return (
        <Container>
            <Serverlist/>
            <Servername/>
            <ChannelInfo/>
            <ChannelList/>
            <UserInfo/>
            <ChannelData/>
            <UserList/>
        </Container>
    )
}