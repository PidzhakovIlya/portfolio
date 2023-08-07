import {styled} from "styled-components";
import {font} from "../styles/Comman";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
  ${font({Fmax: 64, Fmin: 36})}
  color: #fff;
  padding: 130px 130px ;

  @media ${theme.media.mobile} {

    padding: 20px 0;
    text-align: center;
  }
`

