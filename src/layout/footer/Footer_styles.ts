import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/Comman";
import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Footer = styled.footer`
  background-color: ${theme.colors.primaryBg};


  & a {
    ${font({weight: 600, Fmax: 42, Fmin: 28})};
    padding: 100px 0;
    text-align: start;
    text-decoration: none;
    color: #fff;
  }

  @media ${theme.media.tablet} {
    gap: 20px;
    padding: 20px 0;
    justify-content: center;
    
    & SocialList{
      width: 30px;
    }
    
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