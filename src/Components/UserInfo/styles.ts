import styled, { css } from "styled-components";

import {
    Mic, Headset, Settings
} from 'styled-icons/material'

export const Container = styled.div`
    grid-area: UI;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: var(--quaternary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
`

export const Profile = styled.div`

display: flex;
align-items: center;

`

export const Avatar = styled.div`

width: 32px;
height: 32px;
background-color: var(--gray);
border-radius: 50%;

`

export const UserData = styled.div`

display: flex;
flex-direction: column;
margin-left: 5px;

> b {
    color: var(--white);
    font-weight: bold;
    font-size: 13px;
}

> span {
    color: var(--white);
    font-size: 13px;
}

`

export const Icons = styled.div`

display: flex;
align-items: center;

> svg:not(:first-child){
    margin-left: 7px;
}

`

const iconCss = css`

width: 20px;
height: 20px;
color: var(--white);
opacity: 0.7;
cursor: pointer;
transition: .2s;

&:hover {
    opacity: 1;
}

`

export const MicIcon = styled(Mic)`${iconCss}`

export const HeadphoneIcon = styled(Headset)`${iconCss}`

export const SettingsIcon = styled(Settings)`${iconCss}`
