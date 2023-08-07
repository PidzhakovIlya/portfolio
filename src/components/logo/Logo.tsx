import React from "react";
import { Icon } from "../icon/Icon";
import { styled } from "styled-components";

export const Logo: React.FC = () => {

    return (
        <StyledLogo href="#">
            <Icon width='48' height="48" viewBox="0 0 48 48" iconId={"logo"} />
            <span>Portfolio</span>
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    text-decoration: none ;
    color: #fff;
    display: flex;
    align-items: center;

    span{
        margin-left: 12px;
    }

`