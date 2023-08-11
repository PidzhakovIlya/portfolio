import React from "react";
import {css, styled} from "styled-components";
import {font} from "../../styles/Comman";
import {theme} from "../../styles/Theme";

export type TabStatusType = "all" | "project-1" | "project-2" | "project-3" | "project-4";


type TabsMenuPropsType = {
    tabsItems: Array<{ status: TabStatusType, title: string }>
    changeFilterStatus: (value: TabStatusType)=>void
    currentFilterStatus: string
}
export const TabsMenu = (props: TabsMenuPropsType ) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.currentFilterStatus === item.status}
                              as={"button"}
                              onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    )
}

const StyledTabMenu = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    gap: 98px;
    list-style: none;
    margin: 0 auto 80px;
    max-width: 1200px;
    width: 100%;
  }
`
const ListItem = styled.li`
  
`
const Link = styled.a<{ active?: boolean }>`
  font-size: ${font({Fmax: 36, Fmin: 24})};
  font-weight: 400;
  &:hover {
   &::before{
     height: 10px;
   };
  }
  &::before{
    content: "";
    display: inline-block;
    background-color: ${theme.colors.accent};
    
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;

    ${props => props.active && css `
      height: 10px;
    `

  }
`
