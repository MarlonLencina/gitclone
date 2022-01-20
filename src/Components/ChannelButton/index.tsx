import React from "react";

import { Container, HashtagIcon, InviteIcon, SettingsIcon } from "./styles";

interface Props {
    channelName: string;
    selected?: boolean;
}

export const ChannelButton = ({channelName, selected}: Props) => {


    return (
        <Container selected={selected} >
            <div>
                <HashtagIcon/>
                <span>{channelName}</span>
            </div>

            <div className="icons">
                <InviteIcon/>
                <SettingsIcon/>
            </div>
        </Container>
    )
}