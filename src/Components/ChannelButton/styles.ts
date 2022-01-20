import styled from "styled-components";

import {
    Hashtag,

} from "styled-icons/heroicons-outline"

import {
    PersonAdd,
    Settings
} from "styled-icons/material"

interface Props {
    selected?: boolean;
}


export const Container = styled.div<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 5px 3px;
    border-radius: 5px;
    background-color: transparent;
    transition: .2s;

    > div {
        display: flex;
        align-items: center;
    }

    > div span {
        color: var(--senary);
        margin-left: 5px;
    }

    &:hover, &:active {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }
    }

    .icons {
        display: none;
    }

    &:hover .icons {
        display: inline;
    }
`


export const HashtagIcon = styled(Hashtag)`

    width: 20px;
    height: 20px;
    color: var(--symbol);


`

export const InviteIcon = styled(PersonAdd)`

width: 16px;
height: 16px;
color: var(--symbol);
cursor: pointer;

transition: .2s;

margin-right: 5px;

&:hover {
    color: var(--white);
}

`

export const SettingsIcon = styled(Settings)`

width: 16px;
height: 16px;
color: var(--symbol);
cursor: pointer;

transition: .2s;

&:hover {
    color: var(--white);
}`
