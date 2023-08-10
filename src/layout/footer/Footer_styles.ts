import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/Comman";
import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Footer = styled.footer`
  position: relative;
  background-color: ${theme.colors.primaryBg};


  & a {
    ${font({weight: 600, Fmax: 42, Fmin: 28})};
    padding: 100px 0;
    text-align: start;
    text-decoration: none;
    color: #fff;
    transition: ${theme.animations.transition};
    
    &:hover {
      transform: translateY(-10px);
    }
  }

  @media ${theme.media.tablet} {
    gap: 20px;
    padding: 20px 0;
    justify-content: center;
    
    
    &  ${FlexWrapper} {
      
      justify-content: center;
      gap: 50px;
    }

    & ${FlexWrapper} ${FlexWrapper} a {
      padding: 20px 0;
      text-align: center;
    }
  }


}
`

export const S = {
    Footer,
}