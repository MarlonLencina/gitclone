
import React from "react";
import { Serverbutton } from "../Serverbutton";

import { Container, Separator, } from "./styles";

export const Serverlist = () => {

    return (
        <Container>
            <Serverbutton isHome />

            <Separator/>

            <Serverbutton hasNotifications />
            <Serverbutton/>
            <Serverbutton/>
            <Serverbutton mentions={15} />
            <Serverbutton/>
            <Serverbutton mentions={3} />
            <Serverbutton hasNotifications/>
            <Serverbutton/>

        </Container>
    )
}