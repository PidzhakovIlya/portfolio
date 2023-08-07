import React from "react";
import { Icon } from "../icon/Icon";
import { styled } from "styled-components";
import {theme} from "../../styles/Theme";

type SociaListItemPropsType = {
    iconId: string
    fill?: string
    width?: string
    height?: string
}

export const SociaListItem = (props: SociaListItemPropsType) => {
    return (
        <StyledSocialListItem>
            <SocialLink href="#">
                <Icon width={props.width} height={props.height} fill={props.fill} iconId={props.iconId} />
            </SocialLink>
        </StyledSocialListItem>
    )
}

const StyledSocialListItem = styled.li`
    
        list-style: none;
        /* color: white; */
`
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  
`