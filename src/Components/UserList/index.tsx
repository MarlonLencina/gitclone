import React from "react";

import { Container, User, Avatar, Role } from "./styles";

interface UserRowProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow = ({
    nickname,
    isBot
}: UserRowProps) => {

    return (

        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

export const UserList = () => {


    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname='Marlon Lencina' ></UserRow>

            <Role>Offline - 10</Role>
            <UserRow  isBot nickname='Dev Marlon' ></UserRow>
            <UserRow nickname='Marlon Lencina' ></UserRow>
            <UserRow nickname='Marlon Lencina' ></UserRow>
            <UserRow nickname='Marlon Lencina' ></UserRow>
            <UserRow nickname='Marlon Lencina' ></UserRow>
            <UserRow nickname='Marlon Lencina' ></UserRow>

        </Container>
    )
}