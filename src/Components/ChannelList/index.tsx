import React from "react";
import { ChannelButton } from "../ChannelButton";

import { Container, Category, AddCategoryIcon } from "./styles";



export const ChannelList = () => {


    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>

            <ChannelButton channelName={'chat-livre'} selected/>
            <ChannelButton channelName={'trabalho'}/>
            <ChannelButton channelName={'lolzinho'}/>
            <ChannelButton channelName={'csgo'}/>
            <ChannelButton channelName={'valorant'}/>
 
        </Container>
    )
}