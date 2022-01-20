import React from 'react'

import {Container, Avatar, Message, Header, Content} from './styles'

interface MessageProps {
    message: string;
    author: string;
    date: string;
    hasMention?: boolean;
    isBot?: boolean; 
}

export const ChannelMessage = ({
    message,
    author,
    date,
    hasMention,
    isBot
}: MessageProps) => {


    return (

        <Container className={hasMention ? 'mention' : ''} >
            <Avatar className={isBot ? 'bot' : ''} />

            <Message>

                <Header>
                    <strong>{author}</strong>

                    {
                        isBot && <span>Bot</span>
                    }

                    <time>{date}</time>
                </Header>

                <Content>
                    {message}
                </Content>

            </Message>
        </Container>

    )
}
