import React from "react";
import { ChannelMessage } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";



export const ChannelData = () => {


    return (
        <Container>
            <Messages>

                <ChannelMessage author="Marlon Lencina" date="21/08/2020" message="Uma mensagem bem legal" hasMention isBot/>
                <ChannelMessage author="Marlon Lencina" date="21/08/2020" message="Uma mensagem bem legal"/>
                <ChannelMessage author="Marlon Lencina" date="21/08/2020" message="Uma mensagem bem legal" isBot/>
                <ChannelMessage author="Marlon Lencina" date="21/08/2020" message="Uma mensagem bem legal"/>

            </Messages>

            <InputWrapper>

            <Input type='text' placeholder="Escreva uma mensagem" />
            <InputIcon/>

            </InputWrapper>
        </Container>
    )
}

