import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";
import {font} from "../../../styles/Comman";

//                     =========Menu========
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.font};
  transition: ${theme.animations.transition};

  & + & {
    top: 50%;
    span {
    display: inline-block;
    transform: translateY(-50%);
  }
}
`
const MenuItem = styled.li`
  position: relative;

`
const NavLink = styled(Link)`
  font-size: ${font({Fmax: 30, Fmin: 18})};
  font-weight: 400;
  color: transparent;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animations.transition};
  }

  &:hover, &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};

      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`




//                           <======Style Mobile Menu=====>

const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{$isOpen: boolean}>`

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${theme.colors.secondaryBg};
  opacity: 0.8; 
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: .5s ease-in-out;

  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    list-style: none;
    transition: 1s ease-in-out;
  }

  ${props => props.$isOpen && css`
    transform: translateY(0);
    
    & ul {
      gap: 98px;
    }
  
  `}
`

const BurgerButton = styled.button<{$isOpen: boolean}>`

  position: fixed;

  top: -46px;
  right: -85px;
  width: 200px;
  height: 200px;
  z-index: 9999999;
  background: transparent;


  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 0;
    bottom: 88px;


    ${props => props.$isOpen && css`

      background-color: rgba(255, 255, 255, 0.02);
    `}
  }

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(0px);
      

       ${props => props.$isOpen && css`

         transform: rotate(-45deg) translateY(-0px)
       `};
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(20px);
      

       ${props => props.$isOpen && css`

         transform: rotate(45deg) translateY(0px);
         width: 36px;
       `};
    }

  }
`

//                   <<<<<<<<<<<DESKTOP MENU>>>>>>>>>>>>

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 98px;
    list-style: none;
    position: relative;
  }
`

export const S = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu
}
