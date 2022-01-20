import React from "react";

import { Container } from "./styles";
import logo from '../../assets/Logo.svg'

interface Props {
    isHome?: boolean; 
    hasNotifications?: boolean; 
    mentions?: number;
    selected?: boolean;
}

export const Serverbutton = ({
    hasNotifications,
    isHome,
    mentions,
    selected
}: Props) => {


    return (
        <Container isHome={isHome} hasNotifications={hasNotifications} mentions={mentions} className={selected ? 'actived' : ''} >
                {isHome && <img src={logo} alt="logo"/>}
        </Container>
    )
}